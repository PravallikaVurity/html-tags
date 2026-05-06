import React from 'react'
import CarouselContainer from '../components/CarouselContainer';
import DumiProducts from '../components/DumiProducts';
import FooterComponent from '../components/FooterComponent';

const LandingPage = () => {

    const handleGreeting=()=>{
        let txt="Welcome To Alpha Mart";
        let wspeech=window.speechSynthesis;
        let voice=new SpeechSynthesisUtterance(txt)
        wspeech.speak(voice);
        voice.rate=3;
        console.log(wspeech.getVoice);
        
        
    };

  return (
    <div>
        <button id="greeting-btn" onClick={handleGreeting}>Click To Announce Greeting</button>
        <CarouselContainer/>
        <h1>Products</h1>
        <DumiProducts/>
        <FooterComponent/>

    </div>
  )
}

export default LandingPage;