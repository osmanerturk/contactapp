import React from "react";
import { Link, useParams } from "react-router-dom";
import { contactSelector , upContact } from "../../redux/contactSlice";
import { useSelector ,useDispatch } from "react-redux";
import { useState } from "react";
function Edit() {

    const dispatch= useDispatch()
  const contacts = useSelector(contactSelector.selectAll);
  const {id} = useParams();
  console.log(id);
  console.log(contacts);
   const selected = contacts.find(contact=> contact.id === id)
  const [name, setName] = useState(`${selected.name}`);
  const [number, setNumber] = useState(`${selected.number}`)
 
    
  console.log(selected);

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (name === "" || number === "") {
      return false;
    }
    dispatch(upContact({
      id:id,
      changes:{
        name,number
      }
    }))
    
  }


  return (
    <>
      <h3 className="mr-20 mb-10 bg-transparent hover:bg-green-500 text-green-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><Link to="/">All Contacts</Link></h3>
        
      <form onSubmit={handleSubmit}>
          <ul>
              <li>
                  <input value={name} className="rounded-l" onChange={(e)=>setName(e.target.value)}></input>
              </li>

              <li>
                  <input value={number}  onChange={(e)=>setNumber(e.target.value)}  className="mt-3 rounded-l"></input>
                  
              </li>
              <button className="flex justify-end mt-4 bg-transparent hover:bg-blue-500 text-blue-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit</button>
          </ul>
      </form>
    </>
  );
}

export default Edit;
