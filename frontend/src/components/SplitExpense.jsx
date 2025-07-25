import React, { useState } from "react";

export default function SplitExpense({ people, setPeople, groups }) {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("person"); // 'person' or 'group'
  const [selected, setSelected] = useState("");

  const handleSplit = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0 || !selected) return;

    let updatedPeople = [...people];

    if (mode === "person") {
      const index = updatedPeople.findIndex(p => p.name === selected);
      if (index !== -1) {
        updatedPeople[index].balance += amt;
      }
    } else {
      const group = groups.find(g => g.name === selected);
      if (!group || people.length === 0) return;

      const splitAmount = amt / people.length;
      updatedPeople = updatedPeople.map(p => ({
        ...p,
        balance: p.balance + splitAmount,
      }));
    }

    setPeople(updatedPeople);
    setAmount("");
    setSelected("");
  };

  return (
    <div className="p-4 mt-6 rounded bg-gray-800 space-y-4">
      <h2 className="text-lg font-semibold">Split an Expense</h2>
      <div className="flex gap-4">
        <label className="text-sm">
          <input
            type="radio"
            value="person"
            checked={mode === "person"}
            onChange={() => setMode("person")}
          />
          <span className="ml-1">Person</span>
        </label>
        <label className="text-sm">
          <input
            type="radio"
            value="group"
            checked={mode === "group"}
            onChange={() => setMode("group")}
          />
          <span className="ml-1">Group</span>
        </label>
      </div>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 rounded bg-black text-white"
      />

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full p-2 rounded bg-black text-white"
      >
        <option value="">Select {mode}</option>
        {(mode === "person" ? people : groups).map((item, i) => (
          <option key={i} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleSplit}
        className="bg-green-500 px-4 py-2 rounded text-black font-semibold w-full"
      >
        Split
      </button>
    </div>
  );
}
