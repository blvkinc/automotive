import React from "react";

export default function BoostBadge({
  size = 18,
  showLabel = true,
}: {
  size?: number;
  showLabel?: boolean;
}) {
  return (
    <div className="flex items-center justify-end grow sm:justify-start sm:grow-0">
      {showLabel && (
        <span className="inline-block bg-automotive-red text-automotive-red-foreground px-2 py-0.5 rounded text-xs font-semibold">
          Boosted
        </span>
      )}
    </div>
  );
}
