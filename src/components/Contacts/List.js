import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { contactSelector, delContact } from "../../redux/contactSlice";
function List() {
  const contacts = useSelector(contactSelector.selectAll);

  const dispatch = useDispatch();

  const handleDel = (id) => {
    dispatch(delContact(id));
  };

  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/edit/${id}`;
    navigate(path);
  };

  return (
    <div className="bg-gray-600 mt-3 p-2">
      <div></div>
      {contacts.map((contact) => (
        <div className="flex justify-between p-1">
          <span>
            {contact.name} {contact.number}
          </span>
          <div>
            <span onClick={() => routeChange(contact.id)} className="mr-3 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-0,25 px-3 border border-green-200 hover:border-transparent rounded">
            <Link to="/edit">Edit</Link>
          </span>
          <span
            className="cursor-pointer bg-transparent hover:bg-red-500 text-red-200 font-semibold hover:text-white py-0,25 px-3 border border-red-500 hover:border-transparent rounded"
            onClick={() => handleDel(contact.id)}
          >
            Del
          </span>
          </div>
          
          
        </div>
      ))}
    </div>
  );
}

export default List;
