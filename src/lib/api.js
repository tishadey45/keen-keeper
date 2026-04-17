export const FriendsProfile = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/tishadey45/keen-keeper/refs/heads/main/src/data/friends.json",
  );
  return res.json();
};
