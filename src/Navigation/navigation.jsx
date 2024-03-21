import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import SignUp from '../components/SignUp';
import RegisterForm from '../components/RegisterForm';
import ProjectSidebar from '../components/ProjectSideBar';

function Navigation() {
  return (

    <BrowserRouter>
    <ProjectSidebar/>
      <Routes>
        {/* Define routes with elements or components */}
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<RegisterForm />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation

