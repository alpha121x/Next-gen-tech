// mousefollower scripts //

var cursor = new MouseFollower();

// card 1//
const el1 = document.querySelector('.card1');

el1.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video1.mp4');
});

el1.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 2 //
const el2 = document.querySelector('.card2');

el2.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video2.mp4');
});

el2.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 3 //
const el3 = document.querySelector('.card3');

el3.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video3.mp4');
});

el3.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 4 //
const el4 = document.querySelector('.card4');

el4.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video4.mp4');
});

el4.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 5 //
const el5 = document.querySelector('.card5');

el5.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video5.mp4');
});

el5.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 6 //
const el6 = document.querySelector('.card6');

el6.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video6.mp4');
});

el6.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 7 //
const el7 = document.querySelector('.card7');

el7.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video7.mp4');
});

el7.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 8 //
const el8 = document.querySelector('.card8');

el8.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video8.mp4');
});

el8.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card 9 //
const el9 = document.querySelector('.card9');

el9.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video9.mp4');
});

el9.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// card10 //

const el10 = document.querySelector('.card10');

el10.addEventListener('mouseenter', () => {
    cursor.setVideo('/assets/videos/video10.mp4');
});

el10.addEventListener('mouseleave', () => {
    cursor.removeVideo();
});

// Help //
const el11 = document.querySelector('.cta');

el11.addEventListener('mouseenter', () => {
    cursor.setText('Need Help?');
});

el11.addEventListener('mouseleave', () => {
    cursor.removeText();
});


// mousefollower scripts ends  //

// Define a function to handle the cursor interactivity  
  function setupCursorInteractivity1(elementSelector, videoPath) {
    const el = document.querySelector(elementSelector);
  
    el.addEventListener('mouseenter', () => {
      cursor.setVideo(videoPath);
    });
  
    el.addEventListener('mouseleave', () => {
      cursor.removeVideo();
    });
  }
  
  function setupCursorInteractivity2(elementSelector, ImgPath) {
    const el = document.querySelector(elementSelector);
  
    el.addEventListener('mouseenter', () => {
      cursor.setImg(ImgPath);
    });
  
    el.addEventListener('mouseleave', () => {
      cursor.removeImg();
    });
  }
  // Call the function with your logo element and video path
 
  


  