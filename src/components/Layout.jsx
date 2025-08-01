
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div>{children}</div>
      )}
      <Footer />
    </>
  );
};

export default Layout;
