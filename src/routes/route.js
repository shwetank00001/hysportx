import React from "react";
import { Navigate } from "react-router-dom";

const RoleMiddleware = (props, roleType) => {
  const token = localStorage.getItem("_token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token && user.role.role_type.toLowerCase() === roleType.toLowerCase()) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return (
    <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
  );
}

const Adminmiddleware = (props) => RoleMiddleware(props, 'admin');
const Communitymiddleware = (props) => RoleMiddleware(props, 'community');
const Participatormiddleware = (props) => RoleMiddleware(props, 'participator');
const Clientmiddleware = (props) => RoleMiddleware(props, 'client');

export { Adminmiddleware, Communitymiddleware, Participatormiddleware, Clientmiddleware };
