import * as React from 'react';
import Box from '@mui/material/Box';
import { CardProps } from './Card.type';

const Card: React.FC<CardProps> = (props) => {
  const { content } = props;
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 1,
        boxShadow: 1,
        p: 2,
        minWidth: 300,
        ':hover': {
          background: 'lightseagreen'
        },
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500
        }
      }}
    >
      {content}
    </Box>
  );
};

export default Card;
