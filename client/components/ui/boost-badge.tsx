import React from "react";

export default function BoostBadge({
  size = 18,
  showLabel = true,
}: {
  size?: number;
  showLabel?: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="flex items-center justify-center w-9 h-9 rounded-full bg-automotive-red text-automotive-red-foreground shadow-md"
        aria-hidden
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-0.5 -mt-0.5"
        >
          <path
            d="M2 22s4-1 6-3 3-6 3-6 3 1 6 4 3 6 3 6-4 0-6-1-4-3-5-4c-1-1-4-2-7-1z"
            fill="rgba(255,255,255,0.06)"
          />
          <path
            d="M14.5 5.5l4 4"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3l3 3"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {showLabel && (
        <span className="inline-block bg-automotive-red text-automotive-red-foreground px-2 py-0.5 rounded text-xs font-semibold">
          Boosted
        </span>
      )}
    </div>
  );
}
