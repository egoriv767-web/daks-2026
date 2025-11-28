import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ProgramPage from './pages/ProgramPage';
import ExhibitionPage from './pages/ExhibitionPage';
import { AuthProvider, useAuth } from './lib/auth';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  return children;
};

const AppContent = () => {
  const { user, logout } = useAuth();

  return (
    <MainLayout user={user} onLogout={logout}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/program/exhibition" element={<ExhibitionPage />} />
        <Route path="/program/:trackId" element={<ProgramPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
