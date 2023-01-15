import { Container } from 'react-bootstrap';
import MyNavbar from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MyNavbar />
      <main className='py-6'>
        <Container>
          <Routes> 
            <Route path='/' element={<HomeScreen />} exact /> 
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
