import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.generatePeople();
  }

  generatePeople = () => {
    API.search()
      .then(res => {
        this.setState({ results: res.data.results[0] });
        // console.log({ results: res.data.results[0] });
        console.log(this.state.results);
        console.log('----------------');
        console.log(res.data.results[0])//contains the info needed
      })
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchGiphy(this.state.search);
  // };

  render() {
    return (
      <div>
        {/* <SearchForm
          // search={this.state.search}
          // handleFormSubmit={this.handleFormSubmit}
          // handleInputChange={this.handleInputChange}
        /> */}
        <ResultList 
        // results={this.state.results} 
        />
      </div>
    );
  }
}

export default SearchResultContainer;
