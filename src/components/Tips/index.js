import React, {Component, useContext} from 'react';
import {topNavigationContext} from '../Navigation/titleContext'


// Wrapper allowing state management on stateless react function
class Tips extends Component {
    ComponentDidMount() {
        const [title, setTitle] = useContext(topNavigationContext);
        setTitle("Tips");
    }

    render () {
        return   <Tips  {...this.props} />
    }
}

Tips = () => {

    return (
    <div>
      <h2>Tips</h2>
    </div>
  );
}

export default Tips;
