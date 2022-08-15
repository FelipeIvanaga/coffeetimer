export function Clock({ time }: { time: number }) {
  const minutes = Math.floor(Math.abs(time) / 60);
  const minutesStr =
    minutes> 10 ? minutes.toFixed(0) : "0" + minutes.toFixed(0);
  const secondsStr = ("0" + (Math.abs(time) % 60).toFixed(2)).slice(-5);

  return (
    <h2 className="text-6xl text-center">
      
      {time < 0 ? "-" : null}{minutesStr}:{secondsStr}
    </h2>
  );
}
