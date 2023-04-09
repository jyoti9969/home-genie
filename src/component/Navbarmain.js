import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"

function Navbarmain() {
  return (
    <Navbar  expand="lg" className="d-flex mb-3  px-2   backcolor"  >
      <Container fluid>
        <Navbar.Brand to="/"><img style={{ height: "3em",width:"4em" }}
          src="https://cdn-icons-png.flaticon.com/128/619/619032.png" alt="logo" />
         
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form.Select style={{ width: "12em", borderRadius: "0", height: "2.6em" }} className=" border-dark" >
            <option> Pune</option>
            <option> Rajpura</option>
          </Form.Select>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="   border-dark "
              aria-label="Search"
              style={{ width: '30em', borderRadius: "0", marginLeft: "3em" }}
            />
            <Button variant="outline-success  border-dark" style={{ borderRadius: "0" }}><img style={{ height: "30px" }} src="https://cdn-icons-png.flaticon.com/128/15/15771.png" alt="search" /></Button>
          </Form>
          <Form.Select style={{ width: "8em", marginLeft: "3rem", borderRadius: "0" }} className="   border-dark "  >
            <option>SORT &#x21c5;     </option>
            <option>SORT BY PRICE</option>
            <option>SORT BY MALE</option>
            <option>SORT BY FEMALE</option>
            <option>SORT BY UNISEX</option>

          </Form.Select>
          
          <Link to="/" className="text-black ms-4" ><h5>Login</h5></Link>
          <button type="button" className="btn btn-warning ms-4 px-4 border border-dark "><b>+SELL</b></button>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarmain;