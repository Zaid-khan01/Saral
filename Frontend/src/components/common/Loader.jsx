import React from "react";

const SkeletonCard = () => {
    return (
        <div
            className="
                animate-pulse
                rounded-[28px]
                bg-white
                border-2
                border-slate-700
                p-4
                shadow-md
            "
        >

            {/* IMAGE */}
            <div className="h-52 bg-slate-300 rounded-[22px] mb-5" />

            {/* TITLE */}
            <div className="h-5 bg-slate-300 rounded-full w-3/4 mb-3" />

            {/* SUBTITLE */}
            <div className="h-4 bg-slate-200 rounded-full w-1/2 mb-6" />

            {/* CONTENT */}
            <div className="space-y-3">

                <div className="h-3 bg-slate-200 rounded-full w-full" />

                <div className="h-3 bg-slate-200 rounded-full w-[90%]" />

                <div className="h-3 bg-slate-200 rounded-full w-[70%]" />

            </div>

            {/* BUTTON */}
            <div className="mt-7 h-[46px] bg-slate-300 rounded-2xl" />

        </div>
    );
};

const Loader = () => {

    return (
        <div className="min-h-screen bg-[#f6f8fc] p-6 lg:p-10">

            {/* TOP SMALL SKELETON */}
            <div className="animate-pulse mb-10">

                <div className="h-8 w-52 rounded-full bg-slate-300 mb-4" />

                <div className="h-4 w-80 rounded-full bg-slate-200" />

            </div>

            {/* SKELETON GRID */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {Array(6)
                    .fill(0)
                    .map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}

            </div>

        </div>
    );
};

export default Loader;