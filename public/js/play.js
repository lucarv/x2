function play(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
  }

  function pause(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime=0;
  }