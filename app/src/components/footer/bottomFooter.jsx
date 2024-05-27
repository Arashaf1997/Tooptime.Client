{/********************************** کامپوننت مربوط به نوار پایین سایت  *************************/}
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import CopyrightIcon from "@mui/icons-material/Copyright";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
const BottomFooter = () => {
  return (
    <>
      <Grid container sx={{display:"flex", padding: "5px", justifyContent:"center", background: "linear-gradient(90deg, rgba(0,191,6,1) 0%, rgba(37,108,27,1) 100%)"}}>
            <Typography paddingLeft={"10px"}>
              <CopyrightIcon />
            </Typography>
            <Typography>تمامی حقوق برای توپ تایم محفوظ است.</Typography>
      </Grid>
    </>
  );
};
export default BottomFooter;
