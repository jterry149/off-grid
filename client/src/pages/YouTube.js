import React from 'react';
import YouTubeCard from '../components/YouTube/YouTubeCard';
import videos from '../utils/videos.json';

const CardExample = () => {
  return (
    <div>
      {videos.map(video => <YouTubeCard videoUrl={video.url} />)}
    </div>
  )
}

export default CardExample;