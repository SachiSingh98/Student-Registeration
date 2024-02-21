import {
  Card,
  Box,
  Typography,
  CardContent,
  Container,
  IconButton,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from '@mui/icons-material/Create';

export default function DataCard({ formData , onDelete , onUpdate }) {
  return (
    <>
      <Container
        sx={{ marginTop: "10px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >

        <Box p={2} mt={4}>
          <Box p={1} textAlign={"center"}>
            <Typography
              variant="h3"
              color={"primary"}
              fontWeight={600}
              fontSize={{ xs: 40, md: 40 }}
            >
              Student Details
            </Typography>{" "}
          </Box>
          {formData && formData.length > 0 ? (
            formData.map((data) => {
              return (
                <Box mt={2} key={data.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">
                        <b>Name :</b> {data.name}
                      </Typography>
                      <Typography variant="h5">
                        <b>Roll Number :</b> {data.rollnumber}
                      </Typography>
                      <Typography variant="h5">
                        <b>Year :</b> {data.year}
                      </Typography>
                      <Typography variant="h5">
                        <b>Branch :</b> {data.branch}
                      </Typography>
                      <Typography variant="h5">
                        <b>Contact :</b> {data.contact}
                      </Typography>
                      <Typography variant="h5">
                        <b>Gender :</b> {data.gender}
                      </Typography>
                    </CardContent>

                    {/* Delete Button */}

                    <Box textAlign={"end"} >
                      <IconButton onClick={()=>{onDelete(data.id)}}>
                        <DeleteIcon sx={{fontSize:"40px" , margin:"0px 10px"}}   />
                      </IconButton>

                      <IconButton onClick={()=>{onUpdate(data.id)}} >
                        <CreateIcon sx={{fontSize:"40px" , margin:"0px 10px"}} />
                      </IconButton>
                    </Box>



                  </Card>
                </Box>
              );
            })
          ) : (
            <Box padding={2} textAlign={"center"}>
              <Typography fontWeight={700} variant="h5">
                No Data Available
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}
