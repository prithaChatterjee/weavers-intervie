import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import { Routing } from './Routing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Sidebar />
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
