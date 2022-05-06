import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import PageTitle from '../PageTitle/PageTitle';

const ManageInventories = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <PageTitle title="Manage Inventories"></PageTitle>
      <h2>Manage Inventories Products</h2>
      <h2>{user?.displayName}</h2>
    </>
  );
};

export default ManageInventories;