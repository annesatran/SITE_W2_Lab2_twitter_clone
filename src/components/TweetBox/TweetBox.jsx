import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import Tweet from "../Tweet/Tweet"

export default function TweetBox(props) {
  
  const [characterCount, setCharacterCount] = React.useState(0)

  function handleOnTweetTextChange (evt){
    props.setTweetText(evt.target.value)
    setCharacterCount(evt.target.value.length)
    }

  function handleOnSubmit (){
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length
    }
    
    // set tweets array to the current one plus the new tweet
    props.setTweets(props.tweets.concat(newTweet))

    // reset tweetText state
    props.setTweetText("")
  }
  
  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount
          characterCount={characterCount}/>
        <TweetSubmitButton
          handleOnSubmit={handleOnSubmit}
          characterCount={characterCount}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount( {characterCount} ) {
  return (
    <span className={characterCount>140 ? "tweet-length red":"tweet-length"}>
      {characterCount > 0 ? 140-characterCount : null}
    </span>
  )
}

export function TweetSubmitButton( {handleOnSubmit, characterCount} ) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleOnSubmit}
        disabled={!(characterCount > 0 && characterCount <= 140)}>Tweet</button>
    </div>
  )
}

// export function TweetSubmitButton( {handleOnSubmit} ) {
//   return (
//     <div className="tweet-submit">
//       <i className="fas fa-plus-circle"></i>
//       <button className="tweet-submit-button" onClick={handleOnSubmit}>Tweet</button>
//     </div>
//   )
// }