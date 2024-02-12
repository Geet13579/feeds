import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, CardActionArea, CardActions, Typography, Card, Box ,Container} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowLeft} from '@mui/icons-material';
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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import CardContent from '@mui/material/CardContent';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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

interface Suggestion {
    // Define the properties of a suggestion
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments?: Comment[]; // Optional comments property
    productRequests:Array<Suggestion>
  }

  interface SelectedChip {
    // Define the properties of a suggestion
    selectedChip: number;

  }
  
  interface Comment {
    // Define the properties of a comment
    id: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
    replies?: Comment[]; // Optional replies property
  }
  
  // Assuming suggestions is an array of Suggestion objects

interface DesktopViewProps {
    suggestions: Suggestion[],
    selectedChip: string;

}


function FeedbackList({ suggestions,selectedChip }: DesktopViewProps) {

    console.log(selectedChip)
    
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

   
  
  return (
    // <Card variant="outlined" sx={{ width: "90%",height:"100%",backgroundColor:"#F7F8FD", boxShadow: '0',border:"none" }}>

<Link to="/detailfeedback" style={{ textDecoration: 'none',color:"white"}}>

{/* {suggestions.map((request) => (
        
        <AppBar position="static" sx={{background:"white",height:"150px",display:"flex",justifyContent:"center",borderRadius:"10px",boxShadow:"none",mb:2
}}>
        <Toolbar>
        <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{borderRadius:3, color:"#3A4374",fontSize:"17px",fontWeight:700,textTransform:"unset",display:"flex",flexDirection:"column",backgroundColor:"#F2F4FF"}}
        disableElevation
        onClick={handleClick}
        startIcon={<KeyboardArrowDownIcon />}
        
        
        
      >{request.upvotes}
        
      </Button>
     
   <Typography sx={{color:"#3A4374",ml:6,fontSize:"18px",fontWeight:700}}>{request.title}
   <Typography sx={{color:"#3A4374",fontSize:"16px",fontWeight:400}}>{request.description}</Typography>
  
   <Chip
                    key={request.category}
                    sx={{
                      marginRight: '40px',
                      marginBottom: '30px',
                      mt:2,
                      padding: '18px',
                      fontSize:"13px",
                      fontWeight:700,
                      backgroundColor:'#F2F4FF',
                      color: '#4661E6',
                      textTransform:"capitalize"
                    }}
                    label={request.category}
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
       sx={{minWidth:"220px"}}
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}  sx={{minWidth:"220px"}} disableRipple>
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
          
 <Typography sx={{color:"black"}}><img src={MsgImage}/></Typography>
 <Typography sx={{color:"black", ml:2,fontSize:"18px",fontWeight:700}}>{request.comments?.length}</Typography>
        </Toolbar>
      </AppBar>
    
))} */}

<Box sx={{ flexGrow: 1 }}>
            
            <Grid container spacing={3}>  
      
            {suggestions.map((data)=>{
      return(
          <Grid item xs={12} sm={12} md={12} xl={12}>
                
              
          <Card sx={{ minWidth: 275,marginBottom:3, height:"270px" }}>
        <CardContent>
        <Box sx={{ p: 1 }}>
         
      
      
      
      <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginLeft:"0px"}}>
              <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 700 }}>{data.title}
                              <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>{data.description}</Typography>
      
                          </Typography>
              </Box>
              <br/>
      
              <Chip
                      key={data.category}
                      sx={{
                        marginRight: '40px',
                        marginBottom: '30px',
                        padding: '18px',
                        fontSize:"13px",
                        fontWeight:700,
                        backgroundColor:'#F2F4FF',
                        color: '#4661E6',
                        textTransform:"capitalize"
                      }}
                      label={data.category}
                    />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Button
          id="demo-customized-button"
          aria-haspopup="true"
          disableElevation
          startIcon={<KeyboardArrowLeft />}
         
          sx={{borderRadius:3, color:"#3A4374",fontSize:"14px",fontWeight:700,textTransform:"unset",backgroundColor:"#F2F4FF"}}
        
          
          
          
        >{data.upvotes}
          
        </Button>
        <Typography sx={{flexGrow:1}}></Typography>
        <Typography sx={{color:"black"}}><img src={MsgImage}/></Typography>
      <Typography sx={{color:"black", ml:1,fontSize:"18px",fontWeight:700}}></Typography>
            </Stack>
            </Box>
         
        </CardContent>
       
      </Card>
          </Grid>
      )
            })}
      
       
              </Grid>
              </Box>
      
              
</Link>

 
    // </Card>

  )
}

export default FeedbackList