import React, { useState } from "react";

export default function Groups({ groups, setGroups }) {
  const [name, setName] = useState("");

  const addGroup = () => {
    if (name.trim()) {
      setGroups([...groups, { name }]);
      setName("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Groups</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="p-2 rounded bg-gray-800 text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add group..."
        />
        <button className="bg-blue-500 px-4 py-2 rounded" onClick={addGroup}>
          Add
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-4">
        {groups.map((g, i) => (
          <li key={i} className="p-4 rounded bg-gray-900 text-center">
            {g.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
