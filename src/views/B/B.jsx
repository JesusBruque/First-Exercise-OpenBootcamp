import React from 'react';
import "./b.css";
import PropTypes from 'prop-types';
import { contact }  from "../../models/contact.class.js";

function B({contact}) {
    return (
        <div className="card">
            <div className="card-header">
                Contacto
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Nombre: {contact.name}</li>
                <li className="list-group-item">Apellido: {contact.last_name} </li>
                <li className="list-group-item">Email: {contact.email} </li>
                <li className="list-group-item"> {contact.conected ? "Contacto No Disponible" : "Contacto En Línea"} </li>
            </ul>
        </div>
    )
}

B.propTypes = {
    state: PropTypes.instanceOf(contact),
}

export default B

