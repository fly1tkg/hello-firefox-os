window.onload = function() {
  $("#firstButton").click(function () {
    document.querySelector('#newSection').className = 'current';
    document.querySelector('[data-position="current"]').className = 'left';
  });

  $("#backButton").click(function () {
    document.querySelector('#newSection').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });

  $("#secondButton").click(function() {
    var google = "http://google.com";

    var activity = new MozActivity({
      name:"view",
      data:{
        type:"url",
        url:google
      }
    });
  });
};
