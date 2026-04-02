function CarteClient({ nom, solde }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '10px',
      margin: '10px 0',
      backgroundColor: '#f4f7f6'
    }}>
      <h3>Client : {nom}</h3>
      <p>Solde actuel : <strong>{solde} €</strong></p>
    </div>
  );
}

export default CarteClient;