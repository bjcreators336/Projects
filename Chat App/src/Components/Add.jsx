import {
  Avatar,
  Box,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { React, useState } from "react";
import img from "../Resources/1.jpg"; // Assuming this path is correct

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Start New Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: "calc(50% - 75px)", md: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={4} bgcolor={"background.default"} color={"text.primary"}borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src={img}
              sx={{
                width: 30,
                height: 30,
              }}
            />
            <Typography fontWeight={500} variant="span">
              Faizan Asif
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <Button fullWidth variant="contained" endIcon={<DateRange />}>
            Post
          </Button>
            
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
