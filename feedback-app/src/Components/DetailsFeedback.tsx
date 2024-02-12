import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, CardActionArea, CardActions, Typography, Card, Box } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import MsgImage from '../Images/Path.png';
import Avatar1 from '../Images/Oval.png';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'


const StyledMenu = styled((props: MenuProps) => (
    <Menu

        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));
function FeedbackList() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ backgroundColor: "#F7F8FD" }}>
            <Card sx={{ p: 5, minWidth: 275, backgroundColor: "#F7F8FD", border: "none", minHeight: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                <AppBar position="static" sx={{
                    background: "#F7F8FD", height: "100px", display: "flex", justifyContent: "center", borderRadius: "10px", boxShadow: "none"
                }}>
                    <Toolbar>
                        <Button
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            sx={{ borderRadius: 3, color: "#3A4374", fontSize: "17px", fontWeight: 700, textTransform: "unset" }}
                            disableElevation
                            onClick={handleClick}
                            startIcon={<KeyboardArrowLeft />}



                        >
                            <Link to="/" style={{ textDecoration: 'none',color:"black"}}> Go Back</Link>
                           

                        </Button>
                        <Typography sx={{ flexGrow: 1 }}></Typography>
                        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button color="primary" size="large" variant="contained" sx={{
                                '&:hover': {
                                    backgroundColor: "#9520c8",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Edit Feedback</Button>
                        </CardActions>

                    </Toolbar>
                </AppBar>
                <br />

                <AppBar position="static" sx={{
                    background: "white", height: "150px", display: "flex", justifyContent: "center", borderRadius: "10px", boxShadow: "none"
                }}>
                    <Toolbar>
                        <Button
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            sx={{ borderRadius: 3, color: "#3A4374", fontSize: "17px", fontWeight: 700, textTransform: "unset", display: "flex", flexDirection: "column", backgroundColor: "#F2F4FF" }}
                            disableElevation
                            onClick={handleClick}
                            startIcon={<KeyboardArrowDown />}



                        >112

                        </Button>
                        <Typography sx={{ color: "#3A4374", ml: 6, fontSize: "18px", fontWeight: 700 }}>Add tags for solutions
                            <Typography sx={{ color: "#3A4374", fontSize: "16px", fontWeight: 400 }}>Easier to search for</Typography>
                            <Chip
                                key='Enhancement'
                                sx={{
                                    marginRight: '40px',
                                    marginBottom: '30px',
                                    padding: '18px',
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    backgroundColor: '#F2F4FF',
                                    color: '#4661E6',
                                }}
                                label='Enhancement'
                            />
                        </Typography>



                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>
                        <StyledMenu
                            sx={{ minWidth: "220px" }}
                            id="demo-customized-menu"
                            MenuListProps={{
                                'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} sx={{ minWidth: "220px" }} disableRipple>
                                <EditIcon />
                                Most Upvotes
                            </MenuItem>
                            <Divider sx={{ my: 0.3 }} />

                            <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon />
                                Least Upvotes
                            </MenuItem>
                            <Divider sx={{ my: 0.3 }} />
                            <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon />
                                Most Comments
                            </MenuItem>
                            <Divider sx={{ my: 0.3 }} />

                            <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon />
                                Least Comments
                            </MenuItem>
                        </StyledMenu>

                        <Typography sx={{ color: "black" }}><img src={MsgImage} /></Typography>
                        <Typography sx={{ color: "black", ml: 2, fontSize: "18px", fontWeight: 700 }}>2</Typography>
                    </Toolbar>
                </AppBar>
                <br />

                <AppBar position="static" sx={{
                    background: "white", height: "auto", display: "flex", justifyContent: "center", borderRadius: "10px", boxShadow: "none"
                }}>

                    <Typography sx={{ color: "#3A4374", p: 3, fontSize: "18px", fontWeight: 700 }}>4 Comments</Typography>

                    <Toolbar>

                        <Avatar alt="Remy Sharp" src={Avatar1} />
                        <Typography sx={{ color: "#3A4374", ml: 6, fontSize: "14px", fontWeight: 700 }}>Elijah Moss
                            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>@hexagon.bestagon</Typography>

                        </Typography>



                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>

                        <Typography sx={{ color: "#4661E6", ml: 2, fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Reply</Typography>
                    </Toolbar>
                    <Box sx={{ ml: 14 }}>
                        <Typography sx={{ color: "#647196", fontSize: "14px", fontWeight: 400 }}>
                            Also, please allow styles to be applied based on system preferences. I would love to be able to browse Eqaim in the evening after my device’s dark mode turns on without the bright background it currently has.
                        </Typography>


                    </Box>
                    <br />
                    <Toolbar sx={{ ml: 11 }}>

                        <TextField id="outlined-basic" sx={{ width: "50%" }} />

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>

                        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button size="large" variant="contained" sx={{
                                backgroundColor: "#AD1FEA", '&:hover': {
                                    backgroundColor: "#9520c8",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Post Reply</Button>
                        </CardActions>
                    </Toolbar>
                    <Divider component="li" />
                </AppBar>

               

                <AppBar position="static" sx={{
                    background: "white", height: "auto", display: "flex", justifyContent: "center", borderRadius: "10px", boxShadow: "none"
                }}>

                  

                    <Toolbar>

                        <Avatar alt="Remy Sharp" src={Avatar1} />
                        <Typography sx={{ color: "#3A4374", ml: 6, fontSize: "14px", fontWeight: 700 }}>Elijah Moss
                            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>@hexagon.bestagon</Typography>

                        </Typography>



                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>

                        <Typography sx={{ color: "#4661E6", ml: 2, fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Reply</Typography>
                    </Toolbar>
                    <Box sx={{ ml: 14 }}>
                        <Typography sx={{ color: "#647196", fontSize: "14px", fontWeight: 400 }}>
                            Also, please allow styles to be applied based on system preferences. I would love to be able to browse Eqaim in the evening after my device’s dark mode turns on without the bright background it currently has.
                        </Typography>


                    </Box>
                   
                    <Box sx={{ml:5}}>
                    <Toolbar>

<Avatar alt="Remy Sharp" src={Avatar1} />
<Typography sx={{ color: "#3A4374", ml: 6, fontSize: "14px", fontWeight: 700 }}>Elijah Moss
    <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>@hexagon.bestagon</Typography>

</Typography>



<Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
>

</Typography>

<Typography sx={{ color: "#4661E6", ml: 2, fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Reply</Typography>
</Toolbar>
<Box sx={{ ml: 14 }}>
<Typography sx={{ color: "#647196", fontSize: "14px", fontWeight: 400 }}>
    Also, please allow styles to be applied based on system preferences. I would love to be able to browse Eqaim in the evening after my device’s dark mode turns on without the bright background it currently has.
</Typography>


</Box>

                    </Box>
    
                    <br />
                    <Toolbar sx={{ ml: 11 }}>

                        <TextField id="outlined-basic" sx={{ width: "50%" }} />

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>

                        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button size="large" variant="contained" sx={{
                                backgroundColor: "#AD1FEA", '&:hover': {
                                    backgroundColor: "#9520c8",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Post Reply</Button>
                        </CardActions>
                    </Toolbar>
                    <br />
                </AppBar>

<br/>
                <AppBar position="static" sx={{
                    background: "white", height: "auto", display: "flex", justifyContent: "center", borderRadius: "10px", boxShadow: "none"
                }}>

                    <Typography sx={{ color: "#3A4374", p: 3, fontSize: "18px", fontWeight: 700 }}>Add Comment</Typography>

                  
                   
                    <br />
                    <Toolbar sx={{ ml: 11 }}>

                        <TextField id="outlined-basic" sx={{ width: "50%" }} />

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >

                        </Typography>

                        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button size="large" variant="contained" sx={{
                                backgroundColor: "#AD1FEA", '&:hover': {
                                    backgroundColor: "#9520c8",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Post Comment</Button>
                        </CardActions>
                    </Toolbar>
                    <Divider component="li" />
                </AppBar>
            </Card>
        </Box>
    )
}

export default FeedbackList