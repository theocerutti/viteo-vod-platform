import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoPlayer = (props: {
  options: videojs.PlayerOptions;
  onReady?: (player: videojs.Player) => void;
}) => {
  const videoRef = React.useRef<HTMLDivElement | null>(null);
  const playerRef = React.useRef<videojs.Player>();
  const { options, onReady } = props;

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      // @ts-ignore
      videoRef.current?.appendChild(videoElement);

      const player = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });
      playerRef.current = player;

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      if (player) {
        if (options.autoplay) {
          console.log('AUTOPLAY');
          player.autoplay(options.autoplay);
        }
        if (options.sources) {
          player.src(options.sources);
        }
      }
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = undefined;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default VideoPlayer;
