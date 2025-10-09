import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import img1 from '../Resources/3.jpg';
import img2 from '../Resources/4.jpg';
import img5 from '../Resources/6.jpg';
import img6 from '../Resources/7.jpg';
import img7 from '../Resources/8.jpg';
import img8 from '../Resources/9.jpg';
import img9 from '../Resources/10.jpg';
import img10 from '../Resources/11.jpg';
import img11 from '../Resources/12.jpg';
import img12 from '../Resources/13.jpg';
import img13 from '../Resources/14.jpg';


const Rightbar = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
  ];
  return (
    <Box sx={{flex:2, p:2,display:{xs:"none", sm:"block"}, flexDirection:"column"}} >
       <Box sx={{
            position:"fixed"
           }}>
            <Typography fontWeight={200} variant="h6">Online Friends</Typography>
            <AvatarGroup max={7} marginTop={5}>
                <Avatar alt="Remy Sharp" src={img1} />
                <Avatar alt="Travis Howard" src={img2} />
                <Avatar alt="Cindy Baker" src={img5} />
                <Avatar alt="Agnes Walker" src={img6} />
                <Avatar alt="Trevor Henderson" src={img7} />
                <Avatar alt="Trevor Henderson" src={img8} />
                <Avatar alt="Trevor Henderson" src={img9} />
                <Avatar alt="Trevor Henderson" src={img10} />
                <Avatar alt="Trevor Henderson" src={img11} />
                <Avatar alt="Trevor Henderson" src={img12} />
                <Avatar alt="Trevor Henderson" src={img13} />
            </AvatarGroup>
            <Typography fontWeight={200} marginTop={3} marginBottom={3} variant="h6">Latest Photos</Typography>
            <ImageList cols={3} rowHeight={100} gap={5}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="fast"
                  />
                </ImageListItem>
              ))}
            </ImageList>
              <Typography fontWeight={200} marginTop={3} marginBottom={3} variant="h6">Latest Conversations</Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
           </Box>
    </Box>
  )
}

export default Rightbar