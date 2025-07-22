import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import People from "./components/People";
import Groups from "./components/Groups";

export default function App() {
  const [people, setPeople] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem("people") || "[]");
    const storedGroups = JSON.parse(localStorage.getItem("groups") || "[]");
    setPeople(storedPeople);
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  return (
    <div className="min-h-screen p-4 space-y-6">
      <Header />
      <Groups groups={groups} setGroups={setGroups} />
      <People people={people} setPeople={setPeople} />
    </div>
  );
}
