import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.css";
import { userData } from "./userData";
import { User } from "./renderUser";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: userData.tanya.name,
                status: userData.tanya.status,
                img: userData.tanya.img,
                testimonial: userData.tanya.testimonial,
            },
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick({ target }) {
        let btn;

        if (target.classList.contains("user__arrows__arrow")) {
            btn = target.closest("div");
        } else {
            btn = target;
        }

        if (btn.dataset.arrow === "right") {
            this.setState({
                user: {
                    name: userData.john.name,
                    status: userData.john.status,
                    img: userData.john.img,
                    testimonial: userData.john.testimonial,
                },
            });
        }

        if (target.dataset.arrow === "left") {
            this.setState({
                user: {
                    name: userData.tanya.name,
                    status: userData.tanya.status,
                    img: userData.tanya.img,
                    testimonial: userData.tanya.testimonial,
                },
            });
        }
    }

    render() {
        return (
            <main className="main">
                <User
                    name={this.state.user.name}
                    status={this.state.user.status}
                    userImg={this.state.user.img}
                    testimonial={this.state.user.testimonial}
                    onClick={this.handleClick}
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
