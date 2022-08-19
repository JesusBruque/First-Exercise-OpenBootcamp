import React, {useState} from 'react';
import "./a.css";
import B from "../B/B.jsx";
import { contact }  from "../../models/contact.class.js";


function A() {

  const defaultContact = new contact('Jesús', 'Bruque', 'jesus@mail.com', false);
  const [state, setState] = useState(false)

  const changeState = () => {
    setState(true);
  } ;

  return (
    <div className='container'>
      <B  contact={defaultContact}/>
      <button onClick={changeState}>Change State</button>
    </div>
  )
}

export default A

