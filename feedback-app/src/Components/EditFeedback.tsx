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
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Edit from '../Images/Edit.png'

function AddFeedback() {
    return (
        <Box sx={{ backgroundColor: "#F7F8FD", width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            
            <Box sx={{ width: "90%" }}>
                <Box sx={{ width: "90%", backgroundColor: "#F7F8FD", border: "none", minHeight: "100%" }}>


                    <Button
                    >Go Back

                    </Button>


                </Box>

<br/>


             

                <Box sx={{ width: "90%", backgroundColor: "white", border: "none", minHeight: "100%", display: "flex", justifyContent: "center" }}>


                    <Box sx={{ width: "90%" }}>
                    <img style={{position:"absolute",marginTop:"-30px"}} src={Edit}/>
                    <br/>
                        <Typography sx={{ color: "black", fontSize: "24px", fontWeight: 700 }}>Editing ‘Add a dark theme option’</Typography>
                        <br />

                        <Typography sx={{ color: "black", fontSize: "14px", fontWeight: 700 }}>Feedback Title

                            <Typography sx={{ color: "#647196", fontSize: "14px", fontWeight: 400 }}>Add a short, descrip</Typography>
                        </Typography>

                        <TextField id="outlined-basic" sx={{ width: "100%", pt: 4 }} />
                        <br />
                        <br />

                        <Typography sx={{ color: "black", fontSize: "14px", fontWeight: 700 }}>Category

                            <Typography sx={{ color: "#647196", fontSize: "14px", fontWeight: 400 }}>Choose a category for</Typography>
                        </Typography>
                        <br/>

                        {/* <TextField id="outlined-basic" sx={{ width: "100%", pt: 4 }} /> */}
                        <Select sx={{width:"100%"}}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
         
        >
          <MenuItem value={10}>Feature</MenuItem>
          <MenuItem value={20}>UI</MenuItem>
          <MenuItem value={30}>UX</MenuItem>
          <MenuItem value={30}>Enhancement</MenuItem>
          <MenuItem value={30}>Bug</MenuItem>

        </Select>
        <AppBar position="static" sx={{
                    background: "#F7F8FD", height: "100px", display: "flex", justifyContent: "center", borderRadius: "10px", boxShadow: "none"
                }}>
                    <Toolbar>
                    <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button  size="large" variant="contained" sx={{
                                backgroundColor:"#F49F85",
                                '&:hover': {
                                    backgroundColor: "#eb6e47",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Delete</Button>
                        </CardActions>
                        <Typography sx={{ flexGrow: 1 }}></Typography>
                        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button  size="large" variant="contained" sx={{
                                backgroundColor:"#4661E6",
                                '&:hover': {
                                    backgroundColor: "#4661E6",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Cancle</Button>
                        </CardActions>
                        <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button color="secondary" size="large" variant="contained" sx={{
                                '&:hover': {
                                    backgroundColor: "#9520c8",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Save Changes</Button>
                        </CardActions>

                    </Toolbar>
                </AppBar>

                    </Box>
                    
                </Box>

            </Box>
        </Box>


    )
}

export default AddFeedback