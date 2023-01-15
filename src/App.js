import { Container } from 'react-bootstrap';
import logo from './logo.svg';
import MyNavbar from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import Products from './components/Product';
function App() {
  return (
    <div className="App">


      <MyNavbar />
      <main className='py-6'>
        <Container>

          <h1>My App</h1>

          <HomeScreen />

        </Container>
      </main>
      <Footer />

    </div>
  );
}

export default App;
