import React, { memo, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import ProfileDropDownConModal from './ProfileDropDownConModal';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../service/apiCall/authApiCall';
import ConfirmationModal from "../common/ConfirmationModal";
import { useSelector } from 'react-redux';

function ProfileDropdown({navigate,dispatch}) {

    // const navigate = useNavigate();
    // const dispatch = useNavigate();

    const [profileDropDownModal,setProfileDropDownModal] = useState(null);
    const [confirmationModal,setConfirmationModal] = useState(null);

    const { image } = useSelector((state)=>state.profile);

  return (
    <div className='flex items-center gap-x-1 md:gap-x-4 text-white'>
        {/* dashboard */}
        <div className='hidden md:block md:gap-x-2'>
            <Link className='px-4 rounded-lg shadow-sm shadow-blue-100 py-[8px] bg-richblack-800 hidden md:block' to={"/dashboard/my-profile"}>
                Dashboard
            </Link>
        </div>
        {/* Logout */}
          <button className='hidden md:block' onClick={()=>{
            setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler:()=>{logout(navigate,dispatch),setConfirmationModal(null)},
                btn2Handler:()=>setConfirmationModal(null)
            });
          }}>
              <img className=' rounded-full w-8 h-8' src={image} />
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
            confirmationModal && <ConfirmationModal modalData={confirmationModal} />
          }

          {
            profileDropDownModal && <ProfileDropDownConModal modalData={profileDropDownModal} setModalData={setProfileDropDownModal} />
          }

    </div>
  )
}

export default memo(ProfileDropdown);
