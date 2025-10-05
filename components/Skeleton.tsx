import React from "react";

interface SkeletonProps {
  count?: number; 
}

const Skeleton: React.FC<SkeletonProps> = ({ count = 15 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="paper-card skeleton-card">
          <div className="paper-left">
            <div className="skeleton-image" />
            <div className="skeleton-text impact-factor" />
          </div>
          <div className="paper-right">
            <div className="skeleton-text skeleton-title" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-text" />
            <div className="skeleton-button" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
