import Image from "next/image";
export default function FriendsCard({friend}) {
      const { name, picture, days_since_contact, status, tags } = friend;
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      {/* image */}
      <div className="flex justify-center">
        <Image
          src={picture}
          width={80}
          height={80}
          alt={name}
          className="rounded-full"
        />
      </div>

      {/* name */}
      <h2 className="mt-4 text-lg font-semibold">{name}</h2>

      {/* days */}
      <p className="text-gray-400 text-sm">{days_since_contact}d ago</p>

      {/* tags */}
      <div className="flex justify-center gap-2 mt-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* status */}
      <div className="mt-3">
        <span
          className={`text-white text-xs px-3 py-1 rounded-full ${statusColor}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
