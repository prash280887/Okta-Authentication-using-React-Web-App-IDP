import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;

  const login = async () => history.push("/login");

  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );

  const mainContent = authState.isAuthenticated
    ? (window.location.href = `/protected`)
    : (window.location.href = "/login");

  return (
    <div>
      <div>{button}</div>
      {mainContent}
    </div>
    // <div>
    //   <table>
    //     <tr>
    //       <td>
    //         <Link to="/">Home</Link>
    //       </td>
    //       <td>
    //         <Link to="/protected">Protected</Link>
    //       </td>
    //     </tr>
    //     <tr>
    //       <br></br>
    //       <td></td>
    //     </tr>
    //     <tr>
    //       <td>{button}</td>
    //     </tr>
    //   </table>
    // </div>
  );
};
export default Home;
