import React from 'react';

const styles = {
    main: {
        padding: "20px",
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