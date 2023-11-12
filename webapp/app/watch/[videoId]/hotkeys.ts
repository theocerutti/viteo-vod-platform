import videojs from 'video.js';

export function hotkeys(event) {
  const videoPlayer: videojs.Player = this;
  if (!videoPlayer) {
    console.error('videoPlayer is not defined, hotkeys will not work');
    return;
  }
  if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    const timeOffset = event.key === 'ArrowLeft' ? -10 : 10;
    videoPlayer.currentTime(videoPlayer.currentTime() + timeOffset);
  }
  if (event.key === ' ') {
    videoPlayer.paused() ? videoPlayer.play() : videoPlayer.pause();
  }
  if (event.key === 'm') {
    videoPlayer.muted(!videoPlayer.muted());
  }
  if (event.key === 'f') {
    // TODO: maybe there is some incompatibility for some browsers
    const isFullScreen = videoPlayer.isFullscreen();
    if (isFullScreen) {
      if (videoPlayer.supportsFullScreen()) videoPlayer.exitFullscreen();
      else videoPlayer.exitFullWindow();
    } else {
      if (videoPlayer.supportsFullScreen()) videoPlayer.requestFullscreen();
      else videoPlayer.enterFullWindow();
    }
  }
  if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
    const volumeOffset = event.key === 'ArrowDown' ? -0.1 : 0.1;
    videoPlayer.volume(videoPlayer.volume() + volumeOffset);
  }
}
