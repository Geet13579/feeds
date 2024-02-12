import React from 'react'
import { Link } from 'react-router-dom'
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
import Plus from '../Images/Plus.png'



const addFeedback = async()=>{
    var sendData = {
        "currentUser": {
          "image": "./assets/user-images/image-zena.jpg",
          "name": "Zena Kelley",
          "username": "velvetround"
        },
        "productRequests": [
          {
            "id": 1,
            "title": "Add tags for solutions",
            "category": "enhancement",
            "upvotes": 112,
            "status": "suggestion",
            "description": "Easier to search for solutions based on a specific stack.",
            "comments": [
              {
                "id": 1,
                "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
                "user": {
                  "image": "./assets/user-images/image-suzanne.jpg",
                  "name": "Suzanne Chang",
                  "username": "upbeat1811"
                }
              },
              {
                "id": 2,
                "content": "Please use fun, color-coded labels to easily identify them at a glance",
                "user": {
                  "image": "./assets/user-images/image-thomas.jpg",
                  "name": "Thomas Hood",
                  "username": "brawnybrave"
                }
              }
            ]
          },
          {
            "id": 2,
            "title": "Add a dark theme option",
            "category": "feature",
            "upvotes": 99,
            "status": "suggestion",
            "description": "It would help people with light sensitivities and who prefer dark mode.",
            "comments": [
              {
                "id": 3,
                "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Eqaim in the evening after my device’s dark mode turns on without the bright background it currently has.",
                "user": {
                  "image": "./assets/user-images/image-elijah.jpg",
                  "name": "Elijah Moss",
                  "username": "hexagon.bestagon"
                }
              },
              {
                "id": 4,
                "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
                "user": {
                  "image": "./assets/user-images/image-james.jpg",
                  "name": "James Skinner",
                  "username": "hummingbird1"
                },
                "replies": [
                  {
                    "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
                    "replyingTo": "hummingbird1",
                    "user": {
                      "image": "./assets/user-images/image-anne.jpg",
                      "name": "Anne Valentine",
                      "username": "annev1990"
                    }
                  },
                  {
                    "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                    "replyingTo": "annev1990",
                    "user": {
                      "image": "./assets/user-images/image-ryan.jpg",
                      "name": "Ryan Welles",
                      "username": "voyager.344"
                    }
                  }
                ]
              }
            ]
          },
          {
            "id": 3,
            "title": "Q&A within the challenge hubs",
            "category": "feature",
            "upvotes": 65,
            "status": "suggestion",
            "description": "Challenge-specific Q&A would make for easy reference.",
            "comments": [
              {
                "id": 5,
                "content": "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
                "user": {
                  "image": "./assets/user-images/image-george.jpg",
                  "name": "George Partridge",
                  "username": "soccerviewer8"
                }
              }
            ]
          },
          {
            "id": 4,
            "title": "Add image/video upload to feedback",
            "category": "enhancement",
            "upvotes": 51,
            "status": "suggestion",
            "description": "Images and screencasts can enhance comments on solutions.",
            "comments": [
              { 
                "id": 6,
                "content": "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
                "user": {
                  "image": "./assets/user-images/image-javier.jpg",
                  "name": "Javier Pollard",
                  "username": "warlikeduke"
                }
              },
              {
                "id": 7,
                "content": "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
                "user": {
                  "image": "./assets/user-images/image-roxanne.jpg",
                  "name": "Roxanne Travis",
                  "username": "peppersprime32"
                }
              }
            ]
          },
          {
            "id": 5,
            "title": "Ability to follow others",
            "category": "feature",
            "upvotes": 42,
            "status": "suggestion",
            "description": "Stay updated on comments and solutions other people post.",
            "comments": [
              {
                "id": 8,
                "content": "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
                "user": {
                  "image": "./assets/user-images/image-victoria.jpg",
                  "name": "Victoria Mejia",
                  "username": "arlen_the_marlin"
                },
                "replies": [
                  {
                    "content": "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
                    "replyingTo": "arlen_the_marlin",
                    "user": {
                      "image": "./assets/user-images/image-zena.jpg",
                      "name": "Zena Kelley",
                      "username": "velvetround"
                    }
                  }
                ]
              },
              {
                "id": 9,
                "content": "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
                "user": {
                  "image": "./assets/user-images/image-jackson.jpg",
                  "name": "Jackson Barker",
                  "username": "countryspirit"
                }
              }
            ]
          },
          {
            "id": 6,
            "title": "Preview images not loading",
            "category": "bug",
            "upvotes": 3,
            "status": "suggestion",
            "description": "Challenge preview images are missing when you apply a filter."
          },
          {
            "id": 7,
            "title": "More comprehensive reports",
            "category": "feature",
            "upvotes": 123,
            "status": "planned",
            "description": "It would be great to see a more detailed breakdown of solutions.",
            "comments": [
              {
                "id": 10,
                "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
                "user": {
                  "image": "./assets/user-images/image-victoria.jpg",
                  "name": "Victoria Mejia",
                  "username": "arlen_the_marlin"
                }
              },
              {
                "id": 11,
                "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
                "user": {
                  "image": "./assets/user-images/image-jackson.jpg",
                  "name": "Jackson Barker",
                  "username": "countryspirit"
                }
              }
            ]
          },
          {
            "id": 8,
            "title": "Learning paths",
            "category": "feature",
            "upvotes": 28,
            "status": "planned",
            "description": "Sequenced projects for different goals to help people improve.",
            "comments": [
              {
                "id": 12,
                "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
                "user": {
                  "image": "./assets/user-images/image-george.jpg",
                  "name": "George Partridge",
                  "username": "soccerviewer8"
                }
              }
            ]
          },
          {
            "id": 9,
            "title": "One-click portfolio generation",
            "category": "feature",
            "upvotes": 62,
            "status": "in-progress",
            "description": "Add ability to create professional looking portfolio from profile.",
            "comments": [
              {
                "id": 13,
                "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
                "user": {
                  "image": "./assets/user-images/image-ryan.jpg",
                  "name": "Ryan Welles",
                  "username": "voyager.344"
                }
              }
            ]
          },
          {
            "id": 10,
            "title": "Bookmark challenges",
            "category": "feature",
            "upvotes": 31,
            "status": "in-progress",
            "description": "Be able to bookmark challenges to take later on.",
            "comments": [
              {
                "id": 14,
                "content": "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
                "user": {
                  "image": "./assets/user-images/image-suzanne.jpg",
                  "name": "Suzanne Chang",
                  "username": "upbeat1811"
                }
              }
            ]
          },
          {
            "id": 11,
            "title": "Animated solution screenshots",
            "category": "bug",
            "upvotes": 9,
            "status": "in-progress",
            "description": "Screenshots of solutions with animations don’t display correctly."
          },
          {
            "id": 12,
            "title": "Add micro-interactions",
            "category": "enhancement",
            "upvotes": 71,
            "status": "live",
            "description": "Small animations at specific points can add delight.",
            "comments": [
              {
                "id": 15,
                "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
                "user": {
                  "image": "./assets/user-images/image-victoria.jpg",
                  "name": "Victoria Mejia",
                  "username": "arlen_the_marlin"
                },
                "replies": [
                  {
                    "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
                    "replyingTo": "arlen_the_marlin",
                    "user": {
                      "image": "./assets/user-images/image-suzanne.jpg",
                      "name": "Suzanne Chang",
                      "username": "upbeat1811"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }

      try {
        const response = await fetch('http://localhost:4000/api/addfeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        });
        if (response.ok) {
            // Feedback saved successfully, you can redirect or show a success message
        } else {
            // Handle error response
            console.error('Failed to save feedback');
        }
    } catch (error) {
        // Handle network errors
        console.error('Network error:', error);
    }
      
}

function AddFeedback() {

    const backBtn = () => {
        window.location.href = '/';
    }
    return (
        <Box sx={{ backgroundColor: "#F7F8FD", width: "100%", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            
            <Box sx={{ width: "90%" }}>
                <Box sx={{ width: "90%", backgroundColor: "#F7F8FD", border: "none", minHeight: "100%" }}>


                    <Button
                    sx={{textDecoration:"underline"}}> <Link to="/" style={{ textDecoration: 'none'}}>Go Back</Link>

                    </Button>
                    <br/>


                </Box>

<br/>


             

                <Box sx={{ width: "90%", backgroundColor: "white", border: "none", minHeight: "100%", display: "flex", justifyContent: "center" }}>


                    <Box sx={{ width: "90%" }}>
                    <img style={{position:"absolute",marginTop:"-30px"}} src={Plus}/>
                    <br/>
                        <Typography sx={{ color: "black", fontSize: "24px", fontWeight: 700 }}>Create New Feedback</Typography>
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

        <Typography sx={{ color: "black", fontSize: "14px", fontWeight: 700 }}>Feedback Detail

<Typography sx={{ color: "#647196", fontSize: "14px", fontWeight: 400 }}>Include any specific comments on what should be improved, added, etc.</Typography>
</Typography>

                        <TextField id="outlined-basic" sx={{ width: "100%", pt: 4 }} />
                        <br />
                    </Box>
                    
                </Box>

                <Toolbar>
                    {/* <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Button  size="large" variant="contained" sx={{
                                backgroundColor:"#F49F85",
                                '&:hover': {
                                    backgroundColor: "#eb6e47",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Delete</Button>
                        </CardActions> */}
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
                            <Button onClick={addFeedback} color="secondary" size="large" variant="contained" sx={{
                                '&:hover': {
                                    backgroundColor: "#9520c8",
                                }, fontWeight: 700, fontSize: "14px", textTransform: "math-auto", borderRadius: "10px"
                            }}>Save</Button>
                        </CardActions>

                    </Toolbar>

            </Box>
        </Box>


    )
}

export default AddFeedback