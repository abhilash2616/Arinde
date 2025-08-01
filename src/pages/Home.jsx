import React, { useState } from 'react';
import Loader from '../components/Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setData({ message: "Hello from API!" });
    setLoading(false);
  }, 2000);

  if (loading) return <Loader />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{data.message}</h1>
    </div>
  );
};

export default Home;
