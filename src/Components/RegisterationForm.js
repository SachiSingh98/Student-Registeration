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

export default function RegisterationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      branch: "",
      year: "",
      gender: "female",
      terms: false,
    },
  });
  const [formData, setFormData] = useState([]);
  const [formSubmitAlert, setFormSubmitAlert] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  // const isMediumScreen = useMediaQuery((theme)=>{
  //     theme.breakpoints
  // })

  const { DarkMode, setDarkMode } = useContext(DarkThemeContext);

  // Handle On Submit
  const handleOnSubmit = (data) => {
    setFormData([...formData, { id: Date.now(), ...data }]);
    reset();
    setFormSubmitAlert(true);
    console.log(data);

    // Closing the success Alert
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
  };


  console.log(errors)

  return (
    <>
      <Container maxWidth="md">
        <Box mt={2} display={"flex"} justifyContent={"end"}>
          <Switch
            onChange={(e) => {
              setDarkMode(e.target.checked);
            }}
          />
          <Typography p={1}>{DarkMode ? "Light Mode" : "Dark Mode"}</Typography>
        </Box>

        {/* Form Heading */}
        <Box padding={2} textAlign={"center"} mt={1}>
          <Typography
            fontSize={{ xs: 40, sm: 50 }}
            fontWeight={700}
            color="primary"
            variant="h3"
          >
            Student Registeration
          </Typography>
        </Box>

        {/* Form */}
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Grid container spacing={2}>
            {/* Roll Number Field */}
            <Grid sm={6} xs={12} item>
              <FormControl fullWidth>
                <TextField
                  type="number"
                  name="rollnumber"
                  label="Roll Number"
                  helperText={Boolean(errors.rollnumber) ? "Max lenghth" : null}
                  error={Boolean(errors.rollnumber)}
                  {...register("rollnumber", { maxLength: 6, required: true })}
                />
              </FormControl>
            </Grid>

            {/*Name Field*/}
            <Grid sm={6} xs={12} item>
              <FormControl fullWidth>
                <TextField
                  helperText={
                    Boolean(errors.name) ? (
                      <>
                        {" "}
                        <Typography component={"span"}>
                          Required field *
                        </Typography>{" "}
                      </>
                    ) : null
                  }
                  error={Boolean(errors.name)}
                  type="text"
                  name="name"
                  label="Name"
                  {...register("name", { required: true })}
                />
              </FormControl>
            </Grid>

            {/* Year Field */}
            <Grid sm={6} xs={12} item>
              <FormControl fullWidth>
                <InputLabel>Year</InputLabel>
                <Select
                  label="Year"
                  value={watch("year")}
                  {...register("year", { required: true })}
                  name="year"
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
            </Grid>

            {/* Branch Field */}
            <Grid sm={6} xs={12} item>
              <FormControl fullWidth>
                <InputLabel>Branch</InputLabel>
                <Select
                  label="Branch"
                  value={watch("branch")}
                  name="branch"
                  onChange={handleOnChange}
                >
                  <MenuItem value="Arts">Arts</MenuItem>
                  <MenuItem value="Commerce">Commerce</MenuItem>
                  <MenuItem value="Science">Science</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Contact Field */}
            <Grid sm={6} xs={12} item>
              <FormControl fullWidth>
                <TextField
                  error={Boolean(errors.contact)}
                  helperText={
                    Boolean(errors.contact) ? (
                      <Typography component={"span"}>
                        Minimum length 10
                      </Typography>
                    ) : null
                  }
                  label="Contact"
                  type="number"
                  name="contact"
                  {...register("contact", { minLength: 10, required: true })}
                />
              </FormControl>
            </Grid>

            {/* Gender Field */}
            <Grid sm={6} xs={12} item>
              <FormControl fullWidth>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  sx={{ display: "flex", flexDirection: "row" }}
                  name="gender"
                  onChange={handleOnChange}
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

            {/* Term and Condition */}
            <Grid xs={12} item>
              <FormControlLabel
                control={
                    <Checkbox
                    // error={Boolean(errors.terms)}
                    checked={watch("terms")}
                    onChange={(e) => setValue("terms", e.target.checked)}
                    {...register("terms", { required: true})}
                  />
                //   <FormHelperText/>
                }
                label="Agree To Terms and Condition"
              />
              <FormHelperText style={{ color: errors.terms ? 'red' : 'inherit' }}>
                Agree to terms and Condition
      </FormHelperText>
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
                
                disabled={Boolean(
                  Object.keys(errors).length !==0
                )}
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Form Submit Alert */}
        {formSubmitAlert ? (
          <Box mt={2}>
            <Alert severity="success">Form Submit Succefully</Alert>
          </Box>
        ) : null}
      </Container>

      {/* ------------------------------------------------------------------------------------------------------------ */}
      {isMediumScreen ? (
        <DataCard formData={formData} />
      ) : (
        <GridTable formData={formData} />
      )}
    </>
  );
}
