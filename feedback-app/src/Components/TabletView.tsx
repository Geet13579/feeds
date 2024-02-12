import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'

import { Container, ThemeProvider, createTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import FeedbackList from './FeedbackList'

// images

import Group16 from '../Images/Group16.png'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
    typography: {
      fontFamily: [
        'Jost', // Your custom font-family
      ].join(','),
    },
    palette: {
      background: {
        default: '#F2F4FF', // Set your desired background color here
      },
    },
  });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

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
  

interface DesktopViewProps {
    suggestions: Suggestion[];
}


function TabletView({ suggestions }: DesktopViewProps) {
    const [width, setWindowWidth] = useState(0)
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment);
    };
  
  
    const [selectedChip, setSelectedChip] = React.useState<string>('all');
  
    const handleChipClick = (label: string) => {
      setSelectedChip(label);
    };
  
  
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    var filtersuggestions  = []

    var countInProgress = 0
    var countPlanned = 0
    var countLive = 0

//  console.log('suggestions[0]', suggestions[0].productRequests)
for(var i=0; i<suggestions.length; i++){

    if(suggestions[i].status == 'suggestion'){
        countLive = countLive+1
    }
    else if(suggestions[i].status=="planned"){
        countPlanned=countPlanned+1
    }
    else{
        countInProgress= countInProgress+1
    }

    if(suggestions[i].category == selectedChip){

        filtersuggestions.push(suggestions[i])

    }
    else if(suggestions[i].category != selectedChip && selectedChip=="all"){
        filtersuggestions.push(suggestions[i])

    }
  
}
  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ flexGrow: 1,backgroundColor:"#F2F4FF" ,p:5}}>
        
      <Grid container spacing={2}>
       
        <Grid xs={12} sm={12} md={12 } xl={4}>
          {/* <Item>xs=4</Item> */}
 

          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={4} xl={12}>
        <Card sx={{ minWidth: 240 , height:"270px",marginBottom:3,background: 'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)' }}>
      <CardContent>
      <br />
      <br />
      <br />
        <Typography sx={{ color:"white",fontSize:"20px",fontWeight:700  }} >
        Eqaim
        </Typography>
        <Typography sx={{ color:"white",fontSize:"15px",fontWeight:500  }} >

        Feedback Board
          
       
        </Typography>
      </CardContent>
  
    </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} xl={12}>
           
    <Card sx={{ minWidth: 240, height:"270px",marginBottom:3}}>
      <br/>
      <CardContent sx={{display: "flow-root", flexDirection: "row",justifyContent: "center"}}>
      {['all', 'uI', 'uX', 'enhancement', 'bug', 'feature'].map((label) => (
                  <Chip
                    key={label}
                    sx={{
                      marginRight: '40px',
                      marginBottom: '30px',
                      padding: '10px',
                      fontSize:"13px",
                      fontWeight:700,
                      textTransform:"capitalize",
                      backgroundColor: selectedChip === label ? '#4661E6' : '#F2F4FF',
                      color: selectedChip === label ? '#FFFFFF' : '#4661E6',
                    }}
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
      </CardContent>
    <br/>
    </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} xl={12}>
        <Card sx={{ minWidth: 240,marginBottom:3, height:"270px" }}>
      <CardContent>
      <Box sx={{ p: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={{fontSize:"18px",fontWeight:700}} gutterBottom variant="h5" component="div">
          Roadmap
          </Typography>
          <Typography sx={{fontSize:"15px"}} color="primary" gutterBottom variant="h6" component="div">
          <Link to="/roadmap" style={{ textDecoration: 'none'}}>View</Link>

          </Typography>
          </Stack>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  

  <ListItem
      disableGutters
      secondaryAction={
        <IconButton sx={{fontWeight:700,fontSize:"15px"}} aria-label="comment">
         {countPlanned}
         
        </IconButton>
      }
    >
      <Badge color="warning"  variant="dot" sx={{marginRight:"10px"}}>
      
    </Badge > <ListItemText primary="Planned" />
    </ListItem>
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton sx={{fontWeight:700,fontSize:"15px"}} aria-label="comment">
         {countInProgress}
        </IconButton>
      }
    >
      <Badge color="secondary" variant="dot" sx={{marginRight:"10px"}}>
      
    </Badge > <ListItemText primary="In-Progress" />
    </ListItem>

    <ListItem
      disableGutters
      secondaryAction={
        <IconButton sx={{fontWeight:700,fontSize:"15px"}} aria-label="comment">
          {countLive}
        </IconButton>
      }
    >
      <Badge color="primary" variant="dot" sx={{marginRight:"10px"}}>
      
    </Badge > <ListItemText primary="Live" />
    </ListItem>
</List>
          </Box>
       
      </CardContent>
     
    </Card>
        </Grid>
        
      </Grid>
    </Box>

        </Grid>
        <Grid xl={8} xs={12} sm={12} md={12}>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:" #373F68"
}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  sx={{ mr:2, display: { xs: 'none', sm: 'block' },fontSize:"17px",fontWeight:700}}>6 Suggestions</Typography>
          <Typography  sx={{ display: { xs: 'none', sm: 'block' },fontSize:"13px",fontWeight:500,color:"#F2F4FE"}}> Sort By:</Typography>
         
          <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{color:"#F7F8FD",fontSize:"17px",fontWeight:700,textTransform:"unset"}}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        
      >
      Most Upvot
        
      </Button>
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
          
          {/* <Search> */}
          <Button  size="large" variant="contained" sx={{backgroundColor:"#AD1FEA",'&:hover': {
    backgroundColor: "#9520c8",
  }, fontWeight:700, fontSize:"14px", textTransform: "math-auto",borderRadius:"10px"}}>+ Add Feedback</Button>
          {/* </Search> */}
        </Toolbar>
      </AppBar>
    </Box>

    <Card sx={{ minWidth: 240 ,backgroundColor:"#F7F8FD",border: "none",minHeight: "100%",display: "flex",justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      
    {filtersuggestions.length!=0?
      <FeedbackList suggestions={filtersuggestions} selectedChip={selectedChip} />
    :
    <Card variant="outlined" sx={{ width: "90%",height:"600px", boxShadow: '0',border:"none" }}>

       <CardActionArea  sx={{display:"flex",flexDirection:"column"}}>
        <CardMedia sx={{ objectFit: "contain"}}
          component="img"
          height="140"
          image={Group16}
          alt="green iguana"
        />
        <br/>
        <CardContent sx={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5" sx={{fontWeight:700,fontSize:"24px"}} component="div">
          There is no feedback
          </Typography>
        <br/>

          <Typography sx={{fontSize:"16px"}} variant="body2" color="text.secondary">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{alignItems:"center",justifyContent:"center"}}>
      <Button  size="large" variant="contained" sx={{backgroundColor:"#AD1FEA",'&:hover': {
    backgroundColor: "#9520c8",
  }, fontWeight:700, fontSize:"14px", textTransform: "math-auto",borderRadius:"10px"}}>+ Add Feedback</Button>
      </CardActions>
    </Card>
}
    </Card>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  )
}

export default TabletView