import React from "react";
import { Toolbar, Typography, Button, AppBar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/expenses-tracker">
              Expenses Tracker
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/todo-app">
              To-Do App
            </NavLink>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
