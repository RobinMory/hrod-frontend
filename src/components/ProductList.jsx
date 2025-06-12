// src/components/ProductList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/produits")
      .then((res) => setProduits(res.data))
      .catch((err) => console.error("Erreur de chargement produits :", err));
  }, []);

  return (
    <div>
      <h2>Liste des Produits</h2>
      <ul>
        {produits.map((p) => (
          <li key={p.id}>
            {p.nom} – {p.prix} € (Stock: {p.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
