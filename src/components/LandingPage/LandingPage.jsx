
import React, { useEffect, useRef } from 'react'
import './LandingPage.css'
import {ILiveInYou, nextLevel, PraiseMAchineMusicLogo, faceBookIcon, whatsAppIcon, youtubeIcon, linkedInIcon, manOfWar, kabiyesiOfficialImage} from './landingPageImages'
import WorshipSongCard from '../ReusableComponents/WorshipSongCard'
import { useState } from 'react'

import lottie from 'lottie-web';  
import NavBar from '../navBar/NavBar'
import WorshipSongCardSmallScreen from '../ReusableComponents/WorshipSongCardSmallScreen'

const LandingPage = () => {
  
  const [isPhoneScreen, setPhoneScreen] = useState(window.innerWidth <= 509);

  useEffect(() => {
    const handleResize = () => {
      setPhoneScreen(window.innerWidth <= 505);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const [emailObj , setEmailObject] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "subject": "",
    "message": ""
  })
  let container = useRef(null)
  let masterYodaAnimation = null;
  let airplaneAnimation = null;

  // useEffect(() => {
  //   masterYodaAnimation = lottie.loadAnimation({
  //         container: container.current,
  //         renderer: 'svg',
  //         loop: true,
  //         autoplay: true,
  //         animationData: masterYoda,
  //     });
  //     return () => {
  //       masterYodaAnimation.destroy();
  //     };
  // }, []);
  const handleEmailChange = (e)=>{
    setEmailObject({...emailObj, [e.target.name]: e.target.value})
  }
  const onEmailSubmit =(e)=>{
    e.preventDefault()
    console.log(emailObj);
    

  }
  const worshipCardSmallOrBigScreen = () =>{
    if(isPhoneScreen){
    return  <div className='worship-song-card-container'>
                              
              <WorshipSongCardSmallScreen 
              topImage={ILiveInYou} 
              h3Text={"Breathe In You"} 
              hrefLink={'https://audiomack.com/praisemachinemusic-1/song/breathe-in-you'}
              pTagText={"Lord, when I breathe I breathe in you, I live in you, you carry me. You are the air I, the hope of my life. Carry me lord"}/>
            
              <WorshipSongCardSmallScreen
              topImage={nextLevel} 
              h3Text={"Level's Change"} 
              hrefLink={'https://audiomack.com/praisemachinemusic-1/album/nextlevel-1'}
              pTagText={"Let's move to the next level with Jesus. When we love and serve God, he elevates us and sets us in higher place. Not by our power nor by our might, but by the grace of God we move higher"}/>
            
              <WorshipSongCardSmallScreen
              topImage={manOfWar} 
              h3Text={"Song Title"} 
              hrefLink={"https://audiomack.com/praisemachinemusic-1/song/eleojo'"}
              pTagText={"experience the power and presence of God as praise machine leads in worship touching the heart heart of God"}/>
          </div>
    }else{
    return  <div className='worship-song-card-container'>
                    
                <WorshipSongCard 
                topImage={ILiveInYou} 
                h3Text={"Breathe In You"} 
                hrefLink={'https://audiomack.com/praisemachinemusic-1/song/breathe-in-you'}
                pTagText={"Lord, when I breathe I breathe in you, I live in you, you carry me. You are the air I, the hope of my life. Carry me lord"}/>
              
                <WorshipSongCard
                topImage={nextLevel} 
                h3Text={"Level's Change"} 
                hrefLink={'https://audiomack.com/praisemachinemusic-1/album/nextlevel-1'}
                pTagText={"Let's move to the next level with Jesus. When we love and serve God, he elevates us and sets us in higher place. Not by our power nor by our might, but by the grace of God we move higher"}/>
              
                <WorshipSongCard
                topImage={manOfWar} 
                h3Text={"Song Title"} 
                hrefLink={"https://audiomack.com/praisemachinemusic-1/song/eleojo'"}
                pTagText={"experience the power and presence of God as praise machine leads in worship touching the heart heart of God"}/>
        </div>
    }
  }
  const redirectToKaniyesiOnAudioMack= () => {
    // Option 1: Using window.location
    // window.location.href = 'https://www.google.com';

    // Option 2: Using window.open
    window.open('https://audiomack.com/praisemachinemusic-1/song/kabiyesi', '_blank'); 
  };
  const contactInfo = () =>{
    return (
      <div className='contact-info' id='contact-info'>
        <div className="form-div">
        <p> You can always share your thoughts, testimonies and also show interest in being part of Gods work in any way you can by simply filling the form below and expressing yourself in the nessage box. The lord bless you</p>
        <form onSubmit={onEmailSubmit}>
          <input 
          type='text'
          placeholder='First Name'
          value={emailObj.firstName}
          name='firstName'
          onChange={handleEmailChange}
          />
          <input 
          type='text'
          placeholder='Last Name'
          value={emailObj.lastName}
          name='lastName'
          onChange={handleEmailChange}
          />
          <input 
          type='email'
          placeholder='Email'
          value={emailObj.email}
          name='email'
          onChange={handleEmailChange}
          />
          <input 
          type='text'
          placeholder='Subject'
          value={emailObj.subject}
          name='subject'
          onChange={handleEmailChange}
          />
          <textarea 
          className='message-text-area'
          name='message'
          placeholder='Message'
          cols={62}
          rows={4}
          ></textarea>
          <br/>

          <button className='submit-button' type='submit'>
          {/* <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
          Submit</button>
        </form>
        </div>
        
        <div className='other-contact-links'>
          <p> Visist my social media handles to connect with me. be a part of the experience, share your testimonies about what God has done in your life. Link up via</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/osisiogu-augustus-964b23279/" target='_blank'><button className='icon-image-button'><img className='icon-image' src={linkedInIcon} alt=''/><p>Visit linked in</p></button></a>
            </li>
            <li>
              <a href="https://facebook.com"><button className='icon-image-button'><img className='icon-image' src={faceBookIcon} alt=''/><p>find me on facebook </p></button></a>
             </li>
            <li>
              <a href="+234 701 369 6506"><button className='icon-image-button'><img className='icon-image' src={whatsAppIcon} alt=''/><p className='icon-ptag'> chat me on whats app</p></button></a>
            </li>
            <li>
              <a href="https://youtube.com"><button className='icon-image-button'><img className='icon-image' src={youtubeIcon} alt=''/><p>subscribe to my youtube</p></button></a>
            </li>
          </ul>
        </div>
      </div>
    )
  }

  return (
    <div className='main-container'>
     
      <NavBar/>
      <div className='header'>
        <div className='header-image'></div>
        <div className="middle-bubble"></div>
        <div className='header-text-div'>
          <h1>PraiseMachineMusic</h1>
          <p>Join us as we worship God in spirit and in truth. Follow along as we worship...</p>
          <h3>Kabiyesi</h3>
          <button className='play-now-button' onClick={redirectToKaniyesiOnAudioMack}>Play Now</button>
        </div>
      </div>
      <div className='new-release' id='new-release'>
        <img src={kabiyesiOfficialImage} alt=''/>
        <div className='about-new-release' id='about-kabiyesi'>
          <h2>Ka bi yesi</h2>
          <h4>By PraiseMachineMusic</h4>
          <p>Experience the power and presence of God as praise machine leads in worship touching the heart heart of God</p>
          <button className='play-now-button' onClick={redirectToKaniyesiOnAudioMack}>Play Now</button>
        </div>
      </div>
      {/* <div className='about-praise-machine'>about the musician</div> */}
      <div className='other-songs' id='other-songs'>
        <div className="other-songs-h2-div">
          <h2>Discover the presence of God in worship</h2>
        </div>
      {worshipCardSmallOrBigScreen()}
     </div>
     <div className='contact-info-main-container'>
      {/* {contactInfo()} */}
     </div>
    </div>
  )
}

export default LandingPage
