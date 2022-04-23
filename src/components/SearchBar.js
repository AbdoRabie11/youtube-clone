import React, { Component } from "react";
import "./SearchBar.css";
import logo from "../assets/imgs/youtube.webp";
export default class SearchBar extends Component {
  state = { term: "" };
  onChangeInput = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    
  };
  render() {
    return (
      <div className="search-bar ui main__search">
        <img src={logo} className="logo__img" alt="" />
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label></label>
            <input
              type="text"
              onChange={this.onChangeInput}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
