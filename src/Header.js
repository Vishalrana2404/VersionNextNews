import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header()
{
    return(
        <div>
            <div className="website-title">
                V T News
            </div>
            <Navbar className="navbar">
                <Container>
                <Nav className="me-auto">
                    <Link to="/HomePage" className="nav-link">Home</Link>
                </Nav>
                <Nav className="me-auto">
                    <Link to="/Politics" className="nav-link">Politics</Link>
                </Nav>
                <Nav className="me-auto">
                    <Link to="/Sports" className="nav-link">Sports</Link>
                </Nav>
                <Nav className="me-auto">
                    <Link to="/Bollywood" className="nav-link">Bollywood</Link>
                </Nav>                
                <Nav className="me-auto">
                    <Link to="/Health" className="nav-link">Health</Link>
                </Nav>
                <Nav className="me-auto">
                    <Link to="/Business" className="nav-link">Business</Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header