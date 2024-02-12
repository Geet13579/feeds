import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, CardActionArea, CardActions ,Typography,Card} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Chip from '@mui/material/Chip';

import MsgImage from '../Images/Path.png'

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
    <Card variant="outlined" sx={{ width: "90%",height:"100%",backgroundColor:"#F7F8FD", boxShadow: '0',border:"none" }}>

<Link to="/detailfeedback" style={{ textDecoration: 'none',color:"white"}}>

{suggestions.map((request) => (
        
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
    
))}
</Link>

 
    </Card>

  )
}

export default FeedbackList