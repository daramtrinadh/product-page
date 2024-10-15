import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Products from './components/Products';
import Header from './components/Header'
import Login from './components/Login';
import Footer from './components/Footer'
import ProductItemDetail from './components/ProductItemDetail';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => (
    <AuthProvider>
        <Router>
          <Header/>
            <Routes>
              <Route path="/" element={<Products/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/wishlist" element={<Wishlist/>}/>
                <Route 
                    path="/product/:id" 
                    element={<ProtectedRoute><ProductItemDetail /></ProtectedRoute>} 
                />
            </Routes>
            <Footer/>
        </Router>
    </AuthProvider>
);

export default App;
