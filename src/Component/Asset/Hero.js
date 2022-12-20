import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  <style jsx>{`
    .nav {
      transition: all 0.1s linear;
      position: fixed;
      z-index: 2000;
      padding: 20px;
    }
    .scrollNav {
      transition: all 0.5s ease-in;
      z-index: 2000;
      background: #ffffff;
      width: 100%;
      border-bottom: 1px solid #dddddd;
    }
    .styl {
      padding-top: 80px;
    }
  `}</style>;

  const [fix, setfix] = useState(false);

  function setfixed() {
    if (window.scrollY >= 300) {
      setfix(true);
    } else {
      setfix(false);
    }
  }

  window.addEventListener("scroll", setfixed);
  return (
    <div>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg={fix ? "dark" : "transparent"}
          fixed="top"
          expand={expand}
          className=" "
        >
          <Container fluid>
            <Navbar.Brand
              className="d-flex justify-content-between align-items-center"
              onClick={() => navigate("/")}
            >
              <img
                src="data:image/jpeg;base64,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"
                className=" img-fluid "
                style={{ height: "50px", width: "50px" }}
              />
              <p class="text-light mt-3 mx-3">Thrivers Wagmi</p>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="text-light "
            />
            <Navbar.Offcanvas
              className="bg-dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="bg-dark text-light"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Thrivers Wagmi
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link
                    onClick={() => navigate("/")}
                    className="text-light"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/Career")}
                    className="text-light"
                  >
                    Career
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/Events")}
                    className="text-light"
                  >
                    Events
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/Contact")}
                    className="text-light"
                  >
                    Contact us
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => navigate("/Blogs")}
                    className="text-light"
                  >
                    The Drivers Daily
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div className="nin text-center d-flex align-items-center justify-content-center">
        {/* <div className="nin"></div> */}
        <div className="text-center align-items-center justify-content-center mt-5 mx-5 text-light">
          <h2>WELCOME THRIVERS !!!</h2>
          <br />
          <h5 className="mx-5">
            We are a platform that encourages you to be a skilled, financially
            independent student learner and upcoming professional{" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
