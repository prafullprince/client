import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import ProfileDropdown from "../auth/ProfileDropdown";
import { Input } from "../ui/input";

function Navbar() {

  // fetch from store
  const { token } = useSelector((state) => state.auth);

  // hook
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [search, setSearch] = useState("");

  // matchRoute fn
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // search change handler
  function changeHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 transition-all duration-200`}
    >
      <div className="flex w-[90%] md:w-[80%] mx-auto items-center justify-between gap-1">
        {/* Logo */}
        <Link
          className=" w-[80px] h-[32px] mt-3 sm:w-[160px] sm:h-[32px] sm:mt-0"
          to="/"
        >
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Navigation links */}
        <nav className=" hidden md:block">
          <ul className="flex gap-x-4 text-richblack-25 md:gap-x-6">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p
                    className={`${
                      matchRoute(link?.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search */}
        <div>
          <Input
            className="bg-richblack-800 border-richblack-900"
            placeholder="search blog"
            type="text"
            name="search"
            value={search}
            onChange={changeHandler}
          />
        </div>

        {/* login signup for big screen */}
        <div className="items-center gap-x-1 hidden md:flex md:gap-x-4">
          {token === null && (
            <Link to="/login">
              <button
                className={`rounded-[8px] ${
                  matchRoute("/login") ? " bg-yellow-5 text-richblack-900" : ""
                } border px-1 py-1 border-richblack-700 bg-richblack-800 md:px-[12px] md:py-[8px] text-richblack-100 shadow-sm shadow-blue-50`}
              >
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button
                className={`rounded-[8px] ${
                  matchRoute("/signup") ? " bg-yellow-5 text-richblack-900" : ""
                } border px-1 py-1 border-richblack-700 bg-richblack-800 md:px-[12px] md:py-[8px] text-richblack-100 shadow-sm shadow-blue-50`}
              >
                Sign up
              </button>
            </Link>
          )}
        </div>

        {/* when user loggedIn */}
        {token !== null && (
          <ProfileDropdown navigate={navigate} dispatch={dispatch} />
        )}

        {/* signup login for mobile screen */}
        {token === null && (
          <button className="mr-4 md:hidden">
            <AiOutlineMenu
              onClick={() => {
                setConfirmationModal({
                  text1: "Are you sure?",
                  text2: "Where you want to go",
                  btn1Text: "Signup",
                  btn2Text: "Login",
                  btn1Handler: () => {
                    navigate("/signup");
                    setConfirmationModal(null);
                  },
                  btn2Handler: () => {
                    navigate("/login");
                    setConfirmationModal(null);
                  },
                });
              }}
              fontSize={24}
              fill="#AFB2BF"
            />
          </button>
        )}
      </div>

      {/* modal */}
      {confirmationModal && (
        <ConfirmationModal
          modalData={confirmationModal}
          setModalData={setConfirmationModal}
        />
      )}
    </div>
  );
}

export default Navbar;
