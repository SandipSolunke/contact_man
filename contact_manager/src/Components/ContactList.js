import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const removeContact = (id) => {
        props.getContactId(id);
    }
    const rendercontactlist = props.contacts.map((contact) => {
        return (
            <>
            <ContactCard contact={contact} clickHandler={removeContact} key={contact.id}>
            </ContactCard>
            </>
        )
    })
    return (
        <>
        <h2>
            Contact List
        </h2>
        <div className="ui middle aligned divided list">
            {rendercontactlist}
            <div className="ui divider" style={{borderTop:"1px dashed black"}}></div>
            
        </div>
        </>
    );
}

export default ContactList;