import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="container">
      <div className="nav-link">
        <NavLink to="/">
          <p>回到首頁</p>
        </NavLink>
        <NavLink to="/register">
          <p>註冊頁面</p>
        </NavLink>
        <NavLink to="/login">
          <p>登入頁面</p>
        </NavLink>
        <NavLink to="/todo">
          <p>Todo 頁面</p>
        </NavLink>
      </div>
      {/* Routes, Route 練習區 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {/* 練習區 */}
    </div>
  );
}

export default App;
