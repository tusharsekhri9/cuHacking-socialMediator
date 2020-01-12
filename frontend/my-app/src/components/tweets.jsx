import React, { Component } from 'react';
import IndividualTweet from './individualTweet';

let Tweets = (props) => {

        let tweet;
        let allTweets = [];
        Object.keys(props.tweets).forEach(function (item) {
            tweet = <IndividualTweet tweet = {props.tweets[item]["text"]} date={props.tweets[item]["created_at"]} key={item} />
            allTweets.push(tweet);
        });

        return (
            <div>
                {allTweets}
            </div>
        );
}

export default Tweets;