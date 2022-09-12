import React, { useState } from 'react';
import {
    PeopleAlt, History, Event, SportsEsports, Groups, KeyboardArrowDown,
    KeyboardArrowUp, MedicalInformation, Newspaper, Storefront, Message,
    TurnedIn, Receipt
} from "@mui/icons-material";
import {
    Box, List, ListItem, ListItemIcon, ListItemButton, ListItemText,
    Avatar, Fab, Collapse, Divider
} from "@mui/material";
import avatarUser from 'Assets/Images/257456092_1902492796605190_3704698042727908370_n.jpg'
import Group_1 from 'Assets/Images/lockscreen-bg.jpg'
import Group_2 from 'Assets/Images/login-bg.jpg'
import Group_3 from 'Assets/Images/Muốn ít đi Để hạnh phúc nhiều hơn.png'
import Group_4 from 'Assets/Images/Nothing is impossible Nothing is forever (2).png'
import Group_5 from 'Assets/Images/register-bg.jpg'
const Sidebar = () => {
    const [showMoreBoardBarUp, setShowMoreBoardBarUp] = useState(false)
    const [showMoreBoardBarDown, setShowMoreBoardBarDown] = useState(false)
    const fabGreenStyle = {
        color: 'common.white',
        bgcolor: '#2f2fe9',
        '&:hover': {
            bgcolor: "#7d7dfb",
        },
    };
    const ShowUp = () => {
        setShowMoreBoardBarUp(!showMoreBoardBarUp)
    }
    const ShowDown = () => {
        setShowMoreBoardBarDown(!showMoreBoardBarDown)
    }
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>

            <Box position="fixed">
                <List sx={{ paddingBottom: "0px !important" }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <Avatar alt="Đồng Đức Lân" src={avatarUser} />
                            </ListItemIcon>
                            <ListItemText primary={"Đồng Đức Lân"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon >
                                <PeopleAlt sx={{ paddingLeft: "10px", width: "auto", color: "#8524ef" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Bạn Bè"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <History sx={{ paddingLeft: "10px", width: "auto", color: "#5553fd" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Kỷ niệm"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Groups sx={{ paddingLeft: "10px", width: "auto", color: "blue" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Nhóm"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Event sx={{ paddingLeft: "10px", width: "auto", color: "#c51a1a" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Sự kiện"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SportsEsports sx={{ paddingLeft: "10px", width: "auto", color: "blue" }} />
                            </ListItemIcon>
                            <ListItemText primary={"Chơi game"} />
                        </ListItemButton>
                    </ListItem>
                    {showMoreBoardBarUp === true ? "" : <ListItem disablePadding>
                        <ListItemButton onClick={ShowUp}>
                            <ListItemIcon sx={{ paddingLeft: "1%", paddingRight: "3%" }}>
                                <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                    <KeyboardArrowDown />
                                </Fab>
                            </ListItemIcon>
                            Xem thêm
                        </ListItemButton>
                    </ListItem>
                    }
                </List>
                <Collapse in={showMoreBoardBarUp}>
                    <List sx={{ paddingTop: "0px !important" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedIn sx={{ paddingLeft: "10px", width: "auto", color: "purple" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Đã lưu"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Receipt sx={{ paddingLeft: "10px", width: "auto", color: "#5dedcc" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Gần đây nhất"} />
                            </ListItemButton>
                        </ListItem><ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Message sx={{ paddingLeft: "10px", width: "auto", color: "#66ad5d" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Tin nhắn"} />
                            </ListItemButton>
                        </ListItem><ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Storefront sx={{ paddingLeft: "10px", width: "auto", color: "#30add3" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Marketplace"} />
                            </ListItemButton>
                        </ListItem><ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Newspaper sx={{ paddingLeft: "10px", width: "auto", color: "#9824ef" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Hoạt động quảng cáo gần đây"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MedicalInformation sx={{ paddingLeft: "10px", width: "auto", color: "#cb1759" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Sức khỏe cảm xúc"} />
                            </ListItemButton>
                        </ListItem>
                        {showMoreBoardBarUp === false ? "" : <ListItem disablePadding>
                            <ListItemButton onClick={ShowUp}>
                                <ListItemIcon sx={{ paddingLeft: "1%", paddingRight: "3%" }}>
                                    <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                        <KeyboardArrowUp />
                                    </Fab>
                                </ListItemIcon>
                                Ẩn bớt
                            </ListItemButton>
                        </ListItem>
                        }
                    </List>
                </Collapse>
                <Divider />
                <ListItemButton sx={{ paddingBottom: "0px !important" }}>
                    <ListItemText primary="Lối tắt của bạn" />
                </ListItemButton>
                <List sx={{ paddingBottom: "0px !important" }}>
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemIcon >
                                <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_1} />
                            </ListItemIcon>
                            <ListItemText primary={"Group 1"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_2} />
                            </ListItemIcon>
                            <ListItemText primary={"Group 2"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_3} />
                            </ListItemIcon>
                            <ListItemText primary={"Group 3"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_4} />
                            </ListItemIcon>
                            <ListItemText primary={"Group 4"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_5} />
                            </ListItemIcon>
                            <ListItemText primary={"Group 5"} />
                        </ListItemButton>
                    </ListItem>
                    {showMoreBoardBarDown === true ? "" : <ListItem disablePadding>
                        <ListItemButton onClick={ShowDown}>
                            <ListItemIcon sx={{ paddingLeft: "1%", paddingRight: "3%" }}>
                                <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                    <KeyboardArrowDown />
                                </Fab>
                            </ListItemIcon>
                            Xem thêm
                        </ListItemButton>
                    </ListItem>
                    }
                </List>
                <Collapse in={showMoreBoardBarDown}>
                    <List sx={{ paddingTop: "0px !important" }}>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_2} />
                                </ListItemIcon>
                                <ListItemText primary={"Group 6"} />
                            </ListItemButton>
                        </ListItem>
                        {showMoreBoardBarDown === false ? "" : <ListItem disablePadding>
                            <ListItemButton onClick={ShowDown}>
                                <ListItemIcon sx={{ paddingLeft: "1%", paddingRight: "3%" }}>
                                    <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                        <KeyboardArrowUp />
                                    </Fab>
                                </ListItemIcon>
                                Ẩn  bớt
                            </ListItemButton>
                        </ListItem>
                        }
                    </List>
                </Collapse>
            </Box>
        </Box>
    );
}

export default Sidebar;
