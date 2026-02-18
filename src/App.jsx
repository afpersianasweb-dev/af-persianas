import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingFallback from './components/LoadingFallback';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy Load Pages
const Login = lazy(() => import('./pages/Admin/Login'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const CategoryDetail = lazy(() => import('./pages/CategoryDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Warranty = lazy(() => import('./pages/Warranty'));

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Admin Routes (Standalone) */}
            <Route path="admin" element={<Login />} />
            <Route
              path="admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Public Routes (Wrapped in MainLayout) */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="catalogo" element={<Catalog />} />
              <Route path="catalogo/:category" element={<CategoryDetail />} />
              <Route path="nosotros" element={<About />} />
              <Route path="contacto" element={<Contact />} />
              <Route path="privacidad" element={<Privacy />} />
              <Route path="garantia" element={<Warranty />} />
              {/* Fallback */}
              <Route path="*" element={<div className="p-10 text-center">Página no encontrada</div>} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
