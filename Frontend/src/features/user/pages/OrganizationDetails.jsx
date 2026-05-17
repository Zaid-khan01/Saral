import React, { useState } from "react";
import API from "../../../services/api";
import {
    ArrowLeft,
    MapPin,
    Star,
    Clock3,
    ShieldCheck,
    Users,
    Bell,
    Ticket,
    Building2,
    CircleCheckBig,
    Wifi,
    Sparkles,
    Phone,
    CalendarDays,
    ChevronRight,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";



const OrganizationDetails = () => {
    const navigate = useNavigate();

    const { name } = useParams();

    const decodedName = decodeURIComponent(name);

    const [organization, setOrganization] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchOrganization = async () => {

            try {

                const response = await API.get("/organizations");

                const organizations = response.data.organizations;

                const foundOrganization = organizations.find(
                    (org) =>
                        org.organizationName === decodedName
                );

                if (foundOrganization) {

                    let color =
                        "from-cyan-500 to-blue-600";

                    if (
                        foundOrganization.organizationType ===
                        "Government Office"
                    ) {
                        color =
                            "from-violet-500 to-indigo-600";
                    }

                    else if (
                        foundOrganization.organizationType ===
                        "Ration Shop"
                    ) {
                        color =
                            "from-emerald-500 to-green-600";
                    }

                    else if (
                        foundOrganization.organizationType ===
                        "Service Center"
                    ) {
                        color =
                            "from-amber-500 to-orange-500";
                    }

                    setOrganization({
                        name:
                            foundOrganization.organizationName,

                        type:
                            foundOrganization.organizationType,

                        address:
                            foundOrganization.address,

                        services:
                            foundOrganization.services,

                        wait: "10 mins",

                        rating: "4.7",

                        status: "Tokens Available",

                        crowd: "Medium",

                        color,
                    });
                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        };

        fetchOrganization();

    }, [decodedName]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Loading...
            </div>
        );
    }
    
    if (!organization) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-slate-700">
                Organization Not Found
            </div>
        );
    }

    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        purpose: "",
        members: 1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBooking = async () => {

        if (
            !formData.fullName ||
            !formData.mobile ||
            !formData.purpose
        ) {
            alert("Please fill all details");
            return;
        }

        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const response = await fetch(
                "https://saral-hh7e.onrender.com/api/tokens/create",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        userName: formData.fullName,

                        mobile: formData.mobile,

                        purpose: formData.purpose,
                        serviceName: formData.purpose,

                        organizationName: organization.name,

                        organizationAddress: organization.address,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            // SAVE ACTIVE ORGANIZATION
            localStorage.setItem(
                "activeOrganization",
                JSON.stringify({
                    organizationName: organization.name,
                })
            );

            navigate("/token-success", {
                state: {
                    userName: data.token.userName,

                    organizationName:
                        data.token.organizationName,

                    organizationAddress:
                        data.token.organizationAddress,

                    tokenNumber:
                        data.token.tokenNumber,

                    peopleAhead:
                        data.peopleAhead,

                    waitTime: organization.wait,

                    bookingTime:
                        new Date().toLocaleTimeString(),

                    serviceName:
                        data.token.serviceName,
                },
            });

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-[#f6f8fc] p-5 lg:p-7">

            {/* TOP */}
            <div className="flex items-center justify-between flex-wrap gap-4">

                <button
                    onClick={() => navigate(-1)}
                    className="
                        h-[52px]
                        px-5
                        rounded-2xl
                        bg-white
                        border
                        border-slate-200
                        flex
                        items-center
                        gap-2
                        text-slate-700
                        hover:bg-slate-100
                        transition-all
                    "
                >

                    <ArrowLeft size={18} />

                    Back

                </button>

                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">

                    <Wifi size={16} />

                    Live Queue Connected

                </div>

            </div>

            {/* HERO */}
            <div
                className="
                    relative
                    overflow-hidden
                    mt-5
                    rounded-[36px]
                    bg-gradient-to-br
                    from-slate-950
                    via-slate-900
                    to-indigo-950
                    p-7
                    text-white
                "
            >

                <div className="absolute top-[-80px] right-[-80px] w-[240px] h-[240px] rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative z-10 flex flex-wrap justify-between gap-10">

                    {/* LEFT */}
                    <div>

                        <div className="flex items-center gap-2">

                            <Sparkles
                                size={16}
                                className="text-emerald-400"
                            />

                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                Smart Queue Organization
                            </p>

                        </div>

                        <h1 className="mt-5 text-[48px] md:text-[60px] leading-none font-bold tracking-tight">
                            {organization.name}
                        </h1>

                        <p className="mt-5 text-slate-300 max-w-[700px] leading-relaxed">
                            Book your digital queue instantly and avoid
                            waiting in physical lines. Live queue tracking,
                            smart predictions and notifications enabled.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <div
                                className="
                                    h-[54px]
                                    px-5
                                    rounded-2xl
                                    bg-white/10
                                    border
                                    border-white/10
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <MapPin size={16} />

                                {organization.address}

                            </div>

                            <div
                                className="
                                    h-[54px]
                                    px-5
                                    rounded-2xl
                                    bg-emerald-500/20
                                    border
                                    border-emerald-400/20
                                    flex
                                    items-center
                                    gap-2
                                    text-emerald-300
                                "
                            >

                                <CircleCheckBig size={16} />

                                {organization.status}

                            </div>

                        </div>

                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className="
                            w-full
                            sm:w-[360px]
                            rounded-[30px]
                            bg-white/10
                            backdrop-blur-xl
                            border
                            border-white/10
                            p-6
                        "
                    >

                        <p className="text-sm text-slate-300">
                            Live Queue Stats
                        </p>

                        <div className="mt-6 flex flex-col gap-5">

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <Clock3 size={18} />

                                    <span>Estimated Wait</span>

                                </div>

                                <span className="font-semibold">
                                    {organization.wait}
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <Users size={18} />

                                    <span>Queue Crowd</span>

                                </div>

                                <span className="font-semibold">
                                    {organization.crowd}
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <Ticket size={18} />

                                    <span>Availability</span>

                                </div>

                                <span className="font-semibold text-emerald-300">
                                    Live
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    <Star
                                        size={18}
                                        fill="currentColor"
                                    />

                                    <span>Ratings</span>

                                </div>

                                <span className="font-semibold">
                                    {organization.rating}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* MAIN GRID */}
            <div className="grid xl:grid-cols-[1fr_420px] gap-5 mt-5">

                {/* LEFT */}
                <div
                    className="
                        rounded-[36px]
                        bg-white
                        border
                        border-slate-200
                        p-6
                    "
                >

                    <div>

                        <p className="text-sm text-slate-500">
                            Queue Booking
                        </p>

                        <h2 className="mt-2 text-[34px] font-bold tracking-tight text-slate-900">
                            Fill Your Details
                        </h2>

                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-5">

                        {/* NAME */}
                        <div>

                            <label className="text-sm font-medium text-slate-600">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="
                                    mt-3
                                    w-full
                                    h-[58px]
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    px-5
                                    outline-none
                                    focus:border-slate-900
                                "
                            />

                        </div>

                        {/* MOBILE */}
                        <div>

                            <label className="text-sm font-medium text-slate-600">
                                Mobile Number
                            </label>

                            <input
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter mobile number"
                                className="
                                    mt-3
                                    w-full
                                    h-[58px]
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    px-5
                                    outline-none
                                    focus:border-slate-900
                                "
                            />

                        </div>

                        {/* PURPOSE */}
                        <div>

                            <label className="text-sm font-medium text-slate-600">
                                Visit Purpose
                            </label>

                            <select
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                className="
            mt-3
            w-full
            h-[58px]
            rounded-2xl
            border
            border-slate-200
            px-5
            outline-none
            focus:border-slate-900
            bg-white
            text-slate-700
        "
                            >

                                <option value="">
                                    Select Purpose
                                </option>

                                {organization.services?.map((service, index) => (

                                    <option
                                        key={index}
                                        value={service}
                                    >
                                        {service}
                                    </option>

                                ))}

                            </select>

                        </div>


                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={handleBooking}
                        className="
                            mt-8
                            w-full
                            h-[64px]
                            rounded-2xl
                            bg-slate-900
                            text-white
                            font-semibold
                            text-[16px]
                            flex
                            items-center
                            justify-center
                            gap-3
                            hover:bg-black
                            transition-all
                        "
                    >

                        <Bell size={18} />

                        Confirm & Book Token

                        <ChevronRight size={18} />

                    </button>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-5">

                    {/* ALERT */}
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[32px]
                            bg-gradient-to-br
                            from-violet-500
                            to-indigo-600
                            p-7
                            text-white
                        "
                    >

                        <div className="absolute bottom-[-50px] right-[-50px] w-[180px] h-[180px] rounded-full bg-white/10" />

                        <div className="relative z-10">

                            <p className="text-indigo-100 text-sm">
                                Smart Notification
                            </p>

                            <h2 className="mt-5 text-[38px] font-bold leading-tight">
                                Get Notified
                                <br />
                                Before Your Turn
                            </h2>

                            <div className="mt-6 flex items-center gap-2 text-indigo-100">

                                <Bell size={16} />

                                Browser Push Notifications Enabled

                            </div>

                        </div>

                    </div>

                    {/* INFO */}
                    <div
                        className="
                            rounded-[32px]
                            bg-white
                            border
                            border-slate-200
                            p-6
                        "
                    >

                        <h2 className="text-[28px] font-bold tracking-tight text-slate-900">
                            Why Use Saral?
                        </h2>

                        <div className="mt-7 flex flex-col gap-4">

                            {[
                                "Avoid standing in long queues",
                                "Live real-time queue tracking",
                                "AI-based wait time prediction",
                                "Instant token notifications",
                                "Digital smart queue system",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-slate-100
                                        p-4
                                    "
                                >

                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

                                    <p className="text-sm text-slate-700">
                                        {item}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default OrganizationDetails;