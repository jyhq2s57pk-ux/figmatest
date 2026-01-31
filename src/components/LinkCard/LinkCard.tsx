import React from 'react';
import './LinkCard.css';

// Using the vector from Figma as a constant for now
const CHEVRON_ICON = "http://localhost:3845/assets/fd7ef58b9aafbe192ff04e6230684d1adb523fb7.svg";

export interface LinkCardProps {
    title: string;
    description?: string;
    variant?: 'desktop' | 'mobile'; // 'desktop' is the wide/large one, 'mobile' is the small stackable one (?) - aligning with Figma props
    // Based on Figma: Property 1 = desktop (large), mobile (small)
    className?: string;
    onClick?: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({
    title,
    description,
    variant = 'desktop',
    className = '',
    onClick,
}) => {
    return (
        <div
            className={`link-card link-card--${variant} ${className}`}
            onClick={onClick}
        >
            <div className="link-card__bg-gradient" aria-hidden="true" />

            <div className="link-card__content">
                <div className="link-card__text-group">
                    <h3 className="link-card__title">{title}</h3>
                    {description && variant === 'desktop' && (
                        <p className="link-card__description">{description}</p>
                    )}
                </div>
            </div>

            <div className="link-card__action">
                <div className="chevron-container">
                    <img src={CHEVRON_ICON} alt="" />
                </div>
            </div>
        </div>
    );
};
