import React, {useState} from 'react';

export const topNavigationContext = React.createContext(null);

export const TitleContext = props => {
    const [title, setTitle] = useState('Default title')
    return (
        <topNavigationContext.Provider value={[title, setTitle]}>
            {props.children}
        </topNavigationContext.Provider>
    )
}
