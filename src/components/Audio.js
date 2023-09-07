import React from "react";
import PropTypes from "prop-types";

function Audio({
  src,
  controls,
  autoPlay,
  loop,
  muted,
  preload,
  style,
  id,
  className,
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
}) {
  return (
    <audio
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      preload={preload}
      style={style}
      id={id}
      className={className}
      onPlay={onPlay}
      onPause={onPause}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
    />
  );
}

Audio.defaultProps = {
  src: "",
  controls: true,
  autoPlay: false,
  loop: false,
  muted: false,
  preload: "metadata", // "none", "metadata", or "auto"
  style: {},
  id: "",
  className: "",
  onPlay: () => {},
  onPause: () => {},
  onEnded: () => {},
  onTimeUpdate: () => {},
};

Audio.propTypes = {
  src: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  preload: PropTypes.oneOf(["none", "metadata", "auto"]),
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onTimeUpdate: PropTypes.func,
};

export default Audio;
