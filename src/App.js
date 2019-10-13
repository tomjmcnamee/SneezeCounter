import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleContainer from './containers/PeopleContainer'
import TopContainer from './containers/TopContainer'

class App extends React.Component {

  state = {
    people: [],
  }

  componentDidMount() {
    this.fetchPeople()
  }

  //GET Requests
  fetchPeople= () => {
    fetch("http://localhost:5555/people")
      .then(resp => resp.json())
      .then(data => this.setState({
        people: data
      }))
    }
    
    //functions responsible for changing sneeze count for each person
    increaseSneezeCount = (personObj) => {
      fetch("http://localhost:5555/people")
        .then(resp => resp.json())
        .then(updatedPeopleArr => {
          // let oldPersonObj = fullPeopleArr.find(obj => { return obj.id === personObj.id})
          //  oldPersonObj.Sneezes = ++oldPersonObj.Sneezes
          // this.setState({
          //   people: data
          // }) // ends this.setState
          this.persistPerson(personObj, updatedPeopleArr)
        })// ends second THEN
    }

  persistPerson = (obj, updatedPeopleArr) => {
    let oldPersonObj = updatedPeopleArr.find(person => { return person.id === obj.id})
    oldPersonObj.Sneezes = ++oldPersonObj.Sneezes
    this.setState({
      people: updatedPeopleArr
     })
    fetch("http://localhost:5555/people/" + obj.id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(
        oldPersonObj
        )
      })
      // .then(resp => resp.json())
      // .then(resp => {
      // })
      
  }


  render() {
    return (
      <div className="App">
        {this.state.people.length > 0 ? (
        <>
          <TopContainer />
          <div id="PeopleContainer">
          <PeopleContainer  increaseSneezeCount={this.increaseSneezeCount}  people={this.state.people}/>
          </div>
         </>
         )
         : (<h1>Loading</h1>)}
      </div>
    );
  }

}

export default App;

