import React from "react";
import PropTypes from "prop-types";

function Video({
  src,
  controls,
  autoPlay,
  loop,
  muted,
  preload,
  width,
  height,
  poster,
  style,
  id,
  className,
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
}) {
  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      preload={preload}
      width={width}
      height={height}
      poster={poster}
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

Video.defaultProps = {
  src: "",
  controls: true,
  autoPlay: false,
  loop: false,
  muted: false,
  preload: "metadata", // "none", "metadata", or "auto"
  width: "",
  height: "",
  poster: "",
  style: {},
  id: "",
  className: "",
  onPlay: () => {},
  onPause: () => {},
  onEnded: () => {},
  onTimeUpdate: () => {},
};

Video.propTypes = {
  src: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  preload: PropTypes.oneOf(["none", "metadata", "auto"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  poster: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onTimeUpdate: PropTypes.func,
};

export default Video;
