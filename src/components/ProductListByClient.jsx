import React, { useEffect, useState } from 'react';
import { fetchProduitsByClientId } from "../api/api";



function ProductListByClient({ clientId }) {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduitsByClientId(clientId)
      .then(data => setProduits(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [clientId]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Produits du client #{clientId}</h2>
      <ul>
        {produits.map(prod => (
          <li key={prod.id}>
            {prod.nom} — {prod.prix}€ (Stock: {prod.stock})
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ProductListByClient;
