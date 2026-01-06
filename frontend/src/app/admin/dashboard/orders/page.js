"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./Orders.module.css";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    if (!storedUser || storedUser.role !== "admin") {
      window.location.href = "/auth/users";
    }
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          "https://opulune-4.onrender.com/api/order/confirmations",
          { headers: { "user-role": user.role } }
        );
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  // Calculate statistics
  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + (order.total || 0), 0),
    averageOrder:
      orders.length > 0
        ? (
            orders.reduce((sum, order) => sum + (order.total || 0), 0) /
            orders.length
          ).toFixed(2)
        : 0,
    todayOrders: orders.filter((order) => {
      const orderDate = new Date(order.orderDate);
      const today = new Date();
      return orderDate.toDateString() === today.toDateString();
    }).length,
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!user) return null;

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>📦 Commandes Confirmées</h1>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className={styles.backButton}
          >
            ← Retour au Dashboard
          </button>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className={styles.statsBar}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{stats.totalOrders}</div>
            <div className={styles.statLabel}>Total Commandes</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>
              {stats.totalRevenue.toLocaleString()} TND
            </div>
            <div className={styles.statLabel}>Revenu Total</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{stats.averageOrder} TND</div>
            <div className={styles.statLabel}>Panier Moyen</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{stats.todayOrders}</div>
            <div className={styles.statLabel}>Aujourd'hui</div>
          </div>
        </div>
      </div>

      {/* Orders Grid */}
      {loading ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>⏳</div>
          <h2 className={styles.emptyTitle}>Chargement...</h2>
        </div>
      ) : orders.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📦</div>
          <h2 className={styles.emptyTitle}>Aucune commande</h2>
          <p className={styles.emptyText}>
            Les commandes confirmées apparaîtront ici
          </p>
        </div>
      ) : (
        <div className={styles.ordersGrid}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <h3 className={styles.orderNumber}>
                  Commande #{order.orderNumber}
                </h3>
                <span className={styles.orderStatus}>✓ Confirmée</span>
              </div>

              <div className={styles.orderBody}>
                <div className={styles.orderInfo}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>👤</span>
                    <div className={styles.infoContent}>
                      <div className={styles.infoLabel}>Client</div>
                      <div className={styles.infoValue}>
                        {order.shippingAddress.name}
                      </div>
                    </div>
                  </div>

                  <div className={styles.infoRow}>
                    <span className={styles.infoIcon}>✉️</span>
                    <div className={styles.infoContent}>
                      <div className={styles.infoLabel}>Email</div>
                      <div className={styles.infoValue}>{order.email}</div>
                    </div>
                  </div>

                  {order.phone && (
                    <div className={styles.infoRow}>
                      <span className={styles.infoIcon}>📞</span>
                      <div className={styles.infoContent}>
                        <div className={styles.infoLabel}>Téléphone</div>
                        <div className={styles.infoValue}>{order.phone}</div>
                      </div>
                    </div>
                  )}

                  {order.shippingAddress && (
                    <div className={styles.infoRow}>
                      <span className={styles.infoIcon}>📍</span>
                      <div className={styles.infoContent}>
                        <div className={styles.infoLabel}>Adresse</div>
                        <div className={styles.infoValue}>
                          {order.shippingAddress.street}
                        </div>
                        <div className={styles.infoValue}>
                          {order.shippingAddress.city}
                        </div>
                        <div className={styles.infoValue}>
                          {order.shippingAddress.country}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.orderTotal}>
                  <span className={styles.totalLabel}>Total</span>
                  <span className={styles.totalValue}>{order.total} TND</span>
                </div>

                <div className={styles.orderDate}>🕒 {order.orderDate}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
