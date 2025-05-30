interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Container({ 
  children, 
  className = "", 
  size = 'lg' 
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  };

  return (
    <div className={`container mx-auto px-4 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}