const WorshipSongCardSmallScreen = ({topImage, h3Text, pTagText, hrefLink}) => {
  const buttonStyle = {
    width: "30%",
    height: "7%",
    maxWidth:  "100%",
    color: "white",
    fontSize: "18px",
    backgroundColor:  "#1772A7",
    borderRadius:  "5px",
    border: "none",
    
  };



    return (
      // <div className="worship-songs-cards">
        
            <div className="worship-song-card">
              <img className='worship-card-image' src={topImage} alt=''/>
              <h3>{h3Text}</h3>
              <p>{pTagText}</p>
              <a 
                className='song_card_a_tag' 
                target='_blank'
                rel="noopener noreferrer"
                href= {hrefLink}
                >
             <button style={buttonStyle} > Play Song</button>
            </a>
            </div>
          // </div>
    )
  }

  export default WorshipSongCardSmallScreen;