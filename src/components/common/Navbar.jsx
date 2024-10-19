import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  matchPath,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import logo from "../../assets/Logo/Logo-small-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useEffect, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import ProfileDropdown from "../auth/ProfileDropdown";
import { Input } from "../ui/input";
import { searchBlog } from "../../service/apiCall/courseApiCall";


function Navbar() {
  // fetch from store
  const { token } = useSelector((state) => state.auth);

  // hook
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [result, setResult] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  // matchRoute fn
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // useEffect to load blogs if query exists in URL on initial load
  useEffect(() => {
    if (query) {
      // setSearchParams({ query: query });
      const fetchData = async () => {
        const response = await searchBlog(query);
        console.log(response);
        setResult(response);
      };
      fetchData();
    } else {
      setSearchParams({});
    }
  }, [query]); // Runs when query changes

  const handleBlur = () => {
    // Add a slight delay to allow the click to be processed
    setTimeout(() => setDropDown(false), 200);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 transition-all duration-200`}
    >
      <div className="flex w-[90%] md:w-[80%] mx-auto items-center justify-between gap-1">
        {/* Logo */}
        <Link
          className="w-8 h-8 flex items-center gap-2"
          to="/"
        >
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
          <p className="text-richblack-25 text-lg hidden lg:block">Kayakalp</p>
        </Link>

        {/* Navigation links */}
        {token === null && (
          <nav className="hidden lg:block">
            <ul className="flex gap-x-4 text-richblack-25 lg:gap-x-6">
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
        )}

        {/* Search */}
        <div className="relative">
          <Input
            className="bg-richblack-800 border-richblack-900 lg:w-[300px]"
            placeholder="search blog"
            type="text"
            name="query"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setDropDown(true);
            }}
            onFocus={() => setDropDown(true)}
            onBlur={handleBlur}
          />
          {dropDown && result.length > 0 && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded mt-1 lg:w-[300px] shadow-lg max-h-60 overflow-auto flex flex-col">
              {result.map((blog) => (
                <Link
                  to={`/blog/${blog._id}`}
                  onClick={() => setQuery(blog.name)}
                  key={blog._id}
                  className="p-2 cursor-pointer"
                >
                  {blog.name}
                </Link>
              ))}
            </div>
          )}
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
