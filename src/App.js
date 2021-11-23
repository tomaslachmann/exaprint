import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Print from './pages/print';
import References from './pages/references';
import Studio from './pages/studio';
import Navbar from './components/navbar';
import Container from './components/container';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
      <Router>
          <Navbar />
          <Container>
              <Routes>
                  <Route path='/' exact element={<About/>} />
                  <Route path='/studio' element={<Studio/>} />
                  <Route path='/tisk' element={<Print/>} />
                  <Route path='/reference' element={<References/>} />
                  <Route path='/kontakt' element={<Contact/>} />
              </Routes>
          </Container>
          <Footer />
      </Router>
  );
}

export default App;
