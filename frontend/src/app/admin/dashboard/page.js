"use client";
import { useState, useEffect } from 'react';
import styles from './AdminDashboard.module.css';
import axios from 'axios';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      window.location.href = '/auth/users';
    }
  }, []);
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://opulune-4.onrender.com/api/products/getallproducts");
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchProducts();
}, []);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
 const [formData, setFormData] = useState({
  name: '',
  price: '',
  category: 'Classique',
  quantity: '',
  imageUrl: '/b1.png',
  description: ''
});


  const [stats, setStats] = useState({
    totalProducts: 0,
    totalValue: 0,
    lowStock: 0,
    categories: 0
  });

  useEffect(() => {
    calculateStats();
  }, [products]);

  const calculateStats = () => {
  const totalProducts = products.length;
  const totalValue = products.reduce(
    (sum, p) => sum + (p.price * p.quantity),
    0
  );
  const lowStock = products.filter(p => p.quantity < 15).length;
  const categories = new Set(products.map(p => p.category)).size;

  setStats({ totalProducts, totalValue, lowStock, categories });
};

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/auth/users';
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      price: '',
      category: 'Classique',
      quantity: '',
      imageUrl: '/b1.png',
      description: ''
    });
    setShowAddModal(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData(product);
    setShowAddModal(true);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editingProduct) {
      // 🔁 UPDATE product in MongoDB
      const res = await axios.put(
        `http://localhost:8081/api/products/updateproduct/${editingProduct.id}`,
        {
          ...formData,
          price: Number(formData.price),
          quantity: Number(formData.quantity),
        },
        { headers: { "user-role": user.role } }
      );

      setProducts(products.map(p =>
        p.id === editingProduct.id ? res.data : p
      ));

    } else {
      // ➕ ADD product to MongoDB
      const res = await axios.post(
        "http://localhost:8081/api/products/addproduct",
        {
          ...formData,
          price: Number(formData.price),
          quantity: Number(formData.quantity),
        },
        { headers: { "user-role": user.role } }
      );

      setProducts([...products, res.data]);
    }

    setShowAddModal(false);
  } catch (error) {
    console.error("Error saving product:", error);
    alert("Erreur lors de l'enregistrement du produit");
  }
};

  const handleDelete = (id) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
      setProducts(products.filter(p => p.id !== id));
      const deleteProduct = async () => {
        try {
          await axios.delete(`http://localhost:8081/api/products/deleteproduct/${id}`, { headers: { "user-role": user.role } });
        } catch (err) {
          console.error(err);
        }
      };
      deleteProduct();
    }
  };

  return (
    <>
      
      
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <svg viewBox="0 0 100 100" className={styles.logoIcon}>
              <circle cx="50" cy="35" r="15" fill="currentColor" opacity="0.3"/>
              <path d="M 35 50 Q 50 35 65 50 L 65 80 Q 50 90 35 80 Z" fill="currentColor"/>
              <circle cx="50" cy="35" r="8" fill="currentColor"/>
            </svg>
            <div>
              <h1 className={styles.logoText}>Opulune</h1>
              <p className={styles.adminLabel}>Dashboard Admin</p>
            </div>
          </div>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <span className={styles.logoutIcon}>↗</span>
            Déconnexion
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📦</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{stats.totalProducts}</div>
            <div className={styles.statLabel}>Total Produits</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>💰</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{stats.totalValue.toLocaleString()}€</div>
            <div className={styles.statLabel}>Valeur Stock</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>⚠️</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{stats.lowStock}</div>
            <div className={styles.statLabel}>Stock Faible</div>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🏷️</div>
          <div className={styles.statContent}>
            <div className={styles.statValue}>{stats.categories}</div>
            <div className={styles.statLabel}>Catégories</div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Gestion des Produits</h2>
          <button onClick={openAddModal} className={styles.addButton}>
            <span className={styles.addIcon}>+</span>
            Ajouter un produit
          </button>
        </div>

        <div className={styles.productsGrid}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
<img src={product.imageUrl} />
                {product.stock < 15 && (
                  <div className={styles.lowStockBadge}>Stock Faible</div>
                )}
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productHeader}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.productCategory}>{product.category}</span>
                </div>
                <p className={styles.productDescription}>{product.description}</p>
                <div className={styles.productDetails}>
                  <div className={styles.productPrice}>{product.price}€</div>
                  <div className={styles.productStock}>
                    Stock: <strong>{product.quantity}</strong>
                  </div>
                </div>
                <div className={styles.productActions}>
                  <button 
                    onClick={() => openEditModal(product)}
                    className={styles.editButton}
                  >
                    ✏️ Modifier
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className={styles.deleteButton}
                  >
                    🗑️ Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add/Edit Modal */}
      {showAddModal && (
        <div className={styles.modalOverlay} onClick={() => setShowAddModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                {editingProduct ? 'Modifier le produit' : 'Ajouter un produit'}
              </h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className={styles.closeButton}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nom du produit</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Prix (TND)</label>
                  <input
                    type="number"
                    step="0.01"
                    className={styles.formInput}
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Stock</label>
                  <input
                    type="number"
                    className={styles.formInput}
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Catégorie</label>
                <select
                  className={styles.formSelect}
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="Luxe">Luxe</option>
                  <option value="Classique">Classique</option>
                  <option value="Édition Limitée">Édition Limitée</option>
                  <option value="Saisonnier">Saisonnier</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Description</label>
                <textarea
                  className={styles.formTextarea}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Image URL</label>
                <input
                  type="text"
                  className={styles.formInput}
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                />
              </div>

              <div className={styles.formActions}>
                <button 
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className={styles.cancelButton}
                >
                  Annuler
                </button>
                <button type="submit" className={styles.submitButton}>
                  {editingProduct ? 'Mettre à jour' : 'Ajouter'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
}