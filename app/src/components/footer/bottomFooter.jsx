import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import CopyrightIcon from "@mui/icons-material/Copyright";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
const BottomFooter = () => {
  return (
    <>
      <Grid container sx={{display:"flex", padding: "20px"}}>
        <Grid xs={8} sx={{ display: "flex", paddingLeft: "10px" }}>
            <Typography paddingLeft={"10px"}>
              <CopyrightIcon />
            </Typography>
            <Typography>تمامی حقوق برای توپ تایم محفوظ است.</Typography>
        </Grid>
        <Grid xs={4}>
            <Box display={"flex"} justifyContent={"end"}>
           <Typography>
            <FlutterDashIcon/>
            <FlutterDashIcon/>
           </Typography>
           </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default BottomFooter;
