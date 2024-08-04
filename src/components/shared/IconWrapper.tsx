import React from 'react';

interface IconWrapperProps {
  icon?: React.ComponentType;
  iconClasses?: string;
  className?: string;
  children?: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, iconClasses, className, children }) => {
  const IconComponent = icon as React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;

  return (
    <div className={`flex h-10 w-10 items-center justify-center ${className && className}`}>
      {icon ? <IconComponent className={`text-2xl ${iconClasses}`} /> : null}
      {children}
    </div>
  );
};

export default IconWrapper;
