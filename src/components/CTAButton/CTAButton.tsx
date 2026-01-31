import React from 'react';
import './CTAButton.css';

export interface CTAButtonProps {
    text: string;
    icon?: string; // URL to the icon
    color?: 'light' | 'dark';
    size?: 'sml' | 'med' | 'lrg';
    onClick?: () => void;
    className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    text,
    icon,
    color = 'light',
    size = 'sml',
    onClick,
    className = '',
}) => {
    return (
        <button
            className={`cta-btn cta-btn--${color} cta-btn--${size} ${className}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="" className="cta-btn__icon" />}
            <span className="cta-btn__text">{text}</span>
        </button>
    );
};
