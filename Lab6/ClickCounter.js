import { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}

export default ClickCounter;