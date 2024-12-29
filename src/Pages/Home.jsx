import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import regeneratorRuntime from "regenerator-runtime";

const getData =  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res;
}

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchUsers();
    },[])

    const fetchUsers = () => {
        getData()
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLoading(false);
            setData(data);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        }) 
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {
                    data.map((user) => <li key={user.id}><Link to={'/users/'+user.id}>{user.name}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Home;