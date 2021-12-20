import React from 'react'
import video from "../data/video.js";
import VideoDetails from "./VideoContainer"
import CommentsList from './CommentsList'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDetails video={video}/>
      <br></br>
      <br></br>
      <CommentsList comments={video.comments}/>
    </div>
  );
}

export default App;
