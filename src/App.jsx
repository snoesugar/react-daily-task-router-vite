import './App.css';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from './pages/Users';

const PostId = () => {
  const { userId } = useParams();
  return <p>Post ID: {userId}</p>;
};

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
        <NavLink to="/user">
          <p>使用者</p>
        </NavLink>
      </div>
      {/* Routes, Route 練習區 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />

        {/* Users 路由 */}
        <Route path="/user" element={<Users />}>
          {/* 子路由 */}
          <Route path=":userId" element={<PostId />} />
        </Route>

        {/* 不存在頁面 */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>不存在的頁面</p>
            </main>
          }
        />
      </Routes>
      {/* 練習區 */}
    </div>
  );
}

export default App;
