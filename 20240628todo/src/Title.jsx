import './App.css';
import Nav from 'react-bootstrap/Nav';

function Title() {
    return (
        <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home" style={{color: 'chocolate'}}>All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home" style={{color: 'chocolate'}}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home" style={{color: 'chocolate'}}>Completed</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Title;