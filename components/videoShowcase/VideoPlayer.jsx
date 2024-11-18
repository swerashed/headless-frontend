function VideoPlayer({ videoURL }) {
  return (
    <video
      className="block border-none"
      width="100%"
      height="100%"
      src={videoURL}
      title="Pharmaceutical Showcase video"
      controls={true}
      autoPlay
    ></video>
  );
}

export default VideoPlayer;
