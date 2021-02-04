import React from 'react';

import { Timeline, Tweet } from 'react-twitter-widgets'


const TweetFeed = () => {

    return (
        <>
            <div>
                <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'Sword_Group'
                }}
                options={{
                    height: '400'
                }}
                onLoad={() => <strong>Loading...</strong>}
                />
            </div>
        </>


    );
}

export default TweetFeed;

