import { useEffect, useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import FC_Register from "./FuncComps/FC_Register";
import FC_LogIn from "./FuncComps/FC_LogIn";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(loadUsers());
  }, []);

  const loadUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <FC_Register users={users} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FC_LogIn />
        </Grid>
      </Grid>
    </>
  );
  //ljdnfkdjfbew
}

export default App;
