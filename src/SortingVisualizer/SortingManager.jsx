import React from "react";
import Navbar from "./NavBar";
import SortingVisualizer from "./SortingVisualizer";

export default class SortingManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSort: "randomBars",
    };
    this.updateCurrentSort = this.updateCurrentSort.bind(this);
  }

  updateCurrentSort(newSort) {
    this.setState({ currentSort: newSort });
  }

  render() {
    return (
      <div>
        <Navbar updateCurrentSort={this.updateCurrentSort}></Navbar>
        <SortingVisualizer
          currentSort={this.state.currentSort}
        ></SortingVisualizer>
      </div>
    );
  }
}
