import React, {useState} from 'react';
import Input from './input.js';

 const App = () => {
    let [someMin, setSomeMin] = useState(20);

    setTimeout(() => {
        setSomeMin(40);
    }, 2000);

    return (
        <div>
            <h2>Derrived input</h2>
            <Input min={someMin} max={50} key={someMin + ':' + 50} />
        </div>
    );
}

export default App;