import React from 'react';
import './App.css';
import axios from 'axios';
const BASE_URL = 'http://www.omdbapi.com/?apikey=5b3682be';
// go inside of react app in terminal
// run command "npm i axios"
// turn this to a class component
class App extends React.Component {
// form tag, return it, on submit, 
  constructor(props) {
    super(props);
    this.state = { /* info stored here */ }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  // async getInformation() {
  //   try {
  //     const res = await axios.get(BASE_URL)
  //     console.log(res.data);
  //   } catch(e) {
  //     console.error(e, e.message);
  //   }
  // }
  async getInformation() {
    // BASE_URL
    const composed_url = BASE_URL + '&t=' + this.state.movieName;
    try {
      // is where we make our API call - axios.get
      const res = await axios.get(composed_url);
      console.log(res.data);
      this.setState({ movie: res.data });
    } catch(e) {
      console.error(e, e.message);
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.getInformation();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={ this.onSubmit } onChange={ this.onChange }>
            <label>
              Movie Name: <input type="text" name="movieName" />
            </label>
            <input type="submit" value="Search Movie" />
          </form>
        </header>
        {
          this.state.movie && <div>
            <h1>Title: { this.state.movie.Title }</h1>
            <h2>Movie year: { this.state.movie.Year }</h2>
            <h3>Movie rating: { this.state.movie.Rated }</h3>
          </div>
        }
      </div>
    );
  }
}
export default App;