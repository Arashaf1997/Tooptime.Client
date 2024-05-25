import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const TopFooter = () => {
  return (
    <>
      <Grid container padding={"20px"} sx={{backgroundColor:"lightgrey"}}>
        <Grid xs={12} lg={8} display={"flex"}>
          <Typography color={"gray"} variant="h5" paddingLeft={"5px"}>
            ساعت پاسخگویی و پشتیبانی
          </Typography>
          <Typography variant="h5" color={"black"}>
            مرجع رزرو و اجاره اماکن ورزشی(توپ تایم)
          </Typography>
          <Typography color={"gray"} variant="h5">
            ، از 8 صبح تا 12:30 بامداد{" "}
          </Typography>
        </Grid>
        <Grid xs={12} lg={4} >
          <Box display={"flex"} justifyContent={"end"}>
            <Typography color={"gray"} variant="h5">234565</Typography>
            <Typography color={"red"} variant="h5">051</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default TopFooter;
