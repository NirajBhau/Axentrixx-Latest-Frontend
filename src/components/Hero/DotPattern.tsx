const DotPattern = () => {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dotPattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" className="fill-primary" />
        </pattern>
      </defs>
      <rect width="130" height="130" fill="url(#dotPattern)" />
    </svg>
  );
};

export default DotPattern;
