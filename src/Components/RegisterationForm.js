import {
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
  useTheme,
  useMediaQuery,
  Switch,
  Alert,
  FormHelperText,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Year } from "./YearFieldData";
import { useForm } from "react-hook-form";
import GridTable from "./GridTable";
import DataCard from "./DataCard";
import { DarkThemeContext } from "../Context/DarkThemeProvider";

const formState = {
  rollnumber: "",
  name: "",
  contact: "",
  branch: "",
  year: "",
  gender: "female",
  terms: false,
};

export default function RegisterationForm() {
  const [initialState, setInitialState] = useState(formState);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    trigger,
    setValue,
  } = useForm({
    values: initialState,
  });
  const [formData, setFormData] = useState([]);
  const [formSubmitAlert, setFormSubmitAlert] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [action, setAction] = useState("add");

  const { DarkMode, setDarkMode } = useContext(DarkThemeContext);

  // Handle On Submit
  const handleOnSubmit = (data) => {
    const id = data.id;
    console.log(id)
    if (id) {
      setFormData((prev)=>{
        const filterData = prev.filter((data)=> data.id !== id)
        return [...filterData , {...data}]
      })
    } else {
      setFormData([...formData, { id: Date.now(), ...data }]);
    }

    setInitialState(formState);
    reset();
    setFormSubmitAlert(true);

    setAction("add");

    setTimeout(() => {
      setFormSubmitAlert(false);
    }, 2000);
  };

  // Handle On Clear
  const handleOnClearFields = () => {
    reset();
  };

  // Handle OnChange
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValue(name, value);
    register(name);
    trigger(name);
  };

  // Handle on delete
  const onDelete = (id) => {
    const filterData = formData.filter((data) => {
      return data.id !== id;
    });
    setFormData(filterData);
  };

  // Handle on Update
  const onUpdate = (id) => {
    const updatedData = formData.filter((data) => data.id === id);
    // console.log(updatedData)
    setInitialState(updatedData[0]);
    console.log(updatedData[0]);
    setAction("update");
  };

  return (
    <>
      <Container
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "4px",
        }}
        maxWidth="md"
      >
        <Box pb={4} height={!isMediumScreen ? "100vh" : null}>
          <Box p={1} mt={2} display={"flex"} justifyContent={"end"}>
            <Switch
              onChange={(e) => {
                setDarkMode(e.target.checked);
              }}
            />
            <Typography p={1}>
              {DarkMode ? "Light Mode" : "Dark Mode"}
            </Typography>
          </Box>

          {/* ---------------------------------------------Form Heading */}
          <Box textAlign={"start"} mt={1}>
            <Typography
              fontSize={{ xs: 30, sm: 40, md: 45, lg: 55 }}
              fontWeight={700}
              color="primary"
              variant="h1"
            >
              Student Registeration
            </Typography>
          </Box>

          {/* Form */}
          <Box mt={3}>
            <form
              style={{ marginTop: "10px" }}
              noValidate
              onSubmit={handleSubmit(handleOnSubmit)}
            >
              <Grid container spacing={2}>
                {/* ----------------------------------------Roll Number Field */}
                <Grid sm={6} xs={12} item>
                  <FormControl fullWidth>
                    <TextField
                      type="number"
                      name="rollnumber"
                      label="Roll Number"
                      required
                      helperText={
                        Boolean(errors.rollnumber) ? (
                          <>
                            {errors.rollnumber.type === "required" &&
                              "Required Field"}
                            {errors.rollnumber.type === "minLength" &&
                              "Please enter a 6-digit roll number"}
                            {errors.rollnumber.type === "maxLength" &&
                              "Please enter a 6-digit roll number"}
                          </>
                        ) : null
                      }
                      error={Boolean(errors.rollnumber)}
                      {...register("rollnumber", {
                        maxLength: 6,
                        minLength: 6,
                        required: true,
                      })}
                    />
                  </FormControl>
                </Grid>

                {/*------------------------------------------------Name Field*/}
                <Grid sm={6} xs={12} item>
                  <FormControl fullWidth>
                    <TextField
                      name="name"
                      type="text"
                      label="Name"
                      required
                      InputLabelProps={{ shrink: Boolean(watch("name")) }}
                      helperText={
                        Boolean(errors.name) ? (
                          <>
                            {errors.name.type === "pattern" &&
                              "Invalid characters, only text allowed"}
                            {errors.name.type === "required" &&
                              "Required Field"}
                            {errors.name.type === "maxLength" &&
                              "Name should not exceed 10 characters"}
                          </>
                        ) : ''
                      }
                      error={Boolean(errors.name)}
                      {...register("name", {
                        required: "Required Field",
                        maxLength: 12,
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: "Invalid Format",
                        },
                      })}
                    />
                  </FormControl>
                </Grid>

                

                {/* -------------------------------------------Year Field */}

                <Grid sm={6} xs={12} item>
                  <FormControl error={Boolean(errors.year)} fullWidth>
                    <InputLabel>Year*</InputLabel>
                    <Select
                      label="Year*"
                      required
                      value={watch("year")}
                      name="year"
                      {...register("year", { required: true })}
                      onChange={handleOnChange}
                    >
                      {Year &&
                        Year.map((data, index) => {
                          return (
                            <MenuItem key={index} value={data}>
                              {data}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                  {errors.year ? (
                    <FormHelperText
                      style={{ color: "#DB2F2F", padding: "0px 13px" }}
                    >
                      Required Field
                    </FormHelperText>
                  ) : null}
                </Grid>

                {/*---------------------------------------------- Branch Field  */}
                <Grid sm={6} xs={12} item>
                  <FormControl error={Boolean(errors.branch)} fullWidth>
                    <InputLabel>Branch</InputLabel>
                    <Select
                      label="Branch"
                      value={watch("branch")}
                      required
                      name="branch"
                      {...register("branch", { required: true })}
                      onChange={handleOnChange}
                    >
                      <MenuItem value="Arts">Arts</MenuItem>
                      <MenuItem value="Commerce">Commerce</MenuItem>
                      <MenuItem value="Science">Science</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.branch ? (
                    <FormHelperText
                      style={{ color: "#DB2F2F", padding: "0px 13px" }}
                    >
                      Please Select Your Branch
                    </FormHelperText>
                  ) : null}
                </Grid>

                {/* --------------------------------------------------Contact Field */}
                <Grid sm={6} xs={12} item>
                  <FormControl fullWidth>
                    <TextField
                      error={Boolean(errors.contact)}
                      required
                      helperText={
                        Boolean(errors.contact) ? (
                          <>
                            {errors.contact.type === "pattern" &&
                              "Invalid Number"}
                            {errors.contact.type === "required" &&
                              "Required Field"}
                            {errors.contact.type === "minLength" &&
                              "Please enter a 10-digit number"}
                            {errors.contact.type === "maxLength" &&
                              "Please enter a 10-digit number"}
                          </>
                        ) : null
                      }
                      label="Contact"
                      type="number"
                      name="contact"
                      {...register("contact", {
                        minLength: 10,
                        maxLength: 10,
                        required: true,
                        pattern: {
                          value: /^[789]\d{9}$/,
                          message: "Invalid Number",
                        },
                      })}
                    />
                  </FormControl>
                </Grid>

                {/* -----------------------------------------------Gender Field */}
                <Grid sm={6} xs={12} item>
                  <FormControl fullWidth>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      sx={{ display: "flex", flexDirection: "row" }}
                      name="gender"
                      onChange={handleOnChange}
                      required
                      value={watch("gender")}
                    >
                      <FormControlLabel
                        control={<Radio />}
                        value="female"
                        label="Female"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        value="male"
                        label="Male"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        value="other"
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* ---------------------------------------------Term and Condition */}
                <Grid xs={12} item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={watch("terms")}
                        required
                        onChange={(e) => setValue("terms", e.target.checked)}
                        {...register("terms", { required: true })}
                      />
                    }
                    label="Terms and Condition"
                  />

                  {errors.terms ? (
                    <FormHelperText style={{ color: "#DB2F2F" }}>
                      Please agree to the terms and conditions
                    </FormHelperText>
                  ) : null}
                </Grid>
              </Grid>

              {/* Buttons for Cancel and submit */}
              <Grid textAlign="center" container spacing={2} mt={2}>
                <Grid xs={12} sm={6} item>
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleOnClearFields}
                  >
                    Clear
                  </Button>
                </Grid>

                {/* TODO This is pending  */}

                <Grid xs={12} sm={6} item>
                  <Button
                    fullWidth
                    variant="contained"
                    disabled={Boolean(Object.keys(errors).length !== 0)}
                    type="submit"
                  >
                    {action === "add" ? "Submit" : "Update"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>

          {/* Form Submit Alert */}
          {formSubmitAlert ? (
            <Box mt={2}>
              <Alert severity="success">Form Submit Succefully</Alert>
            </Box>
          ) : null}
        </Box>
      </Container>

      {/* ------------------------------------------------------------------------------------------------------------ */}

      {isMediumScreen ? (
        <DataCard onDelete={onDelete} formData={formData} onUpdate={onUpdate} />
      ) : (
        <GridTable
          onDelete={onDelete}
          formData={formData}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
}
