import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import ImageIcon from "@mui/icons-material/Image";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import validateForm, { cities } from "../Utils/validateForm";

const FC_EditDetails = () => {
  const [editedUser, setEditedUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    houseNumber: "",
    image: null,
    birthDate: null,
  });

  useEffect(() => {
    // Retrieve user information from session storage
    const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (storedUser) {
      // Exclude the email field from being editable
      const { email, ...editableFields } = storedUser;
      setEditedUser(editableFields);
    }
  }, []);

  //   const updateUser = (updatedUser) => {
  //     if (validateForm(updatedUser)) {
  //       console.log("yes");
  //     } else {
  //       console.log("no");
  //     }
  //   };

  const handleUpdate = (event) => {
    event.preventDefault();
    // Call the editUser function with the updated user details
    //updateUser(editedUser);
    console.log(editedUser);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "grey.200",
          padding: 2,
          borderRadius: "3px",
          boxShadow: 4,
        }}
      >
        <h2 style={{ textAlign: "center" }}>Edit Details</h2>
        {/* {validationMessage && (
          <p style={{ color: "red" }}>{validationMessage}</p>
        )} */}
        <form onSubmit={handleUpdate}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                variant="standard"
                name="username"
                value={editedUser.username}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, username: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="standard"
                name="password"
                value={editedUser.password}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, password: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="standard"
                name="confirmPassword"
                value={editedUser.confirmPassword}
                onChange={(e) =>
                  setEditedUser({
                    ...editedUser,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="standard"
                name="firstName"
                value={editedUser.firstName}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="standard"
                name="lastName"
                value={editedUser.lastName}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cities}
                value={editedUser.city}
                onChange={(event, newValue) =>
                  setEditedUser({ ...editedUser, city: newValue })
                }
                renderInput={(params) => <TextField {...params} label="City" />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Street"
                variant="standard"
                name="street"
                value={editedUser.street}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, street: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                type="number"
                label="House Number"
                variant="standard"
                name="houseNumber"
                value={editedUser.houseNumber}
                onChange={(e) =>
                  setEditedUser({ ...editedUser, houseNumber: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Birth Date"
                  value={editedUser.birthDate}
                  name="birthDate"
                  onChange={(value) =>
                    setEditedUser({ ...editedUser, birthDate: value })
                  }
                  renderInput={(params) => (
                    <TextField {...params} fullWidth variant="standard" />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                sx={{ marginTop: 0 }}
                endIcon={<ImageIcon />}
              >
                Upload Image
                <input type="file" name="image" hidden />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SaveIcon />}
                sx={{ marginTop: 0 }}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default FC_EditDetails;
