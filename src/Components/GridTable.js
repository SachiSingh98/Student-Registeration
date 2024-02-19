import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import {DataGrid} from '@mui/x-data-grid'

export default function GridTable({formData}) {

const column  = [
  {
    field:"id",
    width:100,
    headerName:"ID"
  },
  {
    field:"rollnumber",
    width:150,
    headerName:"Roll Number"
  },
  {
    field:"name",
    width:180,
    headerName:"Name"
  },
  {
    field:"year",
    width:100,
    headerName:"Year"
  },
  {
    field:"branch",
    width:150,
    headerName:"Branch"
  },
  {
    field:"contact",
    width:200,
    headerName:"Contact"
  },
  {
    field:"gender",
    width:120,
    headerName:"Gender"
  }


]


  return (
    <>
    <Container>
     <Box mt={5} sx={{height:350}} >
      <Box m={2} textAlign={"center"} ><Typography variant='h3' color={"primary"} fontWeight={600} >Students Detail</Typography> </Box>
      <DataGrid  checkboxSelection columns={column} rows={formData} />
      </Box> 
    </Container>
    </>
  )
}
