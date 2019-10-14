import React from 'react'
import Button from 'react-bootstrap/Button';

const Person = (props) => {

    return (
        <div className="personDiv d-flex justify-content-between">
            <h1>{props.person.name}</h1>
            <div className="d-flex justify-content-start"><h3>Sneeze Count: {props.person.Sneezes}</h3></div>
            <Button id="SneezeButton" className="btn btn-success" onClick={() => {props.increaseSneezeCount(props.person)}}>Achoo!</Button>
        </div>
    )   
}

export default Person


