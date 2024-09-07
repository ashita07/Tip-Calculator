import { useState } from "react";
import "./index.css";
let array = [
  { key: "1", Description: "Dissatisfied", percent: 0 },
  { key: "2", Description: "It was ok", percent: 5 },
  { key: "3", Description: "It was good", percent: 10 },
  { key: "4", Description: "Absolutely Amazing", percent: 5 },
];
export default function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friend, setFriend] = useState(0);
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Services array={array} service={service} setService={setService} />
      <FriendS array={array} />
      <Pay bill={bill} />
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <strong>How much was the Bill?</strong>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
function Services({ array, service, setService }) {
  return (
    <div>
      <strong>How much did you like the service? </strong>
      <select name="dropdown" id="dropdown">
        {array.map((a) => (
          <Option a={a} />
        ))}
      </select>
    </div>
  );
}
function Option({ a }) {
  return (
    <option value="">
      {a.Description} {a.percent}%
    </option>
  );
}

function FriendS() {
  return (
    <div>
      <strong>How much did your friend like the service? </strong>
      <select name="dropdown" id="dropdown">
        {array.map((a) => (
          <Option a={a} />
        ))}
      </select>
    </div>
  );
}

function Pay({ bill }) {
  return (
    <h2>
      <b>You pay ${bill} ($xx + $yy) </b>
    </h2>
  );
}
