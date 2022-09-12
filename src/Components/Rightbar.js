import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';
import Group_1 from 'Assets/Images/lockscreen-bg.jpg'
import Group_2 from 'Assets/Images/login-bg.jpg'
import Group_3 from 'Assets/Images/Muốn ít đi Để hạnh phúc nhiều hơn.png'
import Group_4 from 'Assets/Images/Nothing is impossible Nothing is forever (2).png'
import Group_5 from 'Assets/Images/register-bg.jpg'
const Rightbar = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(0.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.3)',
                opacity: 0,
            },
        },
    }));
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <ListItemButton sx={{ paddingBottom: "0px !important" }}>
                    <ListItemText primary="Người liên hệ" />
                </ListItemButton>
                <List sx={{ paddingBottom: "0px !important" }}>
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon >
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={Group_1} />
                                </StyledBadge>
                            </ListItemIcon>
                            <ListItemText primary={"Người dùng 1"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={Group_2} />
                                </StyledBadge>
                            </ListItemIcon>
                            <ListItemText primary={"Người dùng 2"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={Group_3} />
                                </StyledBadge>
                            </ListItemIcon>
                            <ListItemText primary={"Người dùng 3"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={Group_4} />
                                </StyledBadge>
                            </ListItemIcon>
                            <ListItemText primary={"Người dùng 4"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src={Group_5} />
                                </StyledBadge>
                            </ListItemIcon>
                            <ListItemText primary={"Người dùng 5"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;
