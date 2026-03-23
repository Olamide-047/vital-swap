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
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
      <>
      <ScrollToTop />
      <Layout>
        <div id="Hero"><Hero /></div>
        <div id="Features"><Features /></div>
        <div id="Calculator"><Calculator /></div>
        <div id="CardsCarousel"><CardsCarousel /></div>
        <div id="FeeBreakdown"><FeeBreakdown /></div>
        <div id="FAQs"><FAQs /></div>
        <div id="Referrals"><Referrals /></div>
        <div id="SuccessStories"><SuccessStories /></div>
        <div id="TrustSection"><TrustSection /></div>
        <div id="ChatAssistant"><ChatAssistant /></div>
        <div id="CTASection"><CTASection /></div>
      </Layout>
    </>
  );
}