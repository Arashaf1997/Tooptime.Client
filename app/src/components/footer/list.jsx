{/********************************** کامپوننت مربوط به لیست *************************/}
import { Box, List, ListItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const ListComponent = ({  to, children  }) => {
  return (
    <Box>
      <List sx={{color:"black"}}>
        {items.map(item => (
          <ListItem button component={Link} to={to} >{children}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListComponent;