import React, { useState, useEffect } from "react";

import {
    Search,
    MapPin,
    Star,
    Clock3,
    ArrowRight,
    Hospital,
    Landmark,
    Store,
    Building2,
    Ticket,
    Navigation,
    Sparkles,
    Filter,
    ShieldCheck,
    Wifi,
    ChevronRight,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const categories = [
    {
        title: "Hospital",
        icon: <Hospital size={24} />,
        gradient: "from-cyan-500 to-blue-600",
    },

    {
        title: "Government Office",
        icon: <Landmark size={24} />,
        gradient: "from-violet-500 to-indigo-600",
    },

    {
        title: "Ration Shop",
        icon: <Store size={24} />,
        gradient: "from-emerald-500 to-green-600",
    },

    {
        title: "Service Center",
        icon: <Building2 size={24} />,
        gradient: "from-amber-500 to-orange-500",
    },
];



const BookTokenPanel = () => {
    const navigate = useNavigate();

    const location = useLocation();

    const [search, setSearch] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

    const [organizations, setOrganizations] = useState([]);

    const handleCategory = (item) => {
        setSelectedCategory(item.title);
    };

    useEffect(() => {

        const storedOrganizations =
            JSON.parse(localStorage.getItem("organizations")) || [];

        setOrganizations(storedOrganizations);

    }, []);
    const filteredOrganizations = organizations.filter((item) => {
        const matchSearch =
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.type.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            selectedCategory === "All" ||
            item.type.toLowerCase().includes(
                selectedCategory.toLowerCase()
            );

        return matchSearch && matchCategory;
    });

    return (
        <div className="flex flex-col gap-5">

            {/* HERO */}
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    bg-gradient-to-br
                    from-slate-950
                    via-slate-900
                    to-indigo-950
                    p-7
                    text-white
                "
            >

                <div className="absolute top-[-80px] right-[-80px] w-[260px] h-[260px] rounded-full bg-cyan-500/20 blur-3xl" />

                <div className="absolute bottom-[-100px] left-[-100px] w-[240px] h-[240px] rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative z-10">

                    <div className="flex items-center gap-2">

                        <Wifi size={15} className="text-emerald-400" />

                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                            Smart Token Booking
                        </p>

                    </div>

                    <h1 className="mt-5 text-[48px] md:text-[58px] leading-none font-bold tracking-tight">
                        Book Queue
                        <br />
                        Instantly
                    </h1>

                    <p className="mt-6 max-w-[720px] text-slate-300 leading-relaxed">
                        Discover nearby hospitals, government offices,
                        ration shops and service centers. Track live wait
                        time and reserve your token digitally.
                    </p>

                    {/* SEARCH */}
                    <div className="mt-8 flex flex-col lg:flex-row gap-4">

                        <div
                            className="
                                flex-1
                                h-[62px]
                                rounded-2xl
                                bg-white/10
                                border
                                border-white/10
                                backdrop-blur-xl
                                flex
                                items-center
                                gap-3
                                px-5
                            "
                        >

                            <Search
                                size={18}
                                className="text-slate-300"
                            />

                            <input
                                type="text"
                                placeholder="Search hospital, ration shop, office..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="
                                    flex-1
                                    bg-transparent
                                    outline-none
                                    text-white
                                    placeholder:text-slate-400
                                "
                            />

                        </div>

                        <button
                            className="
                                h-[62px]
                                px-7
                                rounded-2xl
                                bg-white
                                text-slate-900
                                font-semibold
                                flex
                                items-center
                                gap-2
                                hover:scale-[1.02]
                                transition-all
                            "
                        >

                            <Navigation size={18} />

                            Nearby Organizations

                        </button>

                    </div>

                </div>

            </div>

            {/* CATEGORY SECTION */}
            <div>

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <p className="text-sm text-slate-500">
                            Queue Categories
                        </p>

                        <h2 className="mt-2 text-[32px] font-bold tracking-tight text-slate-900">
                            Select Organization Type
                        </h2>

                    </div>

                    <div
                        className="
                            h-[48px]
                            px-5
                            rounded-2xl
                            bg-white
                            border
                            border-slate-200
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-medium
                            text-slate-700
                        "
                    >

                        <Filter size={16} />

                        Smart Filter Enabled

                    </div>

                </div>

                <div className="mt-8 grid xl:grid-cols-4 sm:grid-cols-2 gap-5">

                    {categories.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategory(item)}
                            className={`
                                relative
                                overflow-hidden
                                rounded-[30px]
                                p-6
                                text-left
                                transition-all
                                duration-300
                                border
                                ${location.pathname === item.route
                                    ? "bg-slate-900 border-slate-900 text-white scale-[1.02]"
                                    : "bg-white border-slate-200 hover:translate-y-[-3px]"
                                }
                            `}
                        >

                            <div
                                className={`
                                    absolute
                                    top-[-30px]
                                    right-[-30px]
                                    w-[140px]
                                    h-[140px]
                                    rounded-full
                                    blur-3xl
                                    opacity-20
                                    bg-gradient-to-br
                                    ${item.gradient}
                                `}
                            />

                            <div className="relative z-10">

                                <div
                                    className={`
                                        w-14
                                        h-14
                                        rounded-2xl
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                        bg-gradient-to-br
                                        ${item.gradient}
                                    `}
                                >

                                    {item.icon}

                                </div>

                                <h3 className="mt-6 text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p
                                    className={`
                                        mt-2
                                        text-sm
                                        ${location.pathname === item.route
                                            ? "text-slate-300"
                                            : "text-slate-500"
                                        }
                                    `}
                                >
                                    Explore nearby available queues
                                </p>

                            </div>

                        </button>
                    ))}

                </div>

            </div>

            {/* ORGANIZATIONS */}
            <div
                className="
                    rounded-[36px]
                    bg-white
                    border
                    border-slate-200
                    p-6
                "
            >

                <div className="flex items-center justify-between flex-wrap gap-4">

                    <div>

                        <p className="text-sm text-slate-500">
                            Nearby Results
                        </p>

                        <h2 className="mt-2 text-[30px] font-bold tracking-tight text-slate-900">
                            Available Organizations
                        </h2>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">

                        <Sparkles size={16} />

                        AI Queue Suggestions Active

                    </div>

                </div>

                <div className="mt-8 grid lg:grid-cols-2 gap-5">

                    {filteredOrganizations.map((item, index) => (
                        <div
                            key={index}
                            className="
                                relative
                                overflow-hidden
                                rounded-[30px]
                                border
                                border-slate-200
                                bg-slate-50
                                p-6
                                hover:translate-y-[-3px]
                                transition-all
                                duration-300
                            "
                        >

                            <div
                                className={`
                                    absolute
                                    top-[-30px]
                                    right-[-30px]
                                    w-[160px]
                                    h-[160px]
                                    rounded-full
                                    blur-3xl
                                    opacity-20
                                    bg-gradient-to-br
                                    ${item.color}
                                `}
                            />

                            <div className="relative z-10">

                                <div className="flex items-start justify-between">

                                    <div>

                                        <div className="flex items-center gap-2">

                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />

                                            <span className="text-sm text-emerald-600 font-medium">
                                                {item.status}
                                            </span>

                                        </div>

                                        <h3 className="mt-4 text-2xl font-bold text-slate-900">
                                            {item.name}
                                        </h3>

                                        <p className="mt-1 text-slate-500">
                                            {item.type}
                                        </p>

                                    </div>

                                    <div
                                        className={`
                                            w-14
                                            h-14
                                            rounded-2xl
                                            text-white
                                            flex
                                            items-center
                                            justify-center
                                            bg-gradient-to-br
                                            ${item.color}
                                        `}
                                    >

                                        <Building2 size={24} />

                                    </div>

                                </div>

                                {/* INFO */}
                                <div className="mt-7 grid grid-cols-2 gap-4">

                                    <div className="rounded-2xl bg-white border border-slate-200 p-4">

                                        <div className="flex items-center gap-2 text-slate-500 text-sm">

                                            <Clock3 size={15} />

                                            Wait Time

                                        </div>

                                        <h4 className="mt-3 text-xl font-bold text-slate-900">
                                            {item.wait}
                                        </h4>

                                    </div>

                                    <div className="rounded-2xl bg-white border border-slate-200 p-4">

                                        <div className="flex items-center gap-2 text-slate-500 text-sm">

                                            <MapPin size={15} />

                                            Distance

                                        </div>

                                        <h4 className="mt-3 text-xl font-bold text-slate-900">
                                            {item.distance}
                                        </h4>

                                    </div>

                                </div>

                                {/* FOOTER */}
                                <div className="mt-6 flex items-center justify-between">

                                    <div className="flex items-center gap-5">

                                        <div className="flex items-center gap-2 text-amber-500">

                                            <Star size={16} fill="currentColor" />

                                            <span className="text-sm font-medium">
                                                {item.rating}
                                            </span>

                                        </div>

                                        <div className="flex items-center gap-2 text-emerald-600">

                                            <ShieldCheck size={16} />

                                            <span className="text-sm font-medium">
                                                {item.crowd}
                                            </span>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() =>
                                            navigate(`/user/organization/${encodeURIComponent(item.name)}`)
                                        }
                                        className="
        h-[50px]
        px-6
        rounded-2xl
        bg-slate-900
        text-white
        font-medium
        flex
        items-center
        gap-2
        hover:bg-black
        transition-all
    "
                                    >

                                        <Ticket size={17} />

                                        Book Token

                                        <ChevronRight size={16} />

                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default BookTokenPanel;