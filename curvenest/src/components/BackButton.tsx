import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Try to go back in history, fallback to /shop if no history
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/shop");
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="inline-flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Go back to previous page"
    >
      <ArrowLeft size={20} />
      <span className="hidden sm:inline">Back</span>
    </button>
  );
};

export default BackButton;
