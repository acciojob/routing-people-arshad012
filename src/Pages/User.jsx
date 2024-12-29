import React, {useEffect, useState} from 'react';
import regeneratorRuntime from "regenerator-runtime";
import { useParams } from 'react-router-dom';

const getData =  async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res;
}

const User = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const {userId} = useParams();

    useEffect(() => {
        setLoading(true);
        fetchUsers(userId);
    },[])

    const fetchUsers = (userId) => {
        getData(userId)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setLoading(false);
            setUser(data);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        }) 
    }

    return loading ? <div>Loading...</div> : (
        <div>
            <h1>User Details</h1>
            <p><span className='bold'>Name: </span>{user.name}</p>
            <p><span className='bold'>Username: </span>{user.username}</p>
            <p><span className='bold'>Email: </span>{user.email}</p>
            <p><span className='bold'>Phone: </span>{user.phone}</p>
            <p><span className='bold'>Website: </span>{user.website}</p>
        </div>
    )
}

export default User;