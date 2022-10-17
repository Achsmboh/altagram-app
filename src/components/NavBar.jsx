import Container from "react-bootstrap/Container";
import "../styles/App.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

function NavScroll() {
  return (
    <Navbar expand="lg" className="background-nav d-flex">
      <Container fluid>
          <Navbar.Brand href="/" className="fw-bold text-black">
            Altagram
          </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="search d-flex">
              <div>
                <input
                  type="search"
                  placeholder="Search"
                  className="custom-search"
                />
                <BsSearch style={{ width: "20px", height: "20px" }} />
              </div>
            </Form>

            <Nav
              className="button-nav me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="home">
                <AiFillHome style={{ width: "26px", height: "26px" }} />
              </Nav.Link>
              <Nav.Link href="#action2" className="love">
                <AiOutlineHeart style={{ width: "26px", height: "26px" }} />
              </Nav.Link>
              <Nav.Link href="#" className="notif">
                <IoMdNotificationsOutline style={{ width: "26px", height: "26px" }} />
              </Nav.Link>
              <NavDropdown title="Profile" id="navbarScrollingDropdown" className="profile">
                <NavDropdown.Item href="#action3">DASHBOARD</NavDropdown.Item>
                <NavDropdown.Item href="#action4">PROFIL</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">LOG OUT</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
