import React from 'react';
import {BrowserRouter as Router, Link, Route, useRouteMatch,} from 'react-router-dom';
import {TitleSource} from "../Navigation/titleContext";
import {SOCIAL_TITLE} from "../../constants/routes";
import { Timeline, Tweet } from 'react-twitter-widgets';
import TweetFeed from './tweets/feed'
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const style = {
    tab: {
        borderBottomStyle: 'solid',
        borderBottomWidth: '4px',
        borderBottomColor: 'royalblue',
        transition: 'all, ease-in, 0.4s'
    }
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  
const SocialPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {path, url} = useRouteMatch();

    return (
<Router>
            <TitleSource>{SOCIAL_TITLE}</TitleSource>

            <Paper >
                
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                
                <Tab style={ value===0 ? style.tab : {}} label={<Link to={`${url}/tweets/feed`}>Tweet</Link>} />
                <Tab style={ value===1 ? style.tab : {}} label={<Link to={`${url}/linked/feed`}>Linked</Link>} />
            </Tabs>
            <TweetFeed />
            </Paper>
            <div>
                <h1>Social</h1>
            </div>
            
            <Route path={`${url}/tweets/feed]`} component={TweetFeed} /></Router>

    );
}

export default SocialPage;

