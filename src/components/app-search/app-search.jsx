import { Component } from "react";
import "./app-search.css"

export default class AppSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }

  onSearch = (e) => {
    this.setState({ term: e.target.value });
    this.props.onUpdateSearch(e.target.value);
  }

  render() {
    return (
      <input
        type="serach"
        placeholder="Type here..."
        value={this.state.term}
        onChange={this.onSearch}
      />
    );
  }
}