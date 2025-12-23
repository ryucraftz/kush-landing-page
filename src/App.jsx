import { useState } from "react";
import "./App.css";

import Review from "../components/Review";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import CallToActionButton from "../components/CallToActionButton";
import MeetCoachKush from "../components/MeetCoachKush";
import PhotoTestimonials from "../components/PhotoTestimonials";
import VideoTestimonialSection from "../components/VideoTestimonialSection";
import FitDadWhySystemWorks from "../components/FitDadWhySystemWorks";
import OurPromise from "../components/OurPromise";

import StickyBar from "../components/StickyBar"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pb-28 sm:pb-32">
        <Review />
        <Hero />
        <VideoSection />
        <CallToActionButton />
        <PhotoTestimonials />
        <VideoTestimonialSection />
        <MeetCoachKush />
        <FitDadWhySystemWorks />
        <OurPromise />
        <CallToActionButton />
      </div>

      <StickyBar />
    </>
  );
}

export default App;
