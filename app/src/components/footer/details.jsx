import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import MyList from "./listItemLink";

const Details = () => {
  const myListData1 = [
    { id: 1, title: "درباره ما", link: "/page1" },
    { id: 2, title: "شرایط و قوانین", link: "/page2" },
    { id: 3, title: "منطقه تحت پوشش", link: "/page3" },
    { id: 4, title: "دایرکتوری", link: "/page4" },
  ];
  const myListData2 = [
    { id: 1, title: "ثبت مکان ورزشی", link: "/page1" },
    { id: 2, title: "سوالات متداول", link: "/page2" },
    { id: 3, title: "منطقه تحت پوشش", link: "/page3" },
    { id: 4, title: "دایرکتوری", link: "/page4" },
  ];
  return (
    <>
      <Grid
        xs={12}
        container
        sx={{
          color: "black",
          backgroundColor: "white",
          paddingTop: "50px",
          paddingLeft: "50px",
          paddingBottom: "50px",
        }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{ paddingRight: { xs: "30px", lg: "50px" }, paddingLeft: "50px" }}
        >
          <Box
            display={"flex"}
            justifyContent={"end"}
            sx={{
              borderTop: "solid 3px green",
              paddingLeft: "50px",
              paddingTop: "10px",
            }}
            flexDirection={"column"}
          >
            <Typography variant="h5" marginTop={"10px"}>
              توپ تایم چیست ؟
            </Typography>
            <Typography
              sx={{ marginTop: "20px", color: "grey", fontSize: "1rem" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
            </Typography>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={3}
          sx={{ paddingRight: { xs: "30px", lg: "0px" }, paddingLeft: "50px" }}
        >
          <Box sx={{ borderTop: "solid 3px red", paddingTop: "10px" }}>
            <Typography sx={{ color: "black", fontSize: "1.3rem" }}>
              پشتیبانی
            </Typography>
            <MyList data={myListData1} />
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={3}
          sx={{ paddingRight: { xs: "30px", lg: "0px" }, paddingLeft: "50px" }}
        >
          <Box sx={{ borderTop: "solid 3px orange", paddingTop: "10px" }}>
            <Typography sx={{ color: "black", fontSize: "1.3rem" }}>
              کاربران
            </Typography>
            <MyList data={myListData2} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Details;
