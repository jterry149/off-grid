import React from 'react'

const YouTubeCard = () => {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg"
                allowfullscreen></iframe>
        </div>
    )
}

export default YouTubeCard;