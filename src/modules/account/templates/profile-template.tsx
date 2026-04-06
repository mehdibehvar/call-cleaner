"use client";
import { useState } from "react";
import ProfielName from "../components/dashboard/profile-name";
import Tab from "@/components/tab";
import ProfielEmail from "../components/dashboard/profile-email";
import ProfielGeneral from "../components/dashboard/profile-general";
import LocalizedClientLink from "@/components/localized-client-link";
interface IProps {
  user: any;
}
const tabs = [
  { title: "name", num: 1 },
  { title: "email", num: 2 },
  { title: "general", num: 3 },
];
const ProfileTemplate = ({ user }: IProps) => {
  const [tab, setTab] = useState(1);
  return (
    <div>
      <Tab tabs={tabs} activeTab={tab} handleChangeTab={(t) => setTab(t)}>
        {tab === 1 && <ProfielName user={user} />}
        {tab === 2 && <ProfielEmail user={user} />}
        {tab === 3 && <ProfielGeneral user={user} />}
        <Divider />
      </Tab>
      <div className="md:w-1/2 p-4  border-2 border-primary-400 shadow-2xl shadow-primary-200">
        <ul className="flex flex-col gap-4">
          <li>
            <strong>email</strong>:<span>{user.email}</span>
          </li>
          <li>
            <strong>name</strong>:<span>{user.name}</span>
          </li>
          <li>
            <strong>mobile</strong>:<span>{user.mobile}</span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <LocalizedClientLink href="account" className="text-success">
          go to dashboard
        </LocalizedClientLink>
      </div>
    </div>
  );
};

export default ProfileTemplate;

const Divider = () => {
  return <div className="w-full h-px bg-gray-600 mt-2" />;
};
