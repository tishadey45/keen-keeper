import Image from "next/image";
import Link from "next/link";
export default function FriendsCard({ friend }) {
  const { name, picture, days_since_contact, status, tags, } = friend;
//   console.log({status});
  const statusColor =
    status === "overdue"
      ? "bg-red-500"
      : status === "on track"
        ? "bg-green-700"
        : "bg-yellow-500";
  return (
    <Link href={`/friend/${friend.id}`}
    >
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <div className="flex justify-center">
        <Image
          src={picture}
          width={80}
          height={80}
          alt=""
          className="rounded-full"
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold">{name}</h2>
      <p className="text-gray-400 text-sm">{days_since_contact}d ago</p>
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        <span
          key=""
          className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
        >
          {tags}
        </span>
      </div>
      <div className="mt-3">
        <span className={`text-white text-xs px-3 py-1 rounded-full ${statusColor}`}>
          {status}
        </span>
      </div>
    </div>
    </Link>
  );
}
