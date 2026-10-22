import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Support from './pages/Support';
import Marketing from './pages/Marketing';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Support />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}