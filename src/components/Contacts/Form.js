import { React, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { addContact,delAllContact,contactSelector } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";
function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("")
  const dispatch = useDispatch();

  const contactsTotal = useSelector(contactSelector.selectAll)

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || number === "") {
      return false;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setNumber("");
    setName("");
    
  };

  const handleDelAll = () => {
  dispatch(delAllContact());
  };


  return (
    <div className="items-center ">
      <form onSubmit={handleSubmit}>
        <h1>Contacts</h1>
        <input className="rounded-xl"
          placeholder="  name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="ml-2 rounded-xl"
          placeholder="  number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="ml-2 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Add</button>
        {contactsTotal ? <button className="ml-2 bg-transparent hover:bg-red-500 text-red-200 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={handleDelAll} type="submit">Delete All</button> : ""}
        
      </form>
    </div>
  );
}

export default Form;
