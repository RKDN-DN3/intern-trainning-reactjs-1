import React, { useState, useEffect } from "react";
import './App.css';
import Menu from './Layout/Menu';
import { Routes, Route, Navigate } from "react-router-dom";
import MyTodo from './Layout/MyTodo';
import HomePage from './Layout/HomePage';
import MyList from './Layout/MyList';
import MyInfo from './Layout/MyInfo';
import MyLogin from './Layout/MyLogin';
import MyRegister from './Layout/MyRegister';
import MyForgotPsw from './Layout/MyForgotPsw';
import TabInfo from './Views/TabInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Views/Dashboard";
import HeaderNav from "./Views/HeaderNav";




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    console.log("Load")
  }, []);

  return (
    <>
      {isLoggedIn === false ? <div>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<MyLogin onLogin={handleLogin} />} />
          <Route path="register" element={<MyRegister />} />
          <Route path="forgot" element={<MyForgotPsw />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div> : <div>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="mytodo" element={<MyTodo />} />
          <Route path="profile" element={<MyInfo />} />
          <Route path="profile/:id/info" element={<TabInfo />} />
          <Route path="todoReudx" element={<MyList />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      }
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
