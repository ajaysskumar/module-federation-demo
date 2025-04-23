import React from "react";
const fruits = [
    { name: "Apple", quantity: 5, price: 0.5 },
    { name: "Banana", quantity: 6, price: 0.3 },
    { name: "Orange", quantity: 4, price: 0.7 },
];

const FruitsTable = () => (
    <div>
        <h1 style={{ textAlign: "center", color: "green" }}>Hello from Remote App component</h1>
        <table style={{ width: "50%", margin: "0 auto", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2" }}>Name</th>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2" }}>Quantity</th>
                    <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f2f2f2" }}>Price</th>
                </tr>
            </thead>
            <tbody>
                {fruits.map((fruit, index) => (
                    <tr key={index}>
                        <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{fruit.name}</td>
                        <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{fruit.quantity}</td>
                        <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>${fruit.price.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default FruitsTable;