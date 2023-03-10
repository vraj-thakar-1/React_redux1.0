import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";
import { authAction } from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authAction.logout());
  };
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
