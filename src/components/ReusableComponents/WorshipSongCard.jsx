import React from 'react'

export default function WorshipSongCard ({topImage, h3Text, pTagText, hrefLink}) {
  return (
    // <div className="worship-songs-cards">
      
          <div className="worship-song-card">
          <a 
          className='song_card_a_tag' 
          target='_blank'
          rel="noopener noreferrer"
          href= {hrefLink}
          >
            <img className='worship-card-image' src={topImage} alt=''/>
            <h3>{h3Text}</h3>
            <p>{pTagText}</p>
          </a>
          </div>
        // </div>
  )
}



