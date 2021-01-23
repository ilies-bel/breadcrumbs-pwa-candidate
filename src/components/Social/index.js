import React, {Component, useContext} from 'react';
import {topNavigationContext} from "../Navigation/titleContext";


// Wrapper allowing state management on stateless react function
class SocialPage extends Component {
    ComponentDidMount() {
        const [title, setTitle] = useContext(topNavigationContext);
        setTitle("Social pages");
    }

    render () {
      return   <SocialPage  {...this.props} />
    }
}

SocialPage = () => {

    return (
        <div>
            <h1>Social</h1>
        </div>
    );
}

export default SocialPage;

/*
export default Landing
compose(
    withEmailVerification,
    withAuthorization(condition),
)(Landing);
*/
