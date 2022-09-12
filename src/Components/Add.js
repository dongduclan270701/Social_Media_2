import React, { useState } from 'react';
import { Tooltip, Fab, Modal, Box, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button, Snackbar, Alert } from "@mui/material";
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from "@mui/icons-material";
import AvatarUser from "Assets/Images/257456092_1902492796605190_3704698042727908370_n.jpg"
const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = (props) => {
    const { getPost } = props
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState()
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const Post = () => {
        var today = new Date();
        var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        getPost(
            {
                id: Math.floor(Math.random() * 100000000000) + 1,
                title: "User" + "?",
                time: date + " " + time,
                userId: Math.floor(Math.random() * 100000000000) + 1,
                image: [],
                content: content,
                like: 0,
                share: 0,
            }
        )
        setContent()
        setOpen(false)
        setOpenSnackBar(true)
    }
    const handleCloseSnack = () => {
        setOpenSnackBar(false)
    }
    return (
        <>
            <Tooltip onClick={handleOpen} title="Add new port" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography color="gray" textAlign="center" variant="h6">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} src={AvatarUser} />
                        <Typography fontWeight={500} variant="span">
                            Kass
                        </Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        sx={{ width: "100%" }}
                        multiline
                        rows={3}
                        placeholder="Kass, Bạn đang nghĩ gì vậy?"
                        variant="standard"
                        onChange={e => setContent(e.target.value)}
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3} >
                        <EmojiEmotions color='primary' />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant='contained' aria-aria-label='outline primary button group'>
                        <Button onClick={Post}>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
                
            </StyledModal>
            <Snackbar
                    open={openSnackBar}
                    autoHideDuration={1500}
                    onClose={handleCloseSnack}
                >
                    <Alert severity='success'>
                        Đăng tin thành công
                    </Alert>
                </Snackbar>
        </>
    );
}

export default Add;
