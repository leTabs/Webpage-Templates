import logo from './logo.svg';
import NavBar from './NavBar';
import Opening from './Opening';
import Practices from './Practices';
import About from './About';
import Attorneys from './Attorrneys'
import Contact from './Contact';
import Footer from './Footer';
import './App.css';



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Opening></Opening>
      <Practices></Practices>
      <About></About>
      <Attorneys></Attorneys>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
