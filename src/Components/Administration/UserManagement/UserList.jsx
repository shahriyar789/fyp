import React from 'react';
import './UserList.css';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} className="user-item">
                        {user.name}
                        <div>
                            <button onClick={() => onEdit(user)}>Edit</button>
                            <button onClick={() => onDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
