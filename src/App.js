import 'primereact/resources/themes/lara-light-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';               
import 'primeicons/primeicons.css';

import './App.css';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="appContainer">
      <div className="menuContainer">
        <Navbar/>
      </div>
      <div className='main'>
        <h1>Gerenciador de Documentos</h1>
      </div>
    </div>
  );
}

export default App;
