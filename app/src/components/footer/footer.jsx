import { Grid } from "@mui/material";
import Details from "./details";
import BottomFooter from "./bottomFooter";

const Footer = () => {
  return (
    <>
      <Grid xs={12}>
        <Details />
        <BottomFooter/>
      </Grid>
    </>
  );
};
export default Footer;
