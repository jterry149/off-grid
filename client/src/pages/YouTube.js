import React from 'react';
import YouTubeCard from '../components/YouTube/YouTubeCard';
import videos from '../utils/videos.json';

const CardExample = () => {
  return (
    <div>
      <h1>Resources</h1>

      {videos.map(video => <YouTubeCard videoUrl={video.url} />)}
    </div>
  )
}

export default CardExample;