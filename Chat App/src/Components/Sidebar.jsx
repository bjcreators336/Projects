import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import {Home,Layers, Group,Storefront,Person,Settings,AccountBox,DarkMode  } from '@mui/icons-material';
import React from 'react'


const Sidebar = ({mode, setMode}) => {
  return (
    <>
    <Box  sx={{ flex:1.5, p:2,display:{xs:"none", sm:"block"}}} >
     <Box sx={{
      position:"fixed"
     }}>
    
    <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Layers/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Market Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#'>
              <ListItemIcon>
               <DarkMode/>
              </ListItemIcon>
              <Switch onClick={(e) => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
          </List></Box></Box>
          </>
    
  )
}

export default Sidebar
