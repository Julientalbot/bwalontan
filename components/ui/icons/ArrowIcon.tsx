interface ArrowIconProps {
  className?: string;
  direction?: 'right' | 'left' | 'up' | 'down';
}

export default function ArrowIcon({ 
  className = "w-5 h-5", 
  direction = 'right' 
}: ArrowIconProps) {
  const rotations = {
    right: 'rotate-0',
    down: 'rotate-90',
    left: 'rotate-180',
    up: 'rotate-270'
  };

  return (
    <svg
      className={`${className} ${rotations[direction]}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}