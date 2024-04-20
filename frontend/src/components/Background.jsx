export default function Background({ video }) {
  return (
    <video
      autoPlay
      loop
      muted
      className=" absolute w-full h-full z-0 top-0 left-0 object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
