import React, {Component, useContext} from 'react';
import {topNavigationContext} from "../Navigation/titleContext";


// Wrapper allowing state management on stateless react function
class OfficePage extends Component {
    ComponentDidMount() {
        const [title, setTitle] = useContext(topNavigationContext);
        setTitle("Our office");
    }

    render () {
        return   <OfficePage  {...this.props} />
    }
}

OfficePage = () => {

    return (
        <div>
            <h2>Our Office</h2>
            <h1>Hello</h1>

        </div>
    );
}

export default OfficePage;
