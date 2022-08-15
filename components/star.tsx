export default function Star({
  top = 0,
  left = 0,
  height = 0.2,
  width = 0.2,
  blur = 10,
  spread = 2,
}) {
  return (
    <div
      className="absolute rounded-full bg-white"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        height: `${height}rem`,
        width: `${width}rem`,
        boxShadow: `0 0 ${blur}px ${spread}px white`,
      }}
    ></div>
  );
}
