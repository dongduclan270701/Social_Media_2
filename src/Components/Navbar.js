import React, { useState } from 'react';
import { Pets, Mail, Notifications, Logout, Settings, Help, Nightlight, QuestionAnswer } from "@mui/icons-material";
import {
    AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu,
    Divider, MenuItem, ListItemIcon, Switch, FormControlLabel
} from "@mui/material";
import AvatarUser from "Assets/Images/257456092_1902492796605190_3704698042727908370_n.jpg"
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))
const Navbar = ({setMode, mode}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position='sticky' >
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    Kass
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search >
                    <InputBase placeholder='Search...' />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={handleClick} sx={{ width: 30, height: 30 }} src={AvatarUser} />
                </Icons>
                <UserBox>
                    <Avatar onClick={handleClick} sx={{ width: 30, height: 30 }} src={AvatarUser} />
                    <Typography>
                        Kass
                    </Typography>
                </UserBox>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar onClick={handleClick} sx={{ width: 30, height: 30 }} src={AvatarUser} /> Đồng Đức Lân
                    </MenuItem>

                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Cài đặt & quyền riêng tư
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Help fontSize="small" />
                        </ListItemIcon>
                        Trợ giúp & hỗ trợ
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Nightlight fontSize="small" />
                        </ListItemIcon>
                        <FormControlLabel
                            value="end"
                            control={<Switch color="primary" onChange={e => setMode(mode === "light" ? "dark" : "light")} />}
                            label={mode === "light" ? "Màn hình ( Chế độ : Sáng)":"Màn hình ( Chế độ : Tối)"}
                            labelPlacement="end"
                        />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <QuestionAnswer fontSize="small" />
                        </ListItemIcon>
                        Đóng góp ý kiến
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Đăng xuất
                    </MenuItem>
                </Menu>
            </StyledToolbar>

        </AppBar>
    );
}

export default Navbar;
