import React, { useState } from "react";
import PortfolioCard from "./ProjectCards";
import NavigationTabs from "./Navigation";
import ContactMe from "./Contact";
import AboutMe from "./About";
import MyResume from "./Resume";
import Header from "./Header";
import Footer from "./Footer";

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState("AboutMe");

  const renderTab = () => {
    if (currentTab === "AboutMe") {
      return <AboutMe />;
    }
    if (currentTab === "Portfolio") {
      return <PortfolioCard />;
    }
    if (currentTab === "Contact") {
      return <ContactMe />;
    }
    return <MyResume />;
  };

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div>
      <Header />
      {}
      <NavigationTabs
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      {}
      {renderTab()}
      <Footer />
    </div>
  );
}
