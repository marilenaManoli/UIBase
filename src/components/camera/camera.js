import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";


//This component is used to take pictures
//pictures are stored in the imageSrc variable after taking it
//Not sure what to do after picture is stored in the imageSrc variable
const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [flash, setFlash] = useState(false);


//takes pictures without flash
  const handleTakePicture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

//takes pictures with flash
  const handleTakePictureWithFlash = () => {
    setFlash(true);
    setTimeout(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
        setFlash(false);
    }, 1000);
  };


	// Trying to do the dimensions stuff.
	// Rounded to floats to ensure dimensions used here make sense, only issue I see right now - the videos will record in different format each time.
    const size = useWindowSize();
    var cameraWidth = Math.round(size.width * 0.8);
    var cameraHeight = Math.round(size.height * 0.5);
    
    
    // This code attempts for the dimensions of the camera to be in a 1:1 aspect ratio, by taking the previous measurements of the size of the screen.
    // Takes the smaller of the two calcs of width and height, to ensure it will fit on the screen.
    var minValue = cameraWidth;
    
    if (cameraHeight < minValue){
        minValue = cameraHeight;
        cameraWidth = minValue;
    }else{
        cameraHeight = minValue;
    };
    
    
    
    const aspectRatio = cameraWidth/cameraHeight;
    
    const cameraConstraints = {
      width: {
        min: cameraWidth,
        max:cameraWidth
      },
      height: {
        min: cameraHeight,
        max: cameraHeight
      },
      aspectRatio 
    };


//two buttons, one for taking pictures with flash and one for without
  return (
    <div>
      <Webcam class="webcam" videoConstraints={cameraConstraints} width={cameraWidth} height={cameraHeight} ref={webcamRef} />
      <button onClick={handleTakePicture}>Take Picture</button>
      <button onClick={handleTakePictureWithFlash}>Take Picture With Flash</button>
      {flash && <div className="flash" />}
      {imageSrc && (
        <img src={imageSrc} alt="Captured photo" />
      )}
    </div>
  );
};



// Found at:
// https://usehooks.com/useWindowSize/
function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = React.useState({
	  width: undefined,
	  height: undefined,
	});
	React.useEffect(() => {
	  // Handler to call on window resize
	  function handleResize() {
		// Set window width/height to state
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,

		  
		});
	  }
	  // Add event listener
	  window.addEventListener("resize", handleResize);
	  // Call handler right away so state gets updated with initial window size
	  handleResize();
	  // Remove event listener on cleanup
	  return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
  }





export default WebcamCapture;