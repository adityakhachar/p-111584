import React from "react";
import { Header } from "@/components/homepage/Header";
import { HeroSection } from "@/components/homepage/HeroSection";
import { ClientsSection } from "@/components/homepage/ClientsSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { ServicesSection } from "@/components/homepage/ServicesSection";
import { CyberSafetySection } from "@/components/homepage/CyberSafetySection";
import { TestimonialsSection } from "@/components/homepage/TestimonialsSection";
import { ArticlesSection } from "@/components/homepage/ArticlesSection";
import { ContactSection } from "@/components/homepage/ContactSection";
import { Footer } from "@/components/homepage/Footer";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <CyberSafetySection />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/12cd52c41694116fad86cade1275c775a11b454c?placeholderIfAbsent=true"
        className="aspect-[1.93] object-contain w-full mt-[120px] max-md:max-w-full max-md:mt-10"
        alt="Divider"
      />
      <TestimonialsSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
