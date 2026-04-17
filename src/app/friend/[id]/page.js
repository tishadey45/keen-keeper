import { FriendsProfile } from "@/lib/api";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import { MdTextsms } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiArchiveBold } from "react-icons/pi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import ActionButton from "@/components/ActionButtons";

export default async function DetailsPage({ params }) {
  // console.log(params);
  const { id } = await params;
  //   console.log(id);
  const friendsData = await FriendsProfile();
  //    console.log(friendsData);
  const singleFriend = friendsData.find((friend) => friend.id === parseInt(id));
  //   console.log(singleFriend);
  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    bio,
    email,
    goal,
    next_due_date,
  } = singleFriend;
  const statusColor =
    status === "overdue"
      ? "bg-red-500"
      : status === "on track"
        ? "bg-green-700"
        : "bg-yellow-500";

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
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
            className="bg-green-100  text-green-700  text-xs px-2 py-1 rounded-full"
          >
            {tags}
          </span>
        </div>
        <div className="mt-3">
          <span
            className={`text-white text-xs px-3 py-1 rounded-full ${statusColor}`}
          >
            {status}
          </span>
          <p className="text-gray-500 italic mt-4">{bio}</p>
          <p className="text-sm text-gray-400 mt-2">{email}</p>
        </div>
        <div className="mt-6 space-y-2 ">
          <button className="flex gap-2 justify-center w-full border py-2 rounded-lg"><RiNotificationSnoozeLine />
            Snooze 2 Weeks
          </button>
          <button className="flex gap-2 justify-center w-full border py-2 rounded-lg"><PiArchiveBold /> Archive</button>
          <button className="flex gap-2 justify-center w-full border py-2 rounded-lg text-red-500"><RiDeleteBin6Line />
            Delete
          </button>
        </div>
      </div>
      <div className="md:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold">{days_since_contact}</h2>
            <p className="text-gray-500">Days Since Contact</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold">{goal}</h2>
            <p className="text-gray-500">Goal (Days)</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-lg font-semibold">{next_due_date}</h2>
            <p className="text-gray-500">Next Due</p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Relationship Goal</h3>
            <p className="text-gray-500">
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
          <button className="border px-4 py-1 rounded">Edit</button>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 className="mb-4 font-semibold">Quick Check-In</h3>
          <div className="">

            <ActionButton name={name}/>
            {/* <button className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2">
              <FiPhoneCall className="text-xl" />
              <span>Call</span>
            </button>

            <button className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2">
              <MdTextsms className="text-xl" />
              <span>Text</span>
            </button>

            <button className="bg-gray-100 p-4 rounded-lg flex flex-col items-center gap-2">
              <LuVideo className="text-xl" />
              <span>Video</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
