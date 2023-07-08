import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true} to="/">
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">Giới thiệu</NavLink>
        </li>
        <li>
          <NavLink to="/login">Đăng nhập</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Đăng ký</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
