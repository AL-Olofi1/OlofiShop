import {Container} from 'react-bootstrap';  
import logo from './logo.svg';
import MyNavbar from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      
      <MyNavbar />
      <main className='py-6'>
      <Container>

      <h1>My App</h1>

      </Container>
      </main>
      <Footer />

    </div>
  );
}

export default App;
