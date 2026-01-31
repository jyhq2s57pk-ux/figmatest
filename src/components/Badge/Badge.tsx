import React from 'react';
import './Badge.css';

export interface BadgeProps {
  className?: string;
  size?: 'sml' | 'med';
  color?: 'Standard' | 'Premium' | 'New' | 'Executive';
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  className = '', 
  size = 'sml', 
  color = 'Standard',
  children 
}) => {
  const content = children || color;
  
  return (
    <div className={`badge badge--${size} badge--${color} ${className}`}>
      <span className="badge__content">
        {content}
      </span>
    </div>
  );
};
