import { Card, Container , Box , Typography, CardContent} from '@mui/material'
import React from 'react'

export default function DataCard({formData}) {
  return (
    <>
    <Container >
    <Box m={2} textAlign={"center"} ><Typography variant='h3' color={"primary"} fontWeight={600} fontSize={{xs:40 , md:40}} >Students Details</Typography> </Box>
    {formData && formData.length > 0 ? 
            formData.map((data)=>{
                return <Box mt={2} key={data.id}>
                        <Card>
                    <CardContent >
                    <Typography variant='h5'  > <b>Name :</b>  {data.name}</Typography>
                    <Typography variant='h5'  > <b>Roll Number :</b>  {data.rollnumber}</Typography>
                    <Typography variant='h5'  > <b>Year :</b>  {data.year}</Typography>
                    <Typography variant='h5'  > <b>Branch :</b>  {data.branch}</Typography>
                    <Typography variant='h5'  > <b>Contact :</b>  {data.contact}</Typography>
                    <Typography variant='h5'  > <b>Gender :</b>  {data.gender}</Typography>
                    </CardContent>
                    </Card>
                </Box>
            })
            : <Box padding={2} textAlign={"center"} >  
              <Typography fontWeight={700} variant='h5' >No Data Available</Typography>
              </Box>}            
    </Container>
    </>
  )
}
