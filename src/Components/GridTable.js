import { Box,  Container, Typography  } from '@mui/material'
import React from 'react'
import {DataGrid} from '@mui/x-data-grid'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export default function GridTable({formData , onDelete , onUpdate}) {

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
    width:150,
    headerName:"Name"
  },
  {
    field:"year",
    width:100,
    headerName:"Year"
  },
  {
    field:"branch",
    width:120,
    headerName:"Branch"
  },
  {
    field:"contact",
    width:150,
    headerName:"Contact"
  },
  {
    field:"gender",
    width:100,
    headerName:"Gender"
  },
  {
    field:"Delete",
    width:100,
    headerName:"Delete",
    renderCell : (params)=>{
      return <DeleteIcon key={params.id} onClick={()=>{onDelete(params.id)}} />
    }
  },
  {
    field:"Update",
    width:100,
    headerName:"Update",
    renderCell : (params)=>{
      return <CreateIcon key={params.id} onClick={()=>{onUpdate(params.id)}} />
    }
  }
  


]


  return (
    <Box height={"100vh"} >
    <Container>
     <Box   mt={5} sx={{height:350}} >
      <Box m={2} textAlign={"center"} ><Typography variant='h3' color={"primary"} fontWeight={600} >Students Detail</Typography> </Box>
      <DataGrid   columns={column} rows={formData} />
      </Box> 
    </Container>
    </Box>
  )
}
