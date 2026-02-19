"use client";

import { useState } from "react";
import OpenPositions from "./OpenPositions";
import ApplicationForm from "./ApplicationForm";

const CareersView = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

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
