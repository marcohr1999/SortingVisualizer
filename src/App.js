import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
    return (
        <div className = "Sorting Visualizer Project" style={{
            display: 'flex',
            alignItems: 'bottom',
            justifyContent: 'center',
        }}>
            <SortingVisualizer>
            </SortingVisualizer>
        </div>
    );
}

export default App;