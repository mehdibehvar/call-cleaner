"use client"
import  { useState } from "react";
import ProfielName from "../components/dashboard/profile-name";
import Tab from "@/components/tab";
import ProfielEmail from "../components/dashboard/profile-email";
interface IProps {
  user: any;
}
const tabs = [
  { title: "name", num: 1 },
  { title: "email", num: 2 },
  { title: "general", num: 3 },
];
const ProfileTemplate = ({  user }: IProps) => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Tab tabs={tabs} activeTab={tab} handleChangeTab={(t) => setTab(t)}>
        {tab === 1 && <ProfielName user={user}/>}
        {tab === 2 && <ProfielEmail user={user}/>}
        {tab === 3 && <div>update mobile</div>}
        <Divider />
      </Tab>
    </div>
  );
};

export default ProfileTemplate;

const Divider = () => {
  return <div className="w-full h-px bg-gray-600 mt-2" />;
};
