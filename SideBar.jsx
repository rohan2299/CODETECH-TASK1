import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { HiBookOpen, HiChartPie, HiInbox, HiLogin, HiLogout, HiOutlineCloudUpload, HiUser, HiUserAdd} from "react-icons/hi";
import { AuthContext } from '../contects/AuthProvider';
import ProfilePic from "../assets/BooksPoster/ProfilePic.png";

const SideBar = () => {
    const {user} = useContext(AuthContext)
    console.log("User object:", user);
  return (
    <Sidebar aria-label="Sidebar with content separator example" className='h-full'>
       <Sidebar.Logo href="#" img={user?.photoURL || ProfilePic} className='w-18 h-18 rounded'>
    <p>{user?.displayName || "Demo User"}</p>
</Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload Book
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage Books
        </Sidebar.Item>
        <Sidebar.Item href="/shop" icon={HiBookOpen}>
          All Books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/user" icon={HiUser}>
          User
        </Sidebar.Item>
        <Sidebar.Item href="/sign-up" icon={HiUserAdd}>
          Sign Up
        </Sidebar.Item>
        <Sidebar.Item href="/login" icon={HiLogin}>
         Log In
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiLogout}>
         Log Out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar
