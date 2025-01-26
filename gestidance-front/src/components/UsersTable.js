import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/users';

const UsersTable = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Correo</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.correo}</td>
                            <td>{user.contraseña}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
