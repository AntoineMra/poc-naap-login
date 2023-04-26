import React from "react";
import Image from "../assets/icons/Ellipse-temp1.svg"

export const Post = (props) => {
    return (
        <div className="Post">
            <div className="Post-Header">
                <img src={Image} alt=""  className="Post-Image"/>
                <div className="Post-Header-Flex">
                    <p className="Post-Header-Names">
                        {props.state.Name} {props.state.FamilyName}
                    </p>
                </div>
            </div>
        </div>
    ) 
}