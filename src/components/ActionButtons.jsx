"use client";

import { useRouter } from "next/navigation";
import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdTextsms } from "react-icons/md";
import toast from "react-hot-toast";

export default function ActionButton({ name }) {
  const router = useRouter();

  const handleClick = (type) => {
    const time = Date.now();

    const newEntry = {
      name,
      type,
      time,
    };

    const oldEntries =
      JSON.parse(localStorage.getItem("friendEntries")) || [];

    const updatedEntries = [...oldEntries, newEntry];

    localStorage.setItem("friendEntries", JSON.stringify(updatedEntries));

    // 🎯 TOAST MESSAGE
    if (type === "call") {
      toast.success(`📞 Calling ${name}`);
    } else if (type === "text") {
      toast.success(`💬 Text sent to ${name}`);
    } else if (type === "video") {
      toast.success(`🎥 Video call started with ${name}`);
    }

    router.push(
      `/timeline?name=${name}&type=${type}&time=${time}`
    );
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleClick("call")}
        className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2"
      >
        <FiPhoneCall className="text-xl" />
        <span>Call</span>
      </button>

      <button
        onClick={() => handleClick("text")}
        className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2"
      >
        <MdTextsms className="text-xl" />
        <span>Text</span>
      </button>

      <button
        onClick={() => handleClick("video")}
        className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2"
      >
        <LuVideo className="text-xl" />
        <span>Video</span>
      </button>
    </div>
  );
}