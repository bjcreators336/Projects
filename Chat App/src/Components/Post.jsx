import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia,  Checkbox,  IconButton, Typography, } from '@mui/material'
import { Favorite,Share,MoreVert, FavoriteBorder } from '@mui/icons-material';
import img from '../Resources/2.jpg' // Assuming this path is correct
import img2 from '../Resources/1.jpg' // Assuming this path is correct


const Post = () => {
  return (
    <Box ><Card sx={{margin:2}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red[500]", objectFit: "contain" }} aria-label="recipe">
            <img src={img2} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
<Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:"red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
    </Card>
    </Box>
    
  )
}

export default Post
