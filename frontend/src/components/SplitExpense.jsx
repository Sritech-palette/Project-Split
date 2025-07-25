import React, { useState } from "react";

export default function SplitExpense({ people, setPeople, groups }) {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("person"); // 'person' or 'group'
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");

  const handleSplit = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) return;

    let updatedPeople = [...people];

    if (mode === "person") {
      if (selectedPeople.length === 0) return;
      const splitAmount = amt / selectedPeople.length;

      updatedPeople = updatedPeople.map(p =>
        selectedPeople.includes(p.name)
          ? { ...p, balance: p.balance + splitAmount }
          : p
      );
    } else {
      const group = groups.find(g => g.name === selectedGroup);
      if (!group || people.length === 0) return;

      const splitAmount = amt / people.length;
      updatedPeople = updatedPeople.map(p => ({
        ...p,
        balance: p.balance + splitAmount,
      }));
    }

    setPeople(updatedPeople);
    setAmount("");
    setSelectedPeople([]);
    setSelectedGroup("");
  };

  const handleMultiSelect = (e) => {
    const options = Array.from(e.target.selectedOptions, opt => opt.value);
    setSelectedPeople(options);
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

      {mode === "person" ? (
        <select
          multiple
          value={selectedPeople}
          onChange={handleMultiSelect}
          className="w-full p-2 rounded bg-black text-white h-32"
        >
          {people.map((p, i) => (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      ) : (
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="w-full p-2 rounded bg-black text-white"
        >
          <option value="">Select group</option>
          {groups.map((g, i) => (
            <option key={i} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      )}

      <button
        onClick={handleSplit}
        className="bg-green-500 px-4 py-2 rounded text-black font-semibold w-full"
      >
        Split
      </button>
    </div>
  );
}
