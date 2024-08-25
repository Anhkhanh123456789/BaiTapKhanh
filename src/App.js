import logo from './logo.svg';
// import './App.css';
import Button from './components/button/button';
import NavBar from './components/header/navbar';
import Footer from './components/footer/footer';
import Copyright from './components/footer/copyright';
import './mainn.css';
import './assets/css/container.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Button/>
        <div className="container1">
          <main className="Mainn">
              <Footer/>
              <Copyright/>
          </main>
        </div>          
    </div>
  );
}

export default App;
