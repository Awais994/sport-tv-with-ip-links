import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Video = (props) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};

function Tvlive({ play, string }) {
  const ref = useCallback(() => {
    console.log(play);
  }, [string]);
  return (
    <div
      ref={ref}
      key={string}
      style={{ width: "800px", height: "800px", margin: "15px" }}
    >
      <Video {...play} />
    </div>
  );
}

export default Tvlive;
