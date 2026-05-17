import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../services/api";

import {
  Building2,
  Mail,
  Lock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const OrganizationLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await API.post(
      "/organizations/login",
      formData
    );

    // SAVE TOKEN
    localStorage.setItem(
      "organizationToken",
      response.data.token
    );

    // SAVE ORGANIZATION
    localStorage.setItem(
      "organization",
      JSON.stringify(response.data.organization)
    );

    alert("Login Successful");

    navigate("/organization/dashboard");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
};
  return (
    <section
      className="
        min-h-screen
        bg-[#fffdf7]
        flex
        items-center
        justify-center
        px-4
        py-10
      "
    >

      {/* Main Container */}
      <div
        className="
          w-full
          max-w-6xl
          grid
          lg:grid-cols-2
          overflow-hidden
          rounded-[40px]
          border
          border-amber-100
          bg-white/80
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(15,23,42,0.06)]
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            hidden
            lg:flex
            relative
            flex-col
            justify-between
            p-12
            bg-[#fffaf0]
            border-r
            border-amber-100
            overflow-hidden
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              top-[-80px]
              right-[-80px]
              w-[240px]
              h-[240px]
              rounded-full
              bg-amber-100
              blur-3xl
              opacity-40
            "
          />

          {/* Logo */}
          <div className="relative z-10">

            <div
              className="
                w-16
                h-16
                rounded-3xl
                bg-slate-900
                text-white
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              <Building2 size={30} />
            </div>

            <h1
              className="
                mt-8
                text-5xl
                font-bold
                leading-tight
                tracking-tight
                text-slate-900
              "
            >
              Welcome Back
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-slate-600
                max-w-md
              "
            >
              Manage queues, monitor tokens,
              control live visitors, and operate
              your organization seamlessly with Saral.
            </p>

          </div>

          {/* Bottom Card */}
          <div
            className="
              relative
              z-10
              rounded-[32px]
              border
              border-amber-100
              bg-white
              p-7
              shadow-sm
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-emerald-100
                  flex
                  items-center
                  justify-center
                "
              >
                <ShieldCheck
                  size={28}
                  className="text-emerald-600"
                />
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-slate-900
                  "
                >
                  Secure Organization Access
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  Protected dashboard & live queue controls.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            p-8
            sm:p-12
            flex
            flex-col
            justify-center
          "
        >

          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">

            <div
              className="
                w-16
                h-16
                rounded-3xl
                bg-slate-900
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Building2 size={30} />
            </div>

          </div>

          {/* Heading */}
          <div className="text-center lg:text-left">

            <p
              className="
                text-sm
                font-medium
                text-amber-600
                uppercase
                tracking-wider
              "
            >
              Organization Portal
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Organization Login
            </h2>

            <p
              className="
                mt-4
                text-slate-600
                leading-7
              "
            >
              Access your dashboard and manage queues efficiently.
            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* Email */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                Organization Email
              </label>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  h-[58px]
                "
              >

                <Mail
                  size={20}
                  className="text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="organization@example.com"
                  className="
    w-full
    bg-transparent
    outline-none
    text-slate-700
    placeholder:text-slate-400
  "
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label
                className="
                  text-sm
                  font-medium
                  text-slate-700
                "
              >
                Password
              </label>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  h-[58px]
                "
              >

                <Lock
                  size={20}
                  className="text-slate-400"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="
    w-full
    bg-transparent
    outline-none
    text-slate-700
    placeholder:text-slate-400
  "
                />

              </div>

            </div>

            {/* Remember */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <label
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-600
                "
              >

                <input type="checkbox" />

                Remember me

              </label>

              <button
                type="button"
                className="
                  text-sm
                  font-medium
                  text-amber-600
                "
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
    group
    w-full
    h-[58px]
    rounded-2xl
    bg-slate-900
    text-white
    font-medium
    flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-300
    hover:bg-black
  "
            >

              Login To Dashboard

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />

            </button>

          </form>

          {/* Bottom */}
          <p
            className="
              mt-8
              text-center
              lg:text-left
              text-slate-600
            "
          >
            Don&apos;t have an organization account?{" "}

            <Link
              to="/organization/register"
              className="
                font-semibold
                text-amber-600
              "
            >
              Register Organization
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
};

export default OrganizationLogin;