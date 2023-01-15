import { Container } from 'react-bootstrap';
import MyNavbar from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';
import Login from './components/Login';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

function App() {
  return (
    <Router>
      <MyNavbar />
      <main className='py-6'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
