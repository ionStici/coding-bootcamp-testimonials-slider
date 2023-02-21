import React from "react";
import "./styles/user.scss";

import imgBg from "./images/pattern-bg.svg";
import pattern from "./images/pattern-curve.svg";
import quotes from "./images/pattern-quotes.svg";
import arrowLeft from "./images/icon-prev.svg";
import arrowRight from "./images/icon-next.svg";

export const User = (props) => {
    return (
        <div className="user">
            <div className="user__img-wrapper">
                <img src={imgBg} className="user__bg" alt="" />
                <img src={props.userImg} className="user__photo" alt="User" />
                <div className="user__arrows">
                    <div data-arrow="left" onClick={props.onClick}>
                        <img
                            className="user__arrows__arrow"
                            src={arrowLeft}
                            alt=""
                        />
                    </div>
                    <div data-arrow="right" onClick={props.onClick}>
                        <img
                            className="user__arrows__arrow"
                            src={arrowRight}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="user__testimonial-wrapper">
                <img src={quotes} className="user__quotes-img" alt="" />

                <p className="user__testimonial">{props.testimonial}</p>
                <div>
                    <p className="user__name">{props.name}</p>
                    <p className="user__status">{props.status}</p>
                </div>

                <img src={pattern} className="user__bg-pattern" alt="" />
            </div>
        </div>
    );
};
