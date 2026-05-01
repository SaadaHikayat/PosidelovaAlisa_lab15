import Head from './Components/Head/index.jsx'
import Main from './Components/Main/index.jsx'
import Footer from './Components/Footer/index.jsx'
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head/>
        <Main/>
        <Footer/>     
      </BrowserRouter>
    </div>
  );
}

export default App;
