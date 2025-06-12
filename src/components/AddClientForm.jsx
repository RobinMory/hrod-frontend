import React, { useState } from 'react';
import { createClient } from '../api/clientApi';

export default function AddClientForm() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createClient(form);
    window.location.reload(); // à améliorer plus tard avec un state global ou lifting
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Nom</label>
        <input name="nom" onChange={handleChange} value={form.nom} className="border p-2 w-full" required />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="email" onChange={handleChange} value={form.email} className="border p-2 w-full" />
      </div>
      <div>
        <label>Téléphone</label>
        <input name="telephone" onChange={handleChange} value={form.telephone} className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Ajouter Client
      </button>
    </form>
  );
}
