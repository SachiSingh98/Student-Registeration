import { Container, FormControl, Grid, TextField, Typography , Box, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button } from '@mui/material'
import React, { useState } from 'react'
import { Year } from './YearFieldData'
import {useForm} from 'react-hook-form'
import GridTable from './GridTable'

export default function RegisterationForm() {

    const {register , formState:{errors} , handleSubmit , reset} = useForm()
    const [formData , setFormData] = useState([])

    const IntialFieldsValue = {
        branch:'',
        year:"",
        gender:'female',
        terms:false
    }
    
    const [inputValue , setInputValue] = useState(IntialFieldsValue)


    // Function for Text fields handle change
    const handleOnFieldsChange = (e)=>{
        setInputValue({...inputValue , [e.target.name]:e.target.value})
    }


    // Handle On Submit
    const handleOnSubmit = (data)=>{
        setFormData([...formData , {  id:Date.now() , ...data , ...inputValue}])
        reset()
        setInputValue(IntialFieldsValue)
    }


    // Handle On Clear
    const handleOnClearFields = () => {
        reset()
        setInputValue(IntialFieldsValue);
    };





  return (
    <>
    <Container maxWidth="md">

        {/* Form Heading */}
        <Box padding={2} textAlign={"center"} mt={1} >
        <Typography  fontSize={{xs:40 , sm:50}} fontWeight={700} color='primary' variant='h3' >Student Registeration</Typography>
        </Box>


        {/* Form */}
        <form onSubmit={handleSubmit(handleOnSubmit)} >
            <Grid container spacing={2} >

                {/* Roll Number Field */}
                <Grid sm={6} xs={12} item>
                    <FormControl fullWidth>
                        <TextField   type='number'  name='rollnumber' label="Roll Number"  helperText={Boolean(errors.rollnumber) ? <Typography>
                            Max length is 6
                        </Typography> : null}  error={Boolean(errors.rollnumber)} {...register("rollnumber" , {maxLength:6,required:true} )}/>
                    </FormControl>
                </Grid>

                {/*Name Field*/}
                <Grid  sm={6} xs={12} item>
                    <FormControl fullWidth>
                        <TextField helperText={Boolean(errors.name) ? <> <Typography>Required field *</Typography> </> : null} error={Boolean(errors.name)} type='text' name='name' label="Name" {...register("name" , {required:true})} />
                    </FormControl>
                </Grid>


                {/* Year Field */}
                <Grid  sm={6} xs={12} item >
                    <FormControl fullWidth >
                        <InputLabel>Year</InputLabel>
                        <Select label='Year' value={inputValue.year} name='year' onChange={handleOnFieldsChange} >
                            {Year && Year.map((data,index)=>{
                                return <MenuItem key={index} value={data} >{data}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Grid>



                {/* Branch Field */}
                <Grid sm={6} xs={12} item>
                    <FormControl fullWidth >
                        <InputLabel>Branch</InputLabel>
                        <Select label='Branch' value={inputValue.branch} name='branch' onChange={handleOnFieldsChange} >
                            <MenuItem value="Arts" >Arts</MenuItem>
                            <MenuItem value="Commerce" >Commerce</MenuItem>
                            <MenuItem value="Science" >Science</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                {/* Contact Field */}
                <Grid sm={6} xs={12} item >
                    <FormControl fullWidth >
                        <TextField onChange={handleOnFieldsChange} error={Boolean(errors.contact)} helperText={Boolean(errors.contact) ? <Typography>Minimum length 10</Typography> : null} label="Contact" value={inputValue.contact} type='number' name='contact' {...register("contact" , {minLength:10 , required:true})}  />
                    </FormControl>
                </Grid>


                {/* Gender Field */}
                <Grid sm={6} xs={12} item>
                    <FormControl  fullWidth >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup sx={{display:"flex" , flexDirection:"row"}} name='gender'   onChange={handleOnFieldsChange} value={inputValue.gender} >
                        <FormControlLabel control={<Radio />} value='female' label="Female" />
                        <FormControlLabel control={<Radio/>} value='male' label="Male" />
                        <FormControlLabel control={<Radio/>} value='other' label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>


                {/* Term and Condition */}
                <Grid  xs={12} item >
                    <FormControlLabel  control={<Checkbox checked={inputValue.terms} required onChange={(e)=>{setInputValue({...inputValue , terms:e.target.checked})}} />}  label="Agree To Terms and Condition" />
                </Grid>

            </Grid>
            
                {/* Buttons for Cancel and submit */}
                <Grid textAlign='center' container  spacing={2} mt={2} >
                    <Grid xs={12}  sm={6} item>
                        <Button fullWidth variant='outlined'   onClick={handleOnClearFields} >Clear</Button>
                    </Grid>

                    <Grid xs={12} sm={6} item>
                        <Button fullWidth variant='contained'  disabled={Boolean(errors.rollnumber || errors.name || errors.contact )} type='submit' >Submit</Button>
                    </Grid>
                </Grid>
        </form>
    </Container>



    {/* ------------------------------------------------------------------------------------------------------------ */}
    <GridTable formData={formData} />

    
    </>
  )
}