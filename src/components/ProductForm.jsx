// src/components/ProductForm.jsx
import { useState } from "react";
import axios from "axios";

export default function ProductForm({ clientId, onProductAdded }) {
  const [form, setForm] = useState({
    nom: "",
    prix: "",
    stock: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const produit = { ...form, clientId: clientId };
      await axios.post("/api/produits", produit);
      onProductAdded(); // pour rafraîchir la liste
      setForm({ nom: "", prix: "", stock: "" });
    } catch (err) {
      console.error("Erreur lors de l’ajout du produit", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <h2 className="text-lg font-semibold">Ajouter un produit</h2>
      <input
        type="text"
        name="nom"
        value={form.nom}
        onChange={handleChange}
        placeholder="Nom du produit"
        className="border px-3 py-2 w-full"
        required
      />
      <input
        type="number"
        name="prix"
        value={form.prix}
        onChange={handleChange}
        placeholder="Prix"
        step="0.01"
        className="border px-3 py-2 w-full"
        required
      />
      <input
        type="number"
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="border px-3 py-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Ajouter
      </button>
    </form>
  );
}
