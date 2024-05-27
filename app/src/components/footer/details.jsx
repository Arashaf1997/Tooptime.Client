import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import MyList from "./listItemLink";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Details = () => {
  const myListData = [
    { id: 1, title: "درباره ما", link: "/page1" },
    { id: 2, title: "تماس با ما", link: "/page2" },
    { id: 3, title: "ثبت مکان ورزشی", link: "/page3" },
    { id: 4, title: "فرایند خرید", link: "/page4" },
  ];

  return (
    <>
      <Grid
        xs={12}
        container
        sx={{
          color: "black",
          paddingTop: "50px",
          paddingLeft: "50px",
          paddingBottom: "50px",
          background:
            "linear-gradient(90deg, rgba(64,166,0,1) 0%, rgba(24,75,2,1) 100%)",
          display: { xs: "flex", justifyContent: "center" },
        }}
      >
        {/********************************** محل قرارگیری لوگوی سایت *************************/}

        <Grid xs={4} sm={2}>
          <img
            src="/images/Logo.png"
            alt="Logo not loading..."
            width={"100%"}
            height={"90%"}
          />
        </Grid>

        {/**********************************  ستون اول شامل توپ تایم و آدرس شرکت ************************/}

        <Grid
          xs={12}
          sm={5}
          sx={{ paddingRight: { xs: "30px", sm: "10px" }, paddingLeft: "50px" }}
        >
          <Box
            display={"flex"}
            justifyContent={"end"}
            sx={{
              paddingLeft: "50px",
              paddingTop: "10px",
            }}
            flexDirection={"column"}
          >
            <Typography color={"white"} variant="h4" marginTop={"10px"}>
              توپ تایم
            </Typography>
            <Typography
              sx={{ marginTop: "20px", color: "black" }}
            >
              آدرس : مشهد، بلوار صیاد شیرازی، صیاد شیرازی2/7، پلاک30، واحد 1
            </Typography>
            <Typography paddingTop={"10px"}>
              شماره تماس : 09308545585
            </Typography>
          </Box>
        </Grid>

        {/********************************** لیست شامل کامپوننت لیست *************************/}

        <Grid
          xs={12}
          sm={3}
          sx={{ paddingRight: { xs: "30px", lg: "0px" }, paddingLeft: "50px" }}
        >
          <Box sx={{ paddingTop: "10px" }}>
            <MyList data={myListData} />
          </Box>
        </Grid>

        {/********************************** محل قرارگیری ای نماد *************************/}
        <Grid xs={1} display={"flex"} alignItems={"end"}>
          <BookmarkIcon />
        </Grid>
      </Grid>
    </>
  );
};
export default Details;
