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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function RoadMap() {


    const [suggestions, setsuggestions] = useState([])
    const [LiveRoadmap, setLiveRoadmap] = useState<any[]>([]);
    const [PlannedRoadmap, setPlannedRoadmap] = useState<any[]>([]);
    const [ProgressRoadmap, setProgressRoadmap] = useState<any[]>([]);


    useEffect(() => {
        fetchData();
      }, []); 

    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/showfeedback`);
       
          var suggestion = response.data[0].productRequests

          var PlannedRoadmap = [];
          var ProgressRoadmap = [];
          var LiveRoadmap = []

          for(var i=0; i<suggestion.length; i++){
           
          
              if(suggestion[i].status == 'suggestion'){
                
                LiveRoadmap.push(suggestion[i])
     

              }
              else if(suggestion[i].status=="planned"){
                PlannedRoadmap.push(suggestion[i])

             

              }
              else{
                ProgressRoadmap.push(suggestion[i])

                

              }
            }

            setProgressRoadmap(ProgressRoadmap)
            setLiveRoadmap(LiveRoadmap)
            setPlannedRoadmap(PlannedRoadmap)
        setsuggestions(response.data[0].productRequests)

        

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };  





  return (
    <Box sx={{p:3,backgroundColor:"#F2F4FF"}}>
      <AppBar position="static" sx={{background:" #373F68",height:"110px",boxShadow:0
}}>
        <Toolbar>
        
          
       
        
      
      <Typography  >
      <Button
        id="demo-customized-button"
        aria-haspopup="true"
        sx={{color:"#F7F8FD",fontSize:"14px",fontWeight:700,textTransform:"unset"}}
        disableElevation
        startIcon={<KeyboardArrowLeft />}
        
      >
       <Link to="/" style={{ textDecoration: 'none',color:"#F7F8FD"}}>Go Back</Link>
     
      </Button>
     
        <Typography sx={{fontSize:"22px",fontWeight:700}}>
        Roadmap
        </Typography>
 

      </Typography>
       <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
   
          
          {/* <Search> */}
          <Button  size="large" variant="contained" sx={{backgroundColor:"#AD1FEA",'&:hover': {
    backgroundColor: "#9520c8",
  }, fontWeight:700, fontSize:"14px", textTransform: "math-auto",borderRadius:"10px"}}><Link to="/addfeedback" style={{ textDecoration: 'none',color:"white"}}>+ Add Feedback</Link></Button>
          {/* </Search> */}
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, backgroundColor: "#F7F8FD" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginLeft:"0px"}}>
            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 700 }}>Planned {"(" + PlannedRoadmap.length + ")"} 
                            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>Ideas prioritized for research</Typography>

                        </Typography>
            </Box>
            <br/>

        <Box sx={{ flexGrow: 1 }}>
            
      <Grid container spacing={3}>  

      {PlannedRoadmap.map((data)=>{
return(
    <Grid item xs={12} sm={12} md={12} xl={12}>
          
        
    <Card sx={{ minWidth: 275,marginBottom:3, height:"270px",borderTop:"6px solid #F49F85" }}>
  <CardContent>
  <Box sx={{ p: 1 }}>
   

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>


  <ListItem
      disableGutters
    
    >
      <Badge color="warning"  variant="dot" sx={{marginRight:"10px"}}>
      
    </Badge > <ListItemText primary="Planned" />
    </ListItem>
 

</List>



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
<Typography sx={{color:"black", ml:1,fontSize:"18px",fontWeight:700}}>{data.comments.length}</Typography>
      </Stack>
      </Box>
   
  </CardContent>
 
</Card>
    </Grid>
)
      })}

 
        </Grid>
        </Box>

        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>

        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginLeft:"0px"}}>
            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 700 }}>In-Progress {"(" + ProgressRoadmap.length + ")"} 
                            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>Currently being deve</Typography>

                        </Typography>
            </Box>
            <br/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>    
 
{ProgressRoadmap.map((data)=>{
return(
    <Grid item xs={12} sm={12} md={12} xl={12}>
          
        
    <Card sx={{ minWidth: 275,marginBottom:3, height:"270px",borderTop:"6px solid #AD1FEA" }}>
  <CardContent>
  <Box sx={{ p: 1 }}>
   

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>


  <ListItem
      disableGutters
    
    >
      <Badge color="secondary"  variant="dot" sx={{marginRight:"10px"}}>
      
    </Badge > <ListItemText primary="In Progress" />
    </ListItem>
 

</List>



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
<Typography sx={{color:"black", ml:1,fontSize:"18px",fontWeight:700}}>{data.comments.length}</Typography>
      </Stack>
      </Box>
   
  </CardContent>
 
</Card>
    </Grid>
)
      })}

        </Grid>
        </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",marginLeft:"0px"}}>
            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 700 }}>Live {"(" + LiveRoadmap.length + ")"} 
                            <Typography sx={{ color: "#3A4374", fontSize: "14px", fontWeight: 400 }}>Released features</Typography>

                        </Typography>
            </Box>
            <br/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>    
  
{LiveRoadmap.map((data)=>{
return(
    <Grid item xs={12} sm={12} md={12} xl={12}>
          
        
    <Card sx={{ minWidth: 275,marginBottom:3, height:"270px",borderTop:"6px solid #4661E6" }}>
  <CardContent>
  <Box sx={{ p: 1 }}>
   

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>


  <ListItem
      disableGutters
    
    >
      <Badge color="primary"  variant="dot" sx={{marginRight:"10px"}}>
      
    </Badge > <ListItemText primary="Live" />
    </ListItem>
 

</List>



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
<Typography sx={{color:"black", ml:1,fontSize:"18px",fontWeight:700}}>{data.comments.length}</Typography>
      </Stack>
      </Box>
   
  </CardContent>
 
</Card>
    </Grid>
)
      })}


        </Grid>
        </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  
  )
}

export default RoadMap