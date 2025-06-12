import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProductListByClient from "../components/ProductListByClient";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [clients, setClients] = useState([]);
  const [refresh, setRefresh] = useState(false); // pour recharger la liste après ajout

  useEffect(() => {
    axios.get("/api/clients")
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
  }, [refresh]);

  const handleProductAdded = () => {
    setRefresh(prev => !prev);
  };

  const clientId = 1; // pour test

  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">

        <ProductForm clientId={clientId} onProductAdded={handleProductAdded} />

        <ProductListByClient clientId={clientId} />
      </main>
      <Footer />
    </>
  );
}
