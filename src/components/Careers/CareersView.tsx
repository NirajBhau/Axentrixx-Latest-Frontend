"use client";

import { useState, useEffect } from "react";
import OpenPositions from "./OpenPositions";
import ApplicationForm from "./ApplicationForm";

const CareersView = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  // Reset state if user clicks a link to /careers (e.g., Breadcrumb or Footer) while already on the page
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      // Check if it's a link to the careers page
      if (link && link.getAttribute("href") === "/careers") {
        setShowForm(false);
        setSelectedPosition("");
      }
    };
    
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleApply = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setShowForm(true);
    // Smooth scroll to form section
    setTimeout(() => {
      const formElement = document.getElementById("application-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleBackToPositions = () => {
    setShowForm(false);
    setSelectedPosition("");
  };

  return (
    <>
      {!showForm ? (
        <OpenPositions onApply={handleApply} />
      ) : (
        <ApplicationForm
          selectedPosition={selectedPosition}
          onBack={handleBackToPositions}
        />
      )}
    </>
  );
};

export default CareersView;
