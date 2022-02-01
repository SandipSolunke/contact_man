import React from "react";
import user from "../images/avtar.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{ marginTop: "20px" }}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <div className="right floated content"><i className="trash alternate outiline icon" onClick={() => props.clickHandler(id)} style={{ color: "red", marginTop: "7px" ,cursor:"pointer" }}></i></div>
        </div>
    );
};

export default ContactCard;
