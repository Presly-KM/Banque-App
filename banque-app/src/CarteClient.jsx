function CarteClient({ nom, solde }) {
  // On crée une variable pour savoir si le client est à découvert
  const estDebiteur = solde < 0;

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '10px',
      margin: '10px 0',
      // On change le fond en rouge très clair si le client est débiteur
      backgroundColor: estDebiteur ? '#fff5f5' : '#f4f7f6' 
    }}>
      <h3>Client : {nom}</h3>
      <p>Solde actuel : <strong>{solde} €</strong></p>
      
      {solde > 10000 && (
  <p style={{ color: 'gold', fontWeight: 'bold', fontSize: '1.2em' }}>
    ⭐ Client Premium (Accès VIP)
  </p>
)}

      {/* C'est ICI qu'on ajoute la mention manquante */}
      <p style={{ color: estDebiteur ? 'red' : 'green', fontWeight: 'bold' }}>
        Statut : {estDebiteur ? "⚠️ Débiteur (Alerte)" : "✅ Créditeur"}
      </p>
    </div>
  );
}

export default CarteClient;