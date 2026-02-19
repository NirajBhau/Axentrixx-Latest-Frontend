import React from "react";

interface SuccessMessageProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onClose?: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title = "Awesome!",
  description = "We've received your submission and will get back to you shortly.",
  buttonText = "Got it",
  onClose,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center py-16 px-10 bg-gradient-to-br from-white via-primary/5 to-white dark:from-dark-2 dark:via-primary/10 dark:to-dark-2 rounded-2xl overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-16 left-32 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Premium Success Icon with Multiple Layers */}
      <div className="relative mb-10 z-10">
        {/* Outer Glow Ring - Animated */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-primary/30 via-primary/20 to-transparent animate-pulse"></div>
        </div>

        {/* Middle Ring - Rotating */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary/40 animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        {/* Main Icon Container - Glass Morphism */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-full shadow-2xl"></div>

          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>

          {/* Checkmark Icon - Animated */}
          <svg
            className="relative z-10"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animate-[draw_0.6s_ease-out_forwards]"
              d="M16 28L24 36L40 20"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: '60',
                strokeDashoffset: '60',
                animation: 'draw 0.6s ease-out 0.3s forwards'
              }}
            />
          </svg>

          {/* Shine Effect */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Title with Gradient Text */}
      <h2 className="relative mb-5 text-4xl font-extrabold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent dark:from-primary dark:via-primary dark:to-primary/90 z-10">
        {title}
      </h2>

      {/* Decorative Line */}
      <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mb-6"></div>

      {/* Description */}
      <p className="relative mb-10 text-base text-body-color dark:text-gray-300 max-w-sm leading-relaxed z-10">
        {description}
      </p>

      {/* Premium Action Button */}
      <button
        onClick={onClose}
        className="relative group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-10 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5 z-10 overflow-hidden"
      >
        {/* Button Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

        <span className="relative">{buttonText}</span>
        <svg
          className="relative transition-transform group-hover:translate-x-1"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 15L12.5 10L7.5 5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessMessage;
