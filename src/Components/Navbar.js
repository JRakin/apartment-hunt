import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Navibar = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  return (
    // <Navbar classNameName="px-md-5 navi" bg="transparent" expand="lg">
    //   <Navbar.Brand href="#home">
    //     <img src={logo} alt="" />
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav classNameName="ml-auto ">
    //       <Nav.Link href="/home">Home</Nav.Link>
    //       <Nav.Link href="/">About</Nav.Link>
    //       <Nav.Link href="/">Service</Nav.Link>
    //       <Nav.Link href="/MyRent">Dashboard</Nav.Link>
    //       <Nav.Link href="/">Contact</Nav.Link>
    //       {!loggedInUser.name && (
    //         <Link to="/Login">
    //           {' '}
    //           <Button classNameName="btn" variant="info">
    //             Log in
    //           </Button>
    //         </Link>
    //       )}
    //       {loggedInUser.name && (
    //         <Button
    //           classNameName="btn"
    //           variant="info"
    //           onClick={() => setloggedInUser('')}
    //         >
    //           Log Out
    //         </Button>
    //       )}
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img className="w-25" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MyRent">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            {!loggedInUser.name && (
              <Link to="/Login">
                {' '}
                <Button className="btn" variant="info">
                  Log in
                </Button>
              </Link>
            )}
            {loggedInUser.name && (
              <Button
                className="btn"
                variant="info"
                onClick={() => setloggedInUser('')}
              >
                Log Out
              </Button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navibar;
