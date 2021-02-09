import React from 'react';

const styles = {
    main: {
        paddingLeft: "200px",
        paddingRight: "200px",
        paddingBottom: "60px",
    }
}

class MainNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <main style={styles.main}>
                {this.props.children}
            </main>
            </>
        )
    }
}

export default MainNav;