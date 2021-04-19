//import logo from './logo.svg';
import './App.css';
import { Media, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';


function App() {

  const [image, setImage] = useState()


  return (
    <div style={{
      backgroundColor:'red',
      width:'1440px',
      height:'700px'
    }}>
      <Navbar bg="primary" expand="xs" class="navbar-brand navbar sticky-top">
        <Navbar.Brand href="#home" class="text-white">Image Column Display</Navbar.Brand>
      </Navbar>
      <p className="text-center">To see the images, run the Backend server </p>
      <div class='row justify-content-center'>
        <div class="col-md-4">
          <img src="http://localhost:4000/images/canvas.png" alt="Stupidly made image" class="mr-4 mt-4"></img>
          <img src="http://localhost:4000/images/canvas(1).png" alt="Stupidly made image" class="ml-4 mt-4"></img>
          <img src="http://localhost:4000/images/canvas(2).png" alt="Stupidly made image" class="mr-4 mt-4"></img>
          <img src="http://localhost:4000/images/canvas(3).png" alt="Stupidly made image" class="ml-4 mt-4"></img>
          <img src="http://localhost:4000/images/canvas(4).png" alt="Stupidly made image" class="mr-4 mt-4"></img>
          <img src="http://localhost:4000/images/canvas(5).png" alt="Stupidly made image" class="ml-4 mt-4"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
