import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '@/pages/Home';
import BlogPage from '@/pages/BlogPage';
import ProfilePage from '@/pages/ProfilePage';
import Error404 from '@/pages/Error404';
import Menu from '@/components/Menu';
import Post from "@/pages/Post";
import LoginPage from "@/pages/LoginPage";
import { AuthProvider, ProtectedRoute } from '@/context/auth';
import { PostProvider } from '@/context/post';
import './index.css';

const App = ():React.ReactElement => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <PostProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":post" element={<Post />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/profile/:name"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
          </PostProvider>
        </AuthProvider>
      </HashRouter>
    </>
  );
};

export default App;

//Outlet hook work with one route envolve another route
// and need modification the path it for nested routes