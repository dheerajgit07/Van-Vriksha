import React, { createContext, useContext, useState } from 'react';

const defaultState = {
  activeTab: 'home',
  navigateTo: () => {},
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartQuantity: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  toast: null,
  showToast: () => {},
  isCertModalOpen: false,
  setIsCertModalOpen: () => {},
  certData: {},
  setCertData: () => {},
  openCertificateGenerator: () => {},
  selectedSpecies: null,
  setSelectedSpecies: () => {}
};

const AppContext = createContext(defaultState);

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [certData, setCertData] = useState({
    guardianName: 'Aarav Sharma',
    treeSpecies: 'Sacred Banyan Tree (Ficus benghalensis)',
    location: 'Vanvriksha Reserve Forest, Sector 4',
    dedication: 'In loving memory of grandmother & clean air for future generations',
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  });
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  const navigateTo = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to your Green Basket! 🍃`);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const openCertificateGenerator = (data = {}) => {
    setCertData((prev) => ({ ...prev, ...data }));
    setIsCertModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        navigateTo,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        isCartOpen,
        setIsCartOpen,
        toast,
        showToast,
        isCertModalOpen,
        setIsCertModalOpen,
        certData,
        setCertData,
        openCertificateGenerator,
        selectedSpecies,
        setSelectedSpecies
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext) || defaultState;
