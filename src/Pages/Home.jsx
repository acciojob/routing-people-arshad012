import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import regeneratorRuntime from "regenerator-runtime";

const getData =  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res;
}

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchUsers();
    },[])

    const fetchUsers = () => {
        getData()
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch(error => {
            console.log(error);
        }) 
    }

    return (
        <>
            <div id='loading'>Loading...</div>
            <h1>User List</h1>
            <ul>
                {
                    data.map((user) => <li key={user.id}><Link to={'/users/'+user.id}>{user.name}</Link></li>)
                }
            </ul>
        </>
    )
}

export default Home;