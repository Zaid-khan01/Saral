import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  User,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../../assets/logos/Saral-logo.png";

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };
  const [mobileMenu, setMobileMenu] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  const navLinks = [
    {
      name: "Problem",
      href: "#problem",
    },

    {
      name: "How It Works",
      href: "#how-it-works",
    },

    {
      name: "Use Cases",
      href: "#use-cases",
    },

    {
      name: "Live Demo",
      href: "#live-demo",
    },

    {
      name: "Features",
      href: "#features",
    },

    {
      name: "Benefits",
      href: "#benefits",
    },

    {
      name: "Testimonials",
      href: "#testimonials",
    },

    {
      name: "CTA",
      href: "#cta",
    },
    {
      name: "FAQ",
      href: "#faq",
    },

  ];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/80
        backdrop-blur-xl
        border-b
        border-slate-200/70
      "
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* NAVBAR */}
        <div className="h-16 flex items-center justify-between">

          {/* LEFT */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="Saral Logo"
              className="w-8 h-8 object-contain"
            />

            <h1
              className="
                text-[20px]
                font-semibold
                tracking-tight
                text-slate-900
              "
            >
              Saral
            </h1>
          </Link>

          {/* CENTER */}
          <nav className="hidden lg:flex items-center gap-8">

            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="
                  text-[15px]
                  font-medium
                  text-slate-600
                  hover:text-slate-900
                  transition-colors
                  duration-200
                "
              >
                {item.name}
              </a>
            ))}

          </nav>
          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-3 relative">

            {/* GET USER & ORGANIZATION */}
            {(() => {

              const user = JSON.parse(localStorage.getItem("user"));
              const organization = JSON.parse(localStorage.getItem("organization"));

              // LOGOUT FUNCTION
              const handleLogout = () => {

                localStorage.removeItem("token");
                localStorage.removeItem("user");
                localStorage.removeItem("organization");

                window.location.href = "/";
              };

              // USER LOGGED IN

              if (user) {
                return (
                  <div className="relative">

                    {/* PROFILE BUTTON */}
                    <button
                      onClick={() => setLoginDropdown(!loginDropdown)}
                      className="
            flex
            items-center
            gap-3
            px-3
            py-2
            rounded-2xl
            border
            border-slate-200
            bg-white
            hover:bg-slate-50
            transition-all
            duration-200
          "
                    >

                      {/* AVATAR */}
                      <div
                        className="
              w-10
              h-10
              rounded-full
              bg-slate-900
              text-white
              flex
              items-center
              justify-center
              font-semibold
              text-sm
            "
                      >
                        {user.fullName?.charAt(0).toUpperCase()}
                      </div>

                      {/* NAME */}
                      <div className="text-left hidden sm:block">

                        <h4 className="text-sm font-semibold text-slate-900 leading-none">
                          {user.fullName}
                        </h4>

                        <p className="text-xs text-slate-500 mt-1">
                          User Account
                        </p>

                      </div>

                      <ChevronDown
                        size={16}
                        className={`
              text-slate-500
              transition-transform
              duration-200
              ${loginDropdown ? "rotate-180" : ""}
            `}
                      />

                    </button>

                    {/* DROPDOWN */}
                    {loginDropdown && (
                      <div
                        className="
              absolute
              top-[115%]
              right-0
              w-[240px]
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-xl
              p-2
              z-50
            "
                      >

                        {/* DASHBOARD */}
                        <Link
                          to="/user/dashboard"
                          onClick={() => setLoginDropdown(false)}
                        >
                          <div
                            className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-slate-100
                  transition-all
                "
                          >

                            <div
                              className="
                    w-10
                    h-10
                    rounded-xl
                    bg-cyan-100
                    text-cyan-700
                    flex
                    items-center
                    justify-center
                  "
                            >
                              <User size={18} />
                            </div>

                            <div>

                              <h4 className="text-sm font-semibold text-slate-900">
                                User Dashboard
                              </h4>

                              <p className="text-xs text-slate-500">
                                Manage your tokens
                              </p>

                            </div>

                          </div>
                        </Link>

                        {/* LOGOUT */}
                        <button
                          onClick={handleLogout}
                          className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                hover:bg-red-50
                transition-all
                text-left
              "
                        >

                          <div
                            className="
                  w-10
                  h-10
                  rounded-xl
                  bg-red-100
                  text-red-600
                  flex
                  items-center
                  justify-center
                  font-semibold
                "
                          >
                            ↗
                          </div>

                          <div>

                            <h4 className="text-sm font-semibold text-red-600">
                              Logout
                            </h4>

                            <p className="text-xs text-slate-500">
                              Sign out from account
                            </p>

                          </div>

                        </button>

                      </div>
                    )}

                  </div>
                );
              }

              // ORGANIZATION LOGGED IN
              if (organization) {
                return (
                  <div className="relative">

                    {/* PROFILE BUTTON */}
                    <button
                      onClick={() => setLoginDropdown(!loginDropdown)}
                      className="
            flex
            items-center
            gap-3
            px-3
            py-2
            rounded-2xl
            border
            border-slate-200
            bg-white
            hover:bg-slate-50
            transition-all
            duration-200
            max-w-[220px]
          "
                    >

                      {/* AVATAR */}
                      <div
                        className="
              min-w-[40px]
              h-[40px]
              rounded-full
              bg-violet-600
              text-white
              flex
              items-center
              justify-center
              font-semibold
              text-sm
            "
                      >
                        {organization.organizationName
                          ?.charAt(0)
                          .toUpperCase()}
                      </div>

                      {/* NAME */}
                      <div className="min-w-0 text-left hidden sm:block">

                        <h4
                          className="
                text-sm
                font-semibold
                text-slate-900
                truncate
              "
                        >
                          {organization.organizationName}
                        </h4>

                      </div>

                      <ChevronDown
                        size={16}
                        className={`
              text-slate-500
              transition-transform
              duration-200
              ${loginDropdown ? "rotate-180" : ""}
            `}
                      />

                    </button>

                    {/* DROPDOWN */}
                    {loginDropdown && (
                      <div
                        className="
              absolute
              top-[115%]
              right-0
              w-[250px]
              rounded-2xl
              border
              border-slate-200
              bg-white
              shadow-xl
              p-2
              z-50
            "
                      >

                        {/* DASHBOARD */}
                        <Link
                          to="/organization/dashboard"
                          onClick={() => setLoginDropdown(false)}
                        >
                          <div
                            className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  hover:bg-slate-100
                  transition-all
                "
                          >

                            <div
                              className="
                    w-10
                    h-10
                    rounded-xl
                    bg-violet-100
                    text-violet-700
                    flex
                    items-center
                    justify-center
                  "
                            >
                              <Building2 size={18} />
                            </div>

                            <div className="min-w-0">

                              <h4 className="text-sm font-semibold text-slate-900">
                                Organization Dashboard
                              </h4>

                              <p className="text-xs text-slate-500 truncate">
                                Manage your queues
                              </p>

                            </div>

                          </div>
                        </Link>

                        {/* LOGOUT */}
                        <button
                          onClick={handleLogout}
                          className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                hover:bg-red-50
                transition-all
                text-left
              "
                        >

                          <div
                            className="
                  w-10
                  h-10
                  rounded-xl
                  bg-red-100
                  text-red-600
                  flex
                  items-center
                  justify-center
                  font-semibold
                "
                          >
                            ↗
                          </div>

                          <div>

                            <h4 className="text-sm font-semibold text-red-600">
                              Logout
                            </h4>

                            <p className="text-xs text-slate-500">
                              Sign out organization
                            </p>

                          </div>

                        </button>

                      </div>
                    )}

                  </div>
                );
              }

              // DEFAULT LOGIN DROPDOWN
              return (
                <div className="relative">

                  <button
                    onClick={() => setLoginDropdown(!loginDropdown)}
                    className="
          px-5
          py-2.5
          rounded-xl
          border
          border-slate-200
          bg-white
          text-slate-700
          text-[14px]
          font-medium
          flex
          items-center
          gap-2
          hover:bg-slate-50
          transition-all
          duration-200
        "
                  >

                    Login

                    <ChevronDown size={16} />

                  </button>

                  {/* DROPDOWN */}
                  {loginDropdown && (
                    <div
                      className="
            absolute
            top-[110%]
            right-0
            w-[220px]
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-xl
            p-2
            z-50
          "
                    >

                      <Link
                        to="/user/login"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <div
                          className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                hover:bg-slate-100
                transition-all
              "
                        >

                          <div
                            className="
                  w-10
                  h-10
                  rounded-xl
                  bg-cyan-100
                  flex
                  items-center
                  justify-center
                  text-cyan-700
                "
                          >

                            <User size={18} />

                          </div>

                          <div>

                            <h4 className="text-sm font-semibold text-slate-900">
                              User Login
                            </h4>

                            <p className="text-xs text-slate-500">
                              Access your queue
                            </p>

                          </div>

                        </div>
                      </Link>

                      <Link
                        to="/organization/login"
                        onClick={() => setLoginDropdown(false)}
                      >
                        <div
                          className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                hover:bg-slate-100
                transition-all
              "
                        >

                          <div
                            className="
                  w-10
                  h-10
                  rounded-xl
                  bg-violet-100
                  flex
                  items-center
                  justify-center
                  text-violet-700
                "
                          >

                            <Building2 size={18} />

                          </div>

                          <div>

                            <h4 className="text-sm font-semibold text-slate-900">
                              Organization Login
                            </h4>

                            <p className="text-xs text-slate-500">
                              Manage your queues
                            </p>

                          </div>

                        </div>
                      </Link>

                    </div>
                  )}

                </div>
              );
            })()}

          </div>
          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-slate-800"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {
              mobileMenu
                ? <X size={24} />
                : <Menu size={24} />
            }
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div
          className="
            lg:hidden
            bg-white
            border-t
            border-slate-200
            px-5
            py-6
          "
        >

          <div className="flex flex-col gap-5">

            {/* NAV LINKS */}
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="
                  text-slate-700
                  font-medium
                "
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </a>
            ))}

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 pt-3">

              <Link to="/user/login">
                <button
                  className="
                    w-full
                    py-3
                    rounded-xl
                    border
                    border-slate-200
                    text-slate-700
                    font-medium
                  "
                >
                  User Login
                </button>
              </Link>

              <Link to="/organization/login">
                <button
                  className="
                    w-full
                    py-3
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    text-slate-800
                    font-medium
                  "
                >
                  Organization Login
                </button>
              </Link>

              <Link to="/organization/register">
                <button
                  className="
                    w-full
                    py-3
                    rounded-xl
                    bg-slate-900
                    text-white
                    font-medium
                  "
                >
                  Register Organization
                </button>
              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;