import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import ProfileDropDownConModal from './ProfileDropDownConModal';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../service/apiCall/authApiCall';
import ConfirmationModal from "../common/ConfirmationModal";

function ProfileDropdown() {

    const navigate = useNavigate();
    const dispatch = useNavigate();

    const [profileDropDownModal,setProfileDropDownModal] = useState(null);
    const [confirmationModal,setConfirmationModal] = useState(null);


  return (
    <div className='flex items-center gap-x-1 md:gap-x-3 text-white'>
        {/* dashboard */}
        <div className='hidden md:block md:gap-x-2'>
            <Link className='px-4 rounded-lg shadow-sm shadow-blue-5 py-2 bg-richblack-800' to={"/dashboard/my-profile"}>
                Dashboard
            </Link>
        </div>
        {/* profile */}
          <button className='px-4 hidden md:block rounded-lg shadow-sm shadow-blue-100 py-2 bg-richblack-800' onClick={()=>{
            setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler:()=>{logout(navigate,dispatch),setConfirmationModal(null)},
                btn2Handler:()=>setConfirmationModal(null)
            });
          }}>
              Logout
          </button>
        {/* mobile size profileDropDown */}
        <button className="text-white md:hidden">
            <AiOutlineMenu className='text-white'
              onClick={() => {
                setProfileDropDownModal({
                  text1: "Are you sure?",
                  text2: "Where you want to go",
                  btn1Text: "Dashboard",
                  btn2Text: "Logout",
                });
              }}
              fontSize={24}
            />
          </button>

          {
            profileDropDownModal ? <ProfileDropDownConModal modalData={profileDropDownModal} setModalData={setProfileDropDownModal} /> :
            confirmationModal ? <ConfirmationModal modalData={confirmationModal} setModalData={setConfirmationModal} /> : null
          }

    </div>
  )
}

export default ProfileDropdown
