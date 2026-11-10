import React from 'react';

interface BrandPatternProps {
  color?: string;
  className?: string;
  rows?: number;
  cols?: number;
}

export const BrandPattern: React.FC<BrandPatternProps> = ({
  color = '#223189',
  className = '',
  rows = 3,
  cols = 5,
}) => {
  return (
    <div className={`overflow-hidden select-none ${className}`}>
      <div className="flex flex-col gap-5 py-4">
        {Array.from({ length: rows }).map((_, rIndex) => (
          <div
            key={rIndex}
            className={`flex items-center justify-center gap-6 whitespace-nowrap ${
              rIndex % 2 === 1 ? 'translate-x-6' : ''
            }`}
          >
            {Array.from({ length: cols }).map((_, cIndex) => {
              const isPatternAlt = (rIndex + cIndex) % 2 === 1;
              return (
                <div key={cIndex} className="flex items-center gap-3 opacity-80">
                  {isPatternAlt ? (
                    <>
                      {/* Infinity */}
                      <svg viewBox="0 0 40 20" width="32" height="16" fill="none">
                        <path
                          d="M 20 10 C 15 3, 5 4, 5 10 C 5 16, 15 17, 20 10 C 25 17, 35 16, 35 10 C 35 4, 25 3, 20 10 Z"
                          stroke={color}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {/* Circle */}
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                        <circle cx="10" cy="10" r="5" stroke={color} strokeWidth="2.5" />
                      </svg>
                      {/* Infinity */}
                      <svg viewBox="0 0 40 20" width="32" height="16" fill="none">
                        <path
                          d="M 20 10 C 15 3, 5 4, 5 10 C 5 16, 15 17, 20 10 C 25 17, 35 16, 35 10 C 35 4, 25 3, 20 10 Z"
                          stroke={color}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      {/* Circle */}
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                        <circle cx="10" cy="10" r="5" stroke={color} strokeWidth="2.5" />
                      </svg>
                      {/* Infinity */}
                      <svg viewBox="0 0 40 20" width="32" height="16" fill="none">
                        <path
                          d="M 20 10 C 15 3, 5 4, 5 10 C 5 16, 15 17, 20 10 C 25 17, 35 16, 35 10 C 35 4, 25 3, 20 10 Z"
                          stroke={color}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {/* Circle */}
                      <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                        <circle cx="10" cy="10" r="5" stroke={color} strokeWidth="2.5" />
                      </svg>
                    </>
                  )}
                  <span className="text-xs opacity-40 select-none" style={{ color }}>
                    ·
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
