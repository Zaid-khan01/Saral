import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../services/api";
import {
    Building2,
    Mail,
    Lock,
    Phone,
    MapPin,
    User,
    ArrowRight,
} from "lucide-react";

import logo from "../../../assets/logos/Saral-logo.png";

const OrganizationRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        organizationName: "",
        organizationType: "",
        ownerName: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        password: "",
        confirmPassword: "",
        services: [""],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleServiceChange = (index, value) => {

        const updatedServices = [...formData.services];

        updatedServices[index] = value;

        setFormData({
            ...formData,
            services: updatedServices,
        });
    };

    const addServiceField = () => {

        setFormData({
            ...formData,
            services: [...formData.services, ""],
        });
    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        // PASSWORD CHECK
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            // REMOVE confirmPassword
            const {
                confirmPassword,
                ...organizationData
            } = formData;

            const response = await API.post(
                "/organizations/register",
                organizationData
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

            // OPTIONAL UI DATA
            const existingOrganizations =
                JSON.parse(
                    localStorage.getItem("organizations")
                ) || [];

            let color = "from-cyan-500 to-blue-600";

            if (
                formData.organizationType ===
                "Government Office"
            ) {
                color = "from-violet-500 to-indigo-600";
            }

            else if (
                formData.organizationType ===
                "Ration Shop"
            ) {
                color = "from-emerald-500 to-green-600";
            }

            else if (
                formData.organizationType ===
                "Service Center"
            ) {
                color = "from-amber-500 to-orange-500";
            }

            const newOrganization = {
                name: formData.organizationName,
                type: formData.organizationType,
                distance: "1.5 km",
                wait: "10 mins",
                rating: "4.7",
                status: "Tokens Available",
                crowd: "Medium",
                address: formData.address,
                color: color,

                services: formData.services,
            };

            existingOrganizations.push(newOrganization);

            localStorage.setItem(
                "organizations",
                JSON.stringify(existingOrganizations)
            );

            alert("Organization Registered Successfully");

            navigate("/organization/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );
        }
    };
    return (
        <div
            className="
        min-h-screen
        bg-[#fffdf7]
        flex
        items-center
        justify-center
        px-5
        py-10
        relative
        overflow-hidden
      "
        >

            {/* Background Glow */}
            <div
                className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[320px]
          h-[320px]
          bg-amber-100
          opacity-20
          blur-3xl
          rounded-full
        "
            />

            <div
                className="
          absolute
          bottom-[-120px]
          right-[-120px]
          w-[320px]
          h-[320px]
          bg-yellow-100
          opacity-20
          blur-3xl
          rounded-full
        "
            />

            {/* Card */}
            <div
                className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[32px]
          border
          border-white/70
          bg-white/80
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          p-8
          sm:p-10
        "
            >

                {/* Logo */}
                <Link
                    to="/"
                    className="
            flex
            items-center
            justify-center
            gap-3
          "
                >
                    <img
                        src={logo}
                        alt="Saral Logo"
                        className="w-11 h-11 object-contain"
                    />

                    <h1
                        className="
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
            "
                    >
                        Saral
                    </h1>
                </Link>

                {/* Heading */}
                <div className="text-center mt-8">

                    <h2
                        className="
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
            "
                    >
                        Register Your Organization
                    </h2>

                    <p
                        className="
              mt-3
              text-slate-600
              leading-7
            "
                    >
                        Create your organization dashboard and start
                        managing smart digital queues with Saral.
                    </p>

                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-5"
                >

                    {/* Organization Name */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Organization Name
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

                            <Building2
                                size={20}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                name="organizationName"
                                placeholder="Enter organization name"
                                value={formData.organizationName}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    {/* Organization Type */}
                    <div>

                        <label
                            className="
            text-sm
            font-medium
            text-slate-700
        "
                        >
                            Organization Type
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

                            <Building2
                                size={20}
                                className="text-slate-400"
                            />

                            <select
                                name="organizationType"
                                value={formData.organizationType}
                                onChange={handleChange}
                                className="
                flex-1
                bg-transparent
                outline-none
                text-slate-800
            "
                            >

                                <option value="">
                                    Select organization type
                                </option>

                                <option value="Hospital">
                                    Hospital
                                </option>

                                <option value="Government Office">
                                    Government Office
                                </option>

                                <option value="Ration Shop">
                                    Ration Shop
                                </option>

                                <option value="Service Center">
                                    Service Center
                                </option>

                            </select>

                        </div>

                    </div>
                    {/* Owner Name */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Owner / Admin Name
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

                            <User
                                size={20}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                name="ownerName"
                                placeholder="Enter admin name"
                                value={formData.ownerName}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    {/* Email */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Email Address
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
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    {/* Phone */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Phone Number
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

                            <Phone
                                size={20}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    {/* Address */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Organization Address
                        </label>

                        <div
                            className="
                mt-2
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-4
              "
                        >

                            <MapPin
                                size={20}
                                className="text-slate-400 mt-1"
                            />

                            <textarea
                                rows={3}
                                name="address"
                                placeholder="Enter full organization address"
                                value={formData.address}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  resize-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    {/* Pincode */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Pincode
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

                            <MapPin
                                size={20}
                                className="text-slate-400"
                            />

                            <input
                                type="text"
                                name="pincode"
                                placeholder="Enter pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
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
                                placeholder="Create password"
                                value={formData.password}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div>

                        <label
                            className="
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Confirm Password
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
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-slate-800
                  placeholder:text-slate-400
                "
                            />

                        </div>

                    </div>

                    <div>

                        <label
                            className="
            text-sm
            font-medium
            text-slate-700
        "
                        >
                            Services Provided
                        </label>

                        <div className="mt-3 flex flex-col gap-3">

                            {formData.services.map((service, index) => (

                                <input
                                    key={index}
                                    type="text"
                                    placeholder={`Service ${index + 1}`}
                                    value={service}
                                    onChange={(e) =>
                                        handleServiceChange(
                                            index,
                                            e.target.value
                                        )
                                    }
                                    className="
                    w-full
                    h-[58px]
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    outline-none
                    text-slate-800
                "
                                />

                            ))}

                        </div>

                        <button
                            type="button"
                            onClick={addServiceField}
                            className="
            mt-3
            text-sm
            font-medium
            text-indigo-600
        "
                        >
                            + Add Another Service
                        </button>

                    </div>
                    {/* Submit */}
                    <button
                        type="submit"
                        className="
              mt-4
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
              hover:bg-black
              transition-all
              duration-200
            "
                    >

                        Register Organization

                        <ArrowRight size={18} />

                    </button>

                </form>

                {/* Footer */}
                <p
                    className="
            mt-8
            text-center
            text-sm
            text-slate-500
          "
                >
                    Already registered?

                    <Link
                        to="/organization/login"
                        className="
              ml-2
              font-medium
              text-slate-900
              hover:underline
            "
                    >
                        Login Here
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default OrganizationRegister;