function VideoPlayer({ link }) {
  return (
    <video
      className="block border-none"
      width="100%"
      height="100%"
      src="/videos/pharmaceutical-showcase.mp4"
      title="Pharmaceutical Showcase video"
      controls={false}
      autoPlay
    ></video>
  );
}

export default VideoPlayer;
