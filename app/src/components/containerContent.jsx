import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "./footer/footer";
function ContainerContent({ children }) {
  return (
    // <Grid sx={{display:"flex" , flexDirection:"column"}}>
    <Grid container direction="column">
      <Footer/>
    </Grid>
  );
}

export default ContainerContent;
