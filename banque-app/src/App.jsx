import CarteClient from './CarteClient'                // On dit à App d'aller chercher le fichier voisin

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>🏦 Ma Banque Digitale</h1>
      <p>Gestionnaire de comptes : <strong>Presly</strong></p>
      <hr />

      {/* On crée 3 instances de notre composant avec des données différentes */}
      <CarteClient nom="Presly (Moi)" solde={8500} />
      <CarteClient nom="Jean Dupont" solde={-120} />
      <CarteClient nom="Marie Curie" solde={12450} />
      
    </div>
  );
}

export default App;