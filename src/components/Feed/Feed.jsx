// import { text } from "express"
import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox
        setTweets={props.setTweets}
        userProfile={props.userProfile}
        tweets={props.tweets}
        tweetText={props.tweetText}
        setTweetText={props.setTweetText}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed"> 
        {props.tweets.map(tweet =>(
          <Tweet key={tweet.id} tweet={tweet}/>
        ))}
        
        </div>
    </div>
  )
}
