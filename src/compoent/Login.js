import React from "react";

const Login = () => {
  return (
    <>
      <div className="container">
        <h3 className="login">Đăng nhập</h3>
        <form>
          <label htmlFor="username">Họ và tên</label>
          <input type="text" id="username" required />
          <label htmlFor="password">Mật khẩu</label>
          <input type="password" id="password" required />
          <input type="submit" value="Đăng nhập" />
        </form>
      </div>
    </>
  );
};

export default Login;