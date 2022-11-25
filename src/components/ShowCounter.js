import React from "react";
import DateTimeDisplay from "../components/DateTimeDisplay";
import { Card } from "react-bootstrap";
function ShowCounter({ days, hours, minutes, seconds }) {
  return (
    
      <div className="show-counter p-3 my-5 text-center d-flex justify-content-around">
        <DateTimeDisplay value={days} type={"Dias"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Horas"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Minutos"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Segundos"} isDanger={false} />
      </div>

  );
}

export default ShowCounter;
