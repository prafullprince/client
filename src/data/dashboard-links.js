import { ACCOUNT_TYPE } from "../utills/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/blogger",
    type: ACCOUNT_TYPE.BLOGGER,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Blogs",
    path: "/dashboard/my-blogs",
    type: ACCOUNT_TYPE.BLOGGER,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Blog",
    path: "/dashboard/add-blog",
    type: ACCOUNT_TYPE.BLOGGER,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.VISITOR,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.VISITOR,
    icon: "VscHistory",
  },
];
