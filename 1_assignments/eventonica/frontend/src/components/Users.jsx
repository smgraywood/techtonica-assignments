import React, { useEffect, useState } from 'react';
import DeleteUser from './DeleteUser';

const pastor = {name: "Al Pastor", email: "alpastor1991@gmail.com", id: "1"};
const pollo = {name: "El Pollito", email: "elpolloloco1982@gmail.com", id: "2"};
const asada = {name: "Asada Grande", email: "asada2021@gmail.com", id: "3"};

const Users = () => {
    const [apiResponse, setApiResponse] = useState("");

    console.log("apiResponse", apiResponse)
    
    const getUsers = () => {
      fetch("http://localhost:3000/users")
        .then(res => res.text())
        .then(res => setApiResponse(res))
    };
    
    useEffect(() => {
      getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    },[]);

const [users, setUsers] = React.useState([pastor, pollo, asada])
const [name, setName] = React.useState('')
const [email, setEmail] = React.useState('')
const[id, setId] = React.useState('')

const onSubmit = e => {
    e.preventDefault();
    const newUser = {id, name, email};
    setUsers([...users, newUser]);
  };

  const deleteUser = (deleteId) => {
    const newUsers = users.filter(i=>i.id !== deleteId)
    setUsers(newUsers)
  };    

    return(
        <section className="user-management">
            
            <h2>User Management</h2>
            <ul id="users-list">
            {apiResponse}
            {users.map((user, i) => <li key={i}>{user.name}, {user.email}</li>)}
            </ul>
        <div>
        <h3>Add User</h3>
        <form id="add-user" action="#">
            <fieldset>
            <label>Name</label>
            <input
                type="text"
                id="add-user-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </fieldset>
            
            <fieldset>
            <label>Email</label>
            <input
                type="text"
                id="add-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset>
            <label>ID</label>
            <input
                type="text"
                id="add-user-name"
                value={id}
                onChange={(e) => setId(e.target.value)}
                />
            </fieldset>
            <input type="submit" value="Add" onClick = {onSubmit} />
        </form>
        < DeleteUser deleteUserCallback = {deleteUser} />
        </div>
        </section>
            );
        };

export default Users;