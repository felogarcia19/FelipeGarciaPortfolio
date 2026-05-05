import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/guitars"
          element={<ProductsPage pageTitle="Guitars" forcedCategory="Guitars" hideCategoryBar />}
        />
        <Route
          path="/bass"
          element={<ProductsPage pageTitle="Bass" forcedCategory="Bass" hideCategoryBar />}
        />
        <Route
          path="/keyboards"
          element={<ProductsPage pageTitle="Keyboards" forcedCategory="Keyboards" hideCategoryBar />}
        />
        <Route
          path="/drums"
          element={<ProductsPage pageTitle="Drums" forcedCategory="Drums" hideCategoryBar />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
