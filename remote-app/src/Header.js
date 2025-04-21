import React from "react";
const vegetables = [
    { name: "Carrot", quantity: 10, price: 0.5 },
    { name: "Broccoli", quantity: 5, price: 1.2 },
    { name: "Spinach", quantity: 8, price: 0.8 },
];

const Header = () => (
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
                {vegetables.map((veg, index) => (
                    <tr key={index}>
                        <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{veg.name}</td>
                        <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{veg.quantity}</td>
                        <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>${veg.price.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default Header;