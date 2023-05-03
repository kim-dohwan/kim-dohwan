
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubePlayerAPIReady(){
  new YT.Player('player', {
    videoId : 'GLjG5Tlnrv4',
    playerVars : {
      autoplay : true,
      loop : true,
      playlist : 'GLjG5Tlnrv4'
    },
    events: {
      onReady: function (event){
        event.target.mute()
      }
    }
  })
}
