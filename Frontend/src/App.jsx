import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/common/Loader";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import HeroSection from "./features/landing/sections/HeroSection";
import ProblemSection from "./features/landing/sections/ProblemSection";
import HowItWorksSection from "./features/landing/sections/HowItWorksSection";
import UseCasesSection from "./features/landing/sections/UseCasesSection";
import LiveDemoSection from "./features/landing/sections/LiveDemoSection";
import FeaturesSection from "./features/landing/sections/FeaturesSection";
import BenefitsSection from "./features/landing/sections/BenefitsSection";
import TestimonialsSection from "./features/landing/sections/TestimonialsSection";
import CTASection from "./features/landing/sections/CTASection";
import FAQSection from "./features/landing/sections/FAQSection";

import OrganizationLogin from "./features/organization/pages/OrganizationLogin";
import OrganizationRegister from "./features/organization/pages/OrganizationRegister";
import OrganizationDashboard from "./features/organization/pages/OrganizationDashboard";

import UserLogin from "./features/auth/pages/UserLogin";
import GoogleSuccess from "./features/auth/pages/GoogleSuccess";
import UserSignup from "./features/auth/pages/UserSignup";

import UserDashboard from "./features/user/pages/UserDashboard";

import OrganizationDetails from "./features/user/pages/OrganizationDetails";
import TokenSuccess from "./features/user/pages/TokenSuccess";

import MainLayout from "./layouts/MainLayout";

function LandingPage() {
    return (
        <MainLayout>

            <Navbar />

            <HeroSection />
            <ProblemSection />
            <HowItWorksSection />
            <UseCasesSection />
            <LiveDemoSection />
            <FeaturesSection />
            <BenefitsSection />
            <TestimonialsSection />
            <CTASection />
            <FAQSection />

            <Footer />

        </MainLayout>
    );
}

function AppRoutes() {

    const location = useLocation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Dashboard pages loader disable
        if (
            location.pathname.includes("/dashboard")
        ) {
            setLoading(false);
            return;
        }

        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);

    }, [location.pathname]);

    if (loading) {
        return <Loader />;
    }

    return (
        <Routes>

            {/* Landing Page */}
            <Route
                path="/"
                element={<LandingPage />}
            />

            {/* Organization Login */}
            <Route
                path="/organization/login"
                element={<OrganizationLogin />}
            />

            {/* Organization Register */}
            <Route
                path="/organization/register"
                element={<OrganizationRegister />}
            />

            {/* Organization Dashboard */}
            <Route
                path="/organization/dashboard"
                element={<OrganizationDashboard />}
            />

            <Route
                path="/user/organization/:name"
                element={<OrganizationDetails />}
            />

            <Route
                path="/token-success"
                element={<TokenSuccess />}
            />
            {/* User Login */}
            <Route
                path="/user/login"
                element={<UserLogin />}
            />

            <Route
                path="/google-success"
                element={<GoogleSuccess />}
            />

            {/* User Signup */}
            <Route
                path="/user/signup"
                element={<UserSignup />}
            />

            {/* User Dashboard */}
            <Route
                path="/user/dashboard"
                element={<UserDashboard />}
            />

        </Routes>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;