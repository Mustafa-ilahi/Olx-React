import React, {Component} from 'react';
import './header.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import olx_logo from '../assets/olx_logo.png';
import search_icon from '../assets/search_icon.png';
import TextField from './TextField';

class Header extends Component{
    render(){
        return(
            <div>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#f7f8f9",position: "fixed",width:"100%"}}>
                <Navbar.Brand href="#home"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <img src={olx_logo} height= "25px" width="45px"/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <input type="text"/>
                        <img src={search_icon} id="search_icon"/> */}
                    <TextField  placeholder="Pakistan"/>
                    <Nav.Link>
                        <a href="#" id="login">Login</a>
                    </Nav.Link>
                    {/* <NavDropdown title="Pakistan" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}

                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header