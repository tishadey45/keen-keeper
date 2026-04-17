import { FriendsProfile } from "@/lib/api";
import FriendsCard from "./FriendsCard";

export default async function Friend() {
  const friendsData = await FriendsProfile();
//   console.log(friendsData);
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 ">
      <h1 className="text-2xl mb-6 max-w-6xl mx-auto">Your Friend</h1>
      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
    {friendsData.map((friend)=>(
    <FriendsCard key={friend.id} friend={friend}/>
    ))}
      </div>
    </div>
  );
}
