import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.css";
import { userData } from "./userData";
import { User } from "./renderUser";

class App extends React.Component {
    render() {
        return (
            <main className="main">
                <User
                    name={userData.john.name}
                    status={userData.john.status}
                    userImg={userData.john.img}
                    testimonial={userData.john.testimonial}
                />
            </main>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Dark Blue: hsl(240, 38%, 20%)
// Grayish Blue: hsl(240, 18%, 77%)
// Font size: 32px
// Weights: 300, 500, 700
