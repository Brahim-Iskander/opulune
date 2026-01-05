"use client";
import { useEffect, useState } from 'react';
import styles from './LoadingPage.module.css';

export default function SimpleLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <svg className={styles.logo} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#f4e5c3" />
              </linearGradient>
            </defs>
            <circle 
              cx="50" 
              cy="50" 
              r="35" 
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              className={styles.moonCircle}
            />
            <circle cx="50" cy="50" r="30" fill="url(#goldGradient)" opacity="0.3" />
            <circle cx="58" cy="42" r="6" fill="rgba(255,255,255,0.4)" />
            <circle cx="45" cy="55" r="4" fill="rgba(255,255,255,0.3)" />
          </svg>
          
          <h1 className={styles.brandName}>Opulune</h1>
          <p className={styles.tagline}>L'Art de la Lumière</p>
        </div>
        
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
}