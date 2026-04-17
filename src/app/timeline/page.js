"use client";

import HistoryCard from "@/components/HistoryCard";
import { useEffect, useState } from "react";

export default function TimelinePage() {
  const [history, setHistory] = useState([]);
  console.log(history);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("friendEntries")) || [];
    setHistory(data);
  }, []);

  return (
    <div>
      <div className=" max-w-4xl mx-auto py-10 px-6">
        <h1 className="font-bold text-4xl">Timeline</h1>
      </div>
      {history.map((friendData) => (
        <HistoryCard key={friendData.id} friendData={friendData} />
      ))}
    </div>
  );
}
