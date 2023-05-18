import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '@/pages/Home'
import BlogPage from '@/pages/BlogPage';
import ProfilePage from '@/pages/ProfilePage';
import Error404 from '@/pages/Error404';
import Menu from '@/components/Menu';
import './index.css';

const App = ():React.ReactElement => {
  return (
    <>
      <HashRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
