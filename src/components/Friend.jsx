"use client";

import { useEffect, useState } from "react";
import { FriendsProfile } from "@/lib/api";
import FriendsCard from "./FriendsCard";

export default function Friend() {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔄 data fetch
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await FriendsProfile();
        setFriendsData(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // 🟡 Loading Skeleton UI
  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <h1 className="text-2xl mb-6 max-w-6xl mx-auto">
          Loading Friends...
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow animate-pulse text-center"
            >
              {/* image */}
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>

              {/* name */}
              <div className="h-4 bg-gray-300 rounded mt-4 w-3/4 mx-auto"></div>

              {/* days */}
              <div className="h-3 bg-gray-200 rounded mt-2 w-1/2 mx-auto"></div>

              {/* tags */}
              <div className="flex justify-center gap-2 mt-3">
                <div className="h-3 w-10 bg-gray-200 rounded"></div>
                <div className="h-3 w-10 bg-gray-200 rounded"></div>
              </div>

              {/* status */}
              <div className="h-4 bg-gray-300 rounded mt-4 w-1/3 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 🟢 Real Data UI
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-2xl mb-6 max-w-6xl mx-auto">
        Your Friends
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {friendsData.map((friend) => (
          <FriendsCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}