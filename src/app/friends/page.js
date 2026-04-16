import friends from "@/data/friends.json";
import FriendCard from "@/components/FriendCard";


export default function FriendsPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* title */}
      <h1 className="text-2xl font-bold mb-6 max-w-6xl mx-auto">
        Your Friends
      </h1>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
}
