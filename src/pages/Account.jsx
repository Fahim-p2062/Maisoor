import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null; // Avoid flickering before redirect

  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="text-display-lg" style={{ marginBottom: '24px' }}>My Account</h1>
        
        <div style={{ 
          background: 'var(--color-surface-container)', 
          padding: '48px', 
          borderRadius: 'var(--radius-lg)',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <h2 className="text-body-lg" style={{ marginBottom: '16px' }}>Welcome back, {user}!</h2>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '32px' }}>
            View your recent orders, manage your shipping addresses, and update your profile settings here.
          </p>
          
          <button 
            className="btn-outline" 
            onClick={handleLogout}
            style={{ padding: '12px 32px' }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default Account;
