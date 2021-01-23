import React, {Component, useContext} from 'react';
import Messages from "../Messages";
import {topNavigationContext} from "../Navigation/titleContext";

// Wrapper allowing state management on stateless react function
class AmbassadorsPage extends Component {
    ComponentDidMount() {
        const [title, setTitle] = useContext(topNavigationContext);
        setTitle("Meet our ambassadors");
    }

    render () {
        return   <AmbassadorsPage  {...this.props} />
    }
}


AmbassadorsPage = () => {

    return (
        <div>

            <h2>Ambassadors</h2>
            <h3>Ask a question</h3>
            <Messages/>

        </div>
    );
}

export default AmbassadorsPage;
