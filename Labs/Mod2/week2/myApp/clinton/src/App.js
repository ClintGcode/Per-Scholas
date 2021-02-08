import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/' // + /people /planets /starships

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // make an API call for both people and starships
  // set them both to state
  async getPlanets() {
    try {
      const res = await axios.get(BASE_URL + 'planets');
      this.setState({ planets: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  async getStarships() {
    try {
      const res = await axios.get(BASE_URL + 'starships');
      this.setState({ starships: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPlanets();
    this.getStarships();
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/people">people</Link>
              </li>
              <li>
                <Link to="/planets">planets</Link>
              </li>
              <li>
                <Link to="/starships">starships</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/people">
              <People people={ this.state.people } />
            </Route>
            <Route path="/planets">
              <Planets planets={ this.state.planets }/>
            </Route>
            <Route path="/starships">
              <Starships starships={ this.state.starships }/>
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
  );
  }
}
function Home() {
  return (
    <div>
      <h1>Home component</h1>
    </div>
  )
}



class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async getPeople() {
    try {
      const res = await axios.get(BASE_URL + 'people');
      this.setState({ people: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPeople();
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.people && this.state.people.results.map(person => {
              console.log(person)
              return (
                <div>
                  <h1>Persons name: { person.name }</h1>
                  <h2>Persons height: { person.height }</h2>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
  componentWillUnmount(){
    this.setState = {}
  }
}

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async getPlanets() {
    try {
      const res = await axios.get(BASE_URL + 'planets');
      this.setState({ planets: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getPlanets();
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.state.planets && this.state.planets.results.map(planet => {
              console.log(planet)
              let color = planet.climate == 'frozen' ? 'lightblue' : 'orange';
              return (
                <div>
                  <h1>Planet Name: { planet.name }</h1>
                  <h2 style={{color: color}}>Planet Temperature: { planet.climate }</h2>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
  componentWillUnmount(){
    this.setState = {}
  }
}

class Starships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  async getStarships() {
    try {
      const res = await axios.get(BASE_URL + 'starships');
      this.setState({ starships: res.data })
    } catch(e) {
      console.error(e);
    }
  }
  componentDidMount() {
    this.getStarships();
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.state.starships && this.state.starships.results.map(starship => {
              console.log(starship)
              
              return (
                <div>
                  <h1>Starship Name: { starship.name }</h1>
                  <h2>Starship Manufacturer: { starship.manufacturer }</h2>
                </div>
              )
            })
          }
        </ul>
      </div>
    )
  }
  componentWillUnmount(){
    this.setState = {}
  }
}

function About() {
  return <h2>About</h2>;
}
// function Users() {
//   return <h2>Users</h2>;
// }