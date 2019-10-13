import React from 'react'
import Person from '../components/Person'

const PeopleContainer = (props) => {
    let peopleArray = props.people.map(personObj => <Person key={personObj.id} person={personObj} increaseSneezeCount={props.increaseSneezeCount} />)
    return (
        <div className="people-container">
            <h6 style={{ color:"red"}}>5 people adding the same sneeze counts as 5 sneezes!</h6>
            {peopleArray}
        </div>
    )
}
export default PeopleContainer

