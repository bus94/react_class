import './App.css';
import Nav from 'react-bootstrap/Nav';

function Add() {
    return (
        <label>
            <input type='text' placeholder='Add Todo'></input>
            <input type='button' value={Add}></input>
        </label>
    );
}

export default Add;
