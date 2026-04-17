import FriendsCard from "@/components/FriendsCard";
import friends from "@/data/friends.json";
import { FriendsProfile } from "@/lib/api";

export default async function FriendsPage() {
//   const friendsData = await FriendsProfile();
//   console.log(friendsData);
  return (
    // <div className="bg-gray-100 min-h-screen py-10 px-4">
    //   <h1 className="text-2xl font-bold mb-6 max-w-6xl mx-auto">
    //     Your Friends
    //   </h1>
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
    //     {friends.map((friend) => (
    //       <FriendsCard key={friend.id} friend={friend} />
    //     ))}
    //   </div>
    // </div>
  );
}
