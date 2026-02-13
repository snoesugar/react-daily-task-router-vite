import { Outlet, useNavigate } from "react-router-dom"

function Users () {
  const navigate = useNavigate();
  return <div>
    <h3>使用者詳細資料</h3>
    <button type='button' onClick={() => navigate("/user/123")}>
      前往 user ID: 123 詳細頁面
    </button>
    <Outlet />
  </div>
}
export default Users

