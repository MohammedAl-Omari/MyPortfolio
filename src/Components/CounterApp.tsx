import { useState } from "react";
import CounterButton from "./CounterButton";



export default function CounterApp() {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    const actions = [
        { label: "+1", value: 1 },
        { label: "-1", value: -1 },
        { label: "Reset", value: 0 }
    ];
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            {actions.map(action => (
                <CounterButton
                    key={action.label}
                    label={action.label}
                    onClick={() => {
                        if (action.label === "Reset") {
                            setCount(0);
                        } else {
                            setCount(count + action.value);
                        }
                    }}
                />
            ))}
            <hr />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button onClick={() => setCount(count + amount)}>
                Add
            </button>
        </div>
    );
}
