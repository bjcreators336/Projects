import { Mail, Notifications } from '@mui/icons-material';
import { AppBar, Box, styled, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import img from '../Resources/1.jpg' // Assuming this path is correct
import {React, useState} from 'react'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    margin: 4
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: "gray",
}))

// *** CORRECTED ICONS STYLING ***
// Hides ALL icons/badges on 'xs' (small mobile screens)
const Icons = styled(Box)(({ theme }) => ({
    display: 'flex', // Start with desktop/tablet settings
    gap: '15px',
    alignItems: 'center',
    // HIDE on screens smaller than 'sm'
    [theme.breakpoints.down("sm")]: { 
        display: "none"
    }
}));

// *** CORRECTED USERBOX STYLING ***
// Shows basic user info on ALL screens, but hides the username on 'xs'
const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex', 
    gap: '10px', 
    alignItems: 'center',
    // Hide the entire UserBox on screens smaller than 'sm' IF you want to hide the avatar too
    // If you only want to hide the Name, use sx on the Typography element below.
    // [theme.breakpoints.down("sm")]: { 
    //     display: "none"
    // }
}));
const Navbar = () => {
    const [Open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h4' sx={{
                    fontFamily: "serif",
                    // HIDE Logo on small screens
                    display: { xs: "none", sm: "block" }
                }} >
                    ICONEX<i className="fa-solid fa-code"></i>
                </Typography>
                <Typography variant='h4' sx={{display:{ xs: "block", sm: "none" }}} ><i className="fa-solid fa-code"></i></Typography>

                <Search>
                    <InputBase
                        placeholder='Search'
                        sx={{ flexGrow: 1 }}
                    />
                </Search>

                {/* ICONS (Hidden on smDown) */}
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail sx={{ color: "white" }} />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications sx={{ color: "white" }} />
                    </Badge>
                    
                    {/* AVATAR 1: This is the one that's shown on desktop */}
                    <Avatar src={img} onClick={() => setOpen(true)}x={{
                        width: 30, height: 30,
                    }} />
                </Icons>
                
                {/* USERBOX (Visible on mobile/tablet) */}
                <UserBox onClick={() => setOpen(true)} sx={{
                    // Show this on screens smaller than 'sm'
                    display: { xs: "flex", sm: "none" }
                }}>
                    <Avatar src={img} sx={{
                        width: 30, height: 30,
                    }} />
                    <Typography variant='span'>Faizan</Typography>
                </UserBox>
                
            </StyledToolbar>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={Open}
        onClose={() => setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar