import React   from 'react'
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Calculator from "./sections/Calculator";
import CardsCarousel from "./sections/CardsCarousel";
import FeeBreakdown from "./sections/FeeBreakdown";
import FAQs from "./sections/FAQs";
import Referrals from "./sections/Referrals";
import SuccessStories from "./sections/SuccessStories";
import ChatAssistant from "./sections/ChatAssistant";
import CTASection from "./sections/CTASection";
import TrustSection from "./sections/TrustSection";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Calculator />
      <CardsCarousel />
      <FeeBreakdown />
      <FAQs />
      <Referrals />
      <SuccessStories />
      <TrustSection />
      <ChatAssistant />
      <CTASection />
    </Layout>
  );
}