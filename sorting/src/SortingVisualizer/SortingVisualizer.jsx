import React from "react";
import {
  getMergeSortAnimations,
  getBubbleSortAnimations,
  getQuickSortAnimations,
  getHeapSortAnimations,
} from "../sortingAlgorithms/sortingAlgorithms.js";
import "./SortingVisualizer.css";

//Change this value for the speed of the animations
const ANIMATION_SPEED_MS = 1;

//Change this value for the number of bars (value) in the array

const NUMBER_OF_ARRAY_BARS = 310;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  calculateColor(height) {
    var maxHeight = 640;
    var frequency = (2 * Math.PI) / maxHeight;
    let red = Math.sin(frequency * height + 2) * 100 + 100;
    let green = Math.sin(frequency * height + 4) * 100 + 100;
    let blue = Math.sin(frequency * height + 6) * 100 + 100;
    return (
      "rgb(" +
      Math.round(red) +
      "," +
      Math.round(green) +
      "," +
      Math.round(blue) +
      ")"
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentSort !== prevProps.currentSort) {
      switch (this.props.currentSort) {
        case "randomBars":
          this.resetArray();
          break;
        case "mergeBars":
          this.mergeSort();
          break;
        case "quickBars":
          this.quickSort();
          break;
        case "heapBars":
          this.heapSort();
          break;
        case "bubbleBars":
          this.bubbleSort();
          break;
      }
    }
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 640));
    }
    this.setState({ array });
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = this.calculateColor(
        Number(arrayBars[i].style.height.slice(0, -2))
      );
    }
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // const color =
        //   i % 3 === 0
        //     ? "black"
        //     : this.calculateColor(Number(barOneStyle.height.slice(0, -2)));
        // const color2 =
        //   i % 3 === 0
        //     ? "black"
        //     : this.calculateColor(Number(barTwoStyle.height.slice(0, -2)));
        // setTimeout(() => {
        //   barOneStyle.backgroundColor = color2;
        //   barTwoStyle.backgroundColor = color2;
        // }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.backgroundColor = this.calculateColor(
            Number(barOneStyle.height.slice(0, -2))
          );
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (arrayBars[barOneIdx] !== undefined) {
          const barOneStyle = arrayBars[barOneIdx].style;
        }
        const color = "white";
        setTimeout(() => {
          if (arrayBars[barOneIdx] !== undefined) {
            arrayBars[barOneIdx].style.backgroundColor = color;
          }
          if (arrayBars[barTwoIdx] !== undefined) {
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          if (arrayBars[barOneIdx] !== undefined) {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            barOneStyle.backgroundColor = this.calculateColor(
              Number(barOneStyle.height.slice(0, -2))
            );
          }
        }, i * 1);
      }
    }
  }

  heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        if (arrayBars[barOneIdx] !== undefined) {
          const barOneStyle = arrayBars[barOneIdx].style;
        }
        const color = "white";
        setTimeout(() => {
          if (arrayBars[barOneIdx] !== undefined) {
            arrayBars[barOneIdx].style.backgroundColor = color;
          }
          if (arrayBars[barTwoIdx] !== undefined) {
            arrayBars[barTwoIdx].style.backgroundColor = color;
          }
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          if (arrayBars[barOneIdx] !== undefined) {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            barOneStyle.backgroundColor = this.calculateColor(
              Number(barOneStyle.height.slice(0, -2))
            );
          }
        }, i * 1);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = "white";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.backgroundColor = this.calculateColor(
            Number(barOneStyle.height.slice(0, -2))
          );
        }, i * 1);
      }
    }
  }

  render() {
    const { array } = this.state;
    let styles = {
      marginBottom: "40px",
    };
    return (
      <div style={{ marginTop: "60px" }} className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              backgroundColor: this.calculateColor(value),
            }}
          ></div>
        ))}
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
