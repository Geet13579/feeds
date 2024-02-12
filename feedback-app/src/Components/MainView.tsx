import React, { useState, useEffect } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';
import TabletView from './TabletView';
import axios from 'axios';

function MainView() {
    const [suggestions, setsuggestions] = useState([])

    const [width, setWindowWidth] = useState(0);

    useEffect(() => {
        fetchData();
      }, []); 

    const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/api/showfeedback`);
       
        setsuggestions(response.data[0].productRequests)

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };    
 

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    let viewComponent;

    if (width < 768) {
        viewComponent = <MobileView suggestions_mobile={suggestions}/>;
    } else if (width >= 768 && width < 1024) {
        viewComponent = <TabletView suggestions={suggestions}/>;
    } else {
        viewComponent = <DesktopView suggestions={suggestions} />;
    }

    return (
        <div>
            {viewComponent}
        </div>
    );
}

export default MainView;
