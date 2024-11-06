import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import UsuarioCadastro from './components/pages/UsuarioCadastro';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />          
          <Route path="/project/:id" element={<Project />} />
          <Route path="/pessoa/cadastro" element={<PessoaForm />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
