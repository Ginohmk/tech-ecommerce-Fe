'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const UserDashboard = () => {
  const { id } = useParams();

  return <div>UserDashboard {id}</div>;
};

export default UserDashboard;
