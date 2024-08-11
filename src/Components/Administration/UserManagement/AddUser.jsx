import React, { useState, useEffect } from 'react';
import './AddEditUser.css';

const AddEditUser = ({ onSave, initialData }) => {
    const [name, setName] = useState(initialData ? initialData.name : '');

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id: initialData ? initialData.id : null, name });
    };

    return (
        <form onSubmit={handleSubmit} className="add-edit-user">
            <h2>{initialData ? 'Edit User' : 'Add User'}</h2>
            <label>
                User Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default AddEditUser;
