import { useNavigate } from "react-router-dom";


const Logout = () => {
  const navigate = useNavigate();
  return (
    <button 
      type="button" 
      className='btn btn-primary' 
      onClick={() => { navigate('/login', { replace: true });  }}
    >登出</button>
  )
}

function Todo () {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  );
}

export default Todo
