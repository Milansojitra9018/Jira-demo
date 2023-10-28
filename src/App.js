import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./App.css";
import Todo from "./pages/todo";
import CreateTask from "./pages/createTask";


export default function App() {
  const token = localStorage.getItem("Token")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" Component={Todo} />
        <Route path="/" Component={Register} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/login" Component={Login} />
        <Route path="/ticket" Component={CreateTask}/>
      </Routes>
    </BrowserRouter>
  );
}
