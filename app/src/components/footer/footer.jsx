import { Grid } from "@mui/material";
import Details from "./details";
import BottomFooter from "./bottomFooter";
import TopFooter from "./topFooter";

const Footer = () => {
  return (
    <>
      <Grid xs={12}>
        <TopFooter/>
        <Details />
        <BottomFooter/>
      </Grid>
    </>
  );
};
export default Footer;
