import React, { useState } from "react";

export default function People({ people, setPeople }) {
  const [name, setName] = useState("");

  const addPerson = () => {
    if (name.trim()) {
      setPeople([...people, { name, balance: 0 }]);
      setName("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">People</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="p-2 rounded bg-gray-800 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add person..."
        />
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={addPerson}>
          Add
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {people.map((p, i) => (
          <li key={i} className="p-4 rounded bg-gray-900 text-center">
            {p.name}
            <div className="text-green-400 text-sm">
              Balance: ${p.balance.toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
