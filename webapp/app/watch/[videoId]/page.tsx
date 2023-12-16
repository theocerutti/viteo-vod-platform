import React from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import { hotkeys as videoHotkeys } from '@/app/watch/[videoId]/hotkeys';
import Player from '@/app/watch/[videoId]/player';

export default function Watch({ params }: { params: { videoId: string } }) {
  const playerRef = React.useRef<videojs.Player>();

  const videoJsOptions: videojs.PlayerOptions = {
    autoplay: true,
    controlBar: {
      remainingTimeDisplay: false,
      skipButtons: {
        backward: 10,
        forward: 10,
      },
    },
    userActions: {
      hotkeys: videoHotkeys,
    },
    // muted: false,
    loop: false,
    controls: true,
    responsive: true,
    poster: './', // image before the video plays
    preload: 'auto',
    // aspectRatio: "16:10",
    audioOnlyMode: false,
    audioPosterMode: false,
    disablePictureInPicture: false,
    fullscreen: {
      options: {
        navigationUI: 'hide',
      },
    },
    liveui: false,
    notSupportedMessage: 'NOT SUPPORTED',
    inactivityTimeout: 0,
    playbackRates: [0.5, 0.75, 1, 1.25, 1.5],
    preferFullWindow: false,
    language: 'en',
    fluid: true,
    sources: [
      {
        src: `/${params.videoId}.mp4`,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player: videojs.Player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });

    player.on('error', (error) => {
      console.log('error', error);
      throw new error();
    });

    player.on('abort', (error) => {
      console.log('abort', error);
    });
  };

  return (
    <>
      <Player options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
}
