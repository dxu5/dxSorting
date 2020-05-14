import React from "react";
import SortingVisualizer from "./SortingVisualizer";

export default class NavBar extends React.Component {
  render() {
    let styles = {
      marginBottom: "60px",
    };
    return (
      <nav style={styles} class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Derek's Sorting Visualizer
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a
                class="nav-link"
                onClick={() => this.props.updateCurrentSort("randomBars")}
              >
                Generate New Bars! <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.updateCurrentSort("mergeBars")}
              >
                Merge Sort
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.updateCurrentSort("quickBars")}
              >
                Quick Sort
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.updateCurrentSort("heapBars")}
              >
                Heap Sort
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.updateCurrentSort("bubbleBars")}
              >
                Bubble Sort
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
