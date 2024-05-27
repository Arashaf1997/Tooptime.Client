{/********************************** کامپوننت مربوط به لیست *************************/}
import React from "react";
import { List, ListItem } from "@mui/material";

const MyList = ({ data }) => {
  return (
    <List sx={{color:"black"}}>
      {data.map((item) => (
        <ListItem button key={item.id} to={item.link}>
          {item.title}
        </ListItem>
      ))}
    </List>
  );
};

export default MyList;
