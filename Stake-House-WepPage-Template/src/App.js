import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Opening from './Opening';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import RestaurantInfo from './RestaurantInfo';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="App-wrapper">
        <Opening></Opening>
        <About></About>
        <Menu></Menu>
        <Reservations></Reservations>
        <RestaurantInfo></RestaurantInfo>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
