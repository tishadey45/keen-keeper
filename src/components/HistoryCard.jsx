import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdTextsms } from "react-icons/md";

export default function HistoryCard({ friendData }) {
  const { name, type, time } = friendData;
  const getIcon = () => {
    if (type === "call") return <FiPhoneCall />;
    if (type === "text") return <MdTextsms />;
    if (type === "video") return <LuVideo />;
  };
  const getColor = () => {
    if (type === "call") return "bg-green-100 text-green-600";
    if (type === "text") return "bg-blue-100 text-blue-600";
    if (type === "video") return "bg-purple-100 text-purple-600";
  };
  return (
    <div className=" max-w-4xl mx-auto py-4 px-6 space-y-1">
      <div className="flex bg-gray-100 p-4 rounded shadow gap-2">
        <div className={`p-3 rounded-full ${getColor()}`}>{getIcon()}</div>
        <div>
          <p>
            <span className="font-bold">{type}</span> with {name}
          </p>
          <p>
            {new Date(parseInt(time)).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
