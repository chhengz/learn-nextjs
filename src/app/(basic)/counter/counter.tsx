"use client";

import { useState } from "react";


export const CounterComponent = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter</h1>

            <h2>Count: {count}</h2>

            <div className="flex space-x-4">

                <button onClick={() => setCount(count - 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Decrement
                </button>

                <button onClick={() => setCount(count + 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Increment
                </button>
            </div>

        </>
    );
}