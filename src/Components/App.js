
import './App.css';
import React from 'react'
// import UserTable from './UserTable';
// import AddUserForm from './AddUserForm';
// import EditUserForm from './EditUserForm';
import Menu from './Layout/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyTodo from './Layout/MyTodo';
import HomePage from './Layout/HomePage';
import MyList from './Layout/MyList';
import MyInfo from './Layout/MyInfo';
import MyLogin from './Layout/MyLogin';
import MyRegister from './Layout/MyRegister';
import MyForgotPsw from './Layout/MyForgotPsw';
import TabInfo from './Views/TabInfo';
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="mytodo" element={<MyTodo />} />
        <Route path="profile" element={<MyInfo />} />
        <Route path="profile/:id/info" element={<TabInfo />} />
        <Route path="todoReudx" element={<MyList />} />
        <Route path="login" element={<MyLogin />} />
        <Route path="register" element={<MyRegister />} />
        <Route path="forgot" element={<MyForgotPsw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
