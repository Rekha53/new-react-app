import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer';
import AppContent from './App-Content';
import { useState } from 'react';
function App(props) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App container">
      <Header key={cartCount} />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;

