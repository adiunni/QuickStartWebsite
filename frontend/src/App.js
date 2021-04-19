//import logo from './logo.svg';
import './App.css';
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';


function App() {

  const [image, setImage] = useState()


  return (
    <div>
      <Navbar bg="primary" expand="xs" class="navbar-brand navbar sticky-top">
        <Navbar.Brand href="#home" class="text-white">Image Column Display</Navbar.Brand>
      </Navbar>
      <div class='row justify-content-center'>
        <div class="col-md-12">
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Stupidly made image"></img>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Stupidly made image"></img>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Stupidly made image"></img>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Stupidly made image"></img>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Stupidly made image"></img>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Stupidly made image"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
