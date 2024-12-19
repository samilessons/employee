import { Component } from "react";
import "./app-search.css"

export default class AppSearch extends Component {
  render() {
    return (
      <div className="app-search">
        <input
          type="serach"
          placeholder="Type here..."
        />
        <button>Search</button>
      </div>
    );
  }
}