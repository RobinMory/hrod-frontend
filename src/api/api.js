export async function fetchProduitsByClientId(clientId) {
  const response = await fetch(`http://localhost:8080/api/produits/client/${clientId}`);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des produits");
  }
  return response.json();
}
