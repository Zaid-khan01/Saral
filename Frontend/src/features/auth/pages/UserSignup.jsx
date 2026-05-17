import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../services/api";
import {
    ArrowRight,
    Sparkles,
    UserRound,
    Mail,
    Lock,
    Smartphone,
} from "lucide-react";

import logo from "../../../assets/logos/Saral-logo.png";

const UserSignup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
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
                "/users/register",
                formData
            );

            // SAVE TOKEN
            localStorage.setItem(
                "token",
                response.data.token
            );

            // SAVE USER
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            alert("Registration Successful");

            navigate("/user/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Something went wrong"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#fffdf7] overflow-hidden relative flex items-center justify-center px-5 py-10">

            {/* GLOW */}
            <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative z-10 w-full max-w-[620px]">

                <div className="rounded-[36px] bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] p-8 sm:p-10">

                    {/* LOGO */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Saral"
                            className="w-11 h-11 object-contain"
                        />

                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-slate-900">
                                Saral
                            </h2>

                            <p className="text-sm text-slate-500">
                                Smart Queue Experience
                            </p>
                        </div>
                    </Link>

                    {/* HEADING */}
                    <div className="mt-10 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
                            <Sparkles size={15} className="text-indigo-600" />

                            <span className="text-sm font-medium text-indigo-600">
                                Join Saral Today
                            </span>
                        </div>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                            Create Your Account
                        </h1>

                        <p className="mt-3 text-slate-500 leading-relaxed max-w-md mx-auto">
                            Book tokens digitally, track live queues and save your valuable time.
                        </p>

                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 flex flex-col gap-5"
                    >

                        {/* GOOGLE SIGNUP */}
                        <button
                            type="button"

                            onClick={() => {
                                window.location.href =
                                    "https://saral-hh7e.onrender.com/api/users/google";
                            }}

                            className="
                                group
                                w-full
                                h-[60px]
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                flex
                                items-center
                                justify-center
                                gap-3
                                hover:bg-slate-50
                                transition-all
                            "
                        >

                            {/* GOOGLE ICON */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                className="w-6 h-6"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.3 14.7l6.6 4.8C14.7 15.4 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 39.5 16.2 44 24 44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.3-6 6.8l6.2 5.2C39.2 36.6 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
                                />
                            </svg>

                            <span className="font-medium text-slate-700">
                                Continue with Google
                            </span>

                        </button>

                        {/* DIVIDER */}
                        <div className="flex items-center gap-4">

                            <div className="flex-1 h-px bg-slate-200" />

                            <span className="text-sm text-slate-400">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-slate-200" />

                        </div>

                        {/* FULL NAME */}
                        <div>
                            <label className="text-sm font-medium text-slate-700">
                                Full Name
                            </label>

                            <div className="mt-2 relative">

                                <UserRound
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full h-[58px] rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
                                />

                            </div>
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="text-sm font-medium text-slate-700">
                                Email Address
                            </label>

                            <div className="mt-2 relative">

                                <Mail
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full h-[58px] rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
                                />

                            </div>
                        </div>

                        {/* PHONE */}
                        <div>
                            <label className="text-sm font-medium text-slate-700">
                                Phone Number
                            </label>

                            <div className="mt-2 relative">

                                <Smartphone
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full h-[58px] rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
                                />

                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="text-sm font-medium text-slate-700">
                                Password
                            </label>

                            <div className="mt-2 relative">

                                <Lock
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create password"
                                    className="w-full h-[58px] rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none focus:border-indigo-500 focus:bg-white transition-all"
                                />

                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="group mt-2 h-[60px] rounded-2xl bg-slate-900 text-white font-medium text-[15px] flex items-center justify-center gap-2 hover:bg-black transition-all"
                        >
                            Create Account

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>

                    </form>

                    {/* FOOTER */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-500">
                            Already have an account?{" "}

                            <Link
                                to="/user/login"
                                className="font-semibold text-indigo-600 hover:text-indigo-700"
                            >
                                Login Here
                            </Link>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserSignup;