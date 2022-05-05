import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebase';

const ManageInventories = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Manage Inventories Products</h2>
      <h2>{user?.displayName}</h2>
    </div>
  );
};

export default ManageInventories;