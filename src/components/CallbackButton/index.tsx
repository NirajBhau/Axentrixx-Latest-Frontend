"use client";
import { useModal } from "@/context/ModalContext";

const CallbackButton = () => {
  const { openCallbackModal } = useModal();

  return (
    <button
      onClick={openCallbackModal}
      className="fixed bottom-8 left-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition duration-300 ease-in-out hover:bg-primary/90 hover:scale-110 animate-heartbeat"
      aria-label="Request Callback"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.4019C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7428 21.5857 13.787 20.5342 11.19 18.85C8.77382 17.2436 6.72533 15.1951 5.11997 12.78C3.435 10.1824 2.3835 7.22591 2.04997 4.14999C2.02476 3.87271 2.05792 3.59329 2.14714 3.32955C2.23636 3.06581 2.37978 2.82363 2.56804 2.61839C2.75631 2.41315 2.98527 2.24948 3.24043 2.13788C3.49559 2.02627 3.77123 1.96916 4.04997 1.96999H7.04997C7.54593 1.96571 8.02641 2.14757 8.39955 2.48065C8.77269 2.81373 8.94056 3.29828 8.97997 3.79999C9.05342 4.75713 9.22727 5.70324 9.49997 6.62999C9.60833 6.92429 9.63189 7.242 9.56778 7.54803C9.50367 7.85406 9.35471 8.13524 9.13997 8.35999L7.38997 10.11C9.35623 13.57 12.1997 16.4134 15.66 18.38L17.41 16.63C17.6347 16.4153 17.9159 16.2664 18.2219 16.2023C18.5279 16.1382 18.8456 16.1617 19.14 16.27C20.0667 16.5427 21.0128 16.7166 21.97 16.79C22.4727 16.8296 22.9579 16.9984 23.2906 17.3719C23.6234 17.7454 23.8043 18.2263 23.8 18.72V19.42L22 16.92Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default CallbackButton;
