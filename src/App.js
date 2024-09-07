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
  const [service, setService] = useState(0); // Set initial state to 0
  const [friend, setFriend] = useState(0); // Set initial state to 0
  function handleReset() {
    setBill(0);
    setService("");
    setFriend("");
  }
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Services array={array} service={service} setService={setService} />
      <FriendS array={array} friend={friend} setFriend={setFriend} />
      {/* Pass service and friend to Pay */}
      <Pay bill={bill} service={service} friend={friend} />
      <Button handleReset={handleReset} />
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
        onChange={(e) => setBill(Number(e.target.value))} // Ensure bill is a number
      />
    </div>
  );
}

function Services({ array, service, setService }) {
  return (
    <div>
      <strong>How much did you like the service? </strong>
      <select
        value={service}
        onChange={(e) => setService(Number(e.target.value))} // Ensure service is a number
      >
        {array.map((a) => (
          <Option key={a.key} a={a} />
        ))}
      </select>
    </div>
  );
}

function FriendS({ array, friend, setFriend }) {
  return (
    <div>
      <strong>How much did your friend like the service? </strong>
      <select
        value={friend}
        onChange={(e) => setFriend(Number(e.target.value))} // Ensure friend is a number
      >
        {array.map((a) => (
          <Option key={a.key} a={a} />
        ))}
      </select>
    </div>
  );
}

function Option({ a }) {
  return (
    <option value={a.percent}>
      {a.Description} {a.percent}%
    </option>
  );
}

function Pay({ bill, service, friend }) {
  // Calculate total with service and friend percentages
  const total = bill + bill * (service / 100) + bill * (friend / 100);

  return (
    <h2>
      <b>
        You pay ${total} (${bill}, $
        {(bill * (service / 100) + bill * (friend / 100)).toFixed(2)})
      </b>
    </h2>
  );
}
function Button({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
