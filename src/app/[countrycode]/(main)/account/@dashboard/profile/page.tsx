import { retriveUser } from "@/lib/_data/users";
import { notFound } from "next/navigation";
import ProfileTemplate from "@/modules/account/templates/profile-template";

const Profile = async () => {
  const result = await retriveUser().catch(() => null);
  const user = result.ok ? result.data : null;
  if (!result.ok) {
    notFound();
  }
  return <ProfileTemplate user={user}></ProfileTemplate>;
};

export default Profile;
