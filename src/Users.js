import axios from "axios";
import react, { useEffect } from "react";
import { useState } from "react";
export default function Users() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const start = () => {
    setSeconds(seconds + 1);
    if (seconds == 59) {
      setSeconds(0);
      setMinutes(minutes + 1);
    }
    if (minutes == 59) {
      setMinutes(0);
      setHours(hours + 1);
    }
  };
  useEffect(()=> {
    let interval = setInterval(start, 100)
  }
)

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1> A timer </h1>
        <h2>
          {hours}:{minutes}:{seconds}
        </h2>
        <input type="button" value="start" onClick={start} />
        <input type="button" value="stop" />
        <input type="button" value="reset" />
      </div>{" "}
    </>
  );
}
