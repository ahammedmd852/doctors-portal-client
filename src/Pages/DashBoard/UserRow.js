import React from "react";
import { toast } from "react-toastify";

const UserRow = ({user, role, refetch}) => {
  const {email} = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      toast.error('Failed to make an admin');
      res.json()})
    .then(data => {
     if(data.modifiedCount > 0) {
      refetch();
      toast.success(`Successfully makeAdmin`);
     }
    })
  }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button className="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UserRow;
