import { Container, FormControl, Grid, TextField, Typography , Box, InputLabel, Select, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, Button} from '@mui/material'
import React, { useState } from 'react'
import { Year } from './FieldsData'

export default function RegisterationForm() {

    const [YearValue , setYearValue] = useState("")
    const [Branch , setBranch] = useState('')
    const [Gender , setGender] = useState('female')

    const IntialFieldsValue = {
        name:"",
        rollnumber:"",
        contact:"",
        branch:Branch,
        gender:Gender,
    }
    
    const [inputValue , setInputValue] = useState(IntialFieldsValue)


    // Function for Text fields handle change
    const handleOnFieldsChange = (e)=>{
        setInputValue({...inputValue , [e.target.name]:e.target.value})
    }


    // Handle On Submit
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(inputValue)
    }


    // Handle On Clear
    const handleOnClearFields = (e)=>{
        e.preventDefault()
        console.log("clearing the fields")
        setInputValue({
            name:"",
            rollnumber:"",
            contact:""
        })
    }



  return (
    <>
    <Container maxWidth="md">

        {/* Form Heading */}
        <Box padding={2} textAlign={"center"} mt={1} >
        <Typography  fontSize={{xs:40 , sm:50}} fontWeight={700} color='primary' variant='h3' >Student Registeration</Typography>
        </Box>


        {/* Form */}
        <form onSubmit={handleOnSubmit} >
            <Grid container spacing={2} >

                {/* Roll Number Field */}
                <Grid sm={6} xs={12} item>
                    <FormControl fullWidth>
                        <TextField onChange={handleOnFieldsChange}   type='number' name='rollnumber' label="Roll Number" />
                    </FormControl>
                </Grid>

                {/*Name Field*/}
                <Grid  sm={6} xs={12} item>
                    <FormControl fullWidth>
                        <TextField onChange={handleOnFieldsChange} value={inputValue.name} type='text' name='name' label="Name" />
                    </FormControl>
                </Grid>


                {/* Year Field */}
                <Grid  sm={6} xs={12} item >
                    <FormControl fullWidth >
                        <InputLabel>Year</InputLabel>
                        <Select label='Year' value={YearValue} onChange={(e)=>{setYearValue(e.target.value)}} >
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
                        <Select label='Branch' value={Branch} onChange={(e)=>{setBranch(e.target.value)}} >
                            <MenuItem value="Arts" >Arts</MenuItem>
                            <MenuItem value="Commerce" >Commerce</MenuItem>
                            <MenuItem value="Science" >Science</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>


                {/* Contact Field */}
                <Grid sm={6} xs={12} item >
                    <FormControl fullWidth >
                        <TextField onChange={handleOnFieldsChange} label="Contact" type='number' name='contact' />
                    </FormControl>
                </Grid>


                {/* Gender Field */}
                <Grid sm={6} xs={12} item>
                    <FormControl  fullWidth >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup sx={{display:"flex" , flexDirection:"row"}} value={Gender} onChange={(e)=>{setGender(e.target.value)}} defaultValue="Female" >
                        <FormControlLabel control={<Radio/>} value='female' label="Female" />
                        <FormControlLabel control={<Radio/>} value='male' label="Male" />
                        <FormControlLabel control={<Radio/>} value='other' label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>


                {/* Term and Condition */}
                <Grid  xs={12} item >
                    <FormControlLabel  control={<Checkbox/>}  label="Agree To Terms and Condition" />
                </Grid>

            </Grid>
            
                {/* Buttons for Cancel and submit */}
                <Grid textAlign='center' container  spacing={2} mt={2} >
                    <Grid xs={12}  sm={6} item>
                        <Button fullWidth variant='outlined'  onClick={handleOnClearFields} >Clear</Button>
                    </Grid>

                    <Grid xs={12} sm={6} item>
                        <Button fullWidth variant='contained' type='submit' >Submit</Button>
                    </Grid>
                </Grid>
        </form>
    </Container>
    </>
  )
}
