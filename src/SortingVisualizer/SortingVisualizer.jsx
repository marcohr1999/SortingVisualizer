import React from 'react';
import styled from "styled-components";
import {getMergeSortAnimations} from '../sortingAlgorithms/mergeSort.js';
import {getHeapSortAnimations} from "../sortingAlgorithms/heapSort.js";
import {getBubbleSortAnimations} from "../sortingAlgorithms/bubbleSort.js";
import {getQuickSortAnimations} from "../sortingAlgorithms/quickSort.js";
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 5;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 65;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#78909c';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';
const MIN_ARRAY_VALUE = 5;
const MAX_ARRAY_VALUE = 700;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            disabled: false
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS-1; i++) {
            array.push(randomIntFromInterval(MIN_ARRAY_VALUE, MAX_ARRAY_VALUE));
        }
        this.setState({array});
    }

    printAnimations(animations){
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }

    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        // This runs the animation of merge sort
        this.printAnimations(animations);
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        this.printAnimations(animations);
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        this.printAnimations(animations);
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        this.printAnimations(animations);
    }

    render() {
        const {array} = this.state;

        const Button = styled.button`
                    background-color: #888888;
                    color: white;
                    font-size: 18px;
                    padding: 5px 30px;
                    border-radius: 3px;
                    margin: 10px 0;
                    cursor: pointer; 
                    &:disabled {
                    color: grey;
                    opacity: 0.7;
                    cursor: default;
                    }`;

        // Want to add slider for array size and animation speed
        return (
            <div>
                <h1 className={"Title"}>Sorting Algorithms</h1>
            <td className="array-container" valign={"bottom"}>
                {array.map((value, idx) => (
                    <td
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,

                        }}></td>
                ))}

            </td>
                <div className={"button-container"} >
                    <Button disabled = { this.state.disabled }
                            onClick={() => this.resetArray()}>Generate New Array</Button> &nbsp;
                    <Button disabled = { this.state.disabled }
                            onClick={() => this.mergeSort()}>Merge Sort</Button>&nbsp;
                    <Button disabled = { this.state.disabled }
                            onClick={() => this.quickSort()}>Quick Sort</Button>&nbsp;
                    <Button disabled = { this.state.disabled }
                            onClick={() => this.heapSort()}>Heap Sort</Button>&nbsp;
                    <Button disabled = { this.state.disabled }
                            onClick={() => this.bubbleSort()}>Bubble Sort</Button>
                </div>
            </div>
        );
    }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}