import React from 'react';
import { Badge } from '../Badge/Badge';
import { CTAButton } from '../CTAButton/CTAButton';
import './HeroCampaign.css';

// Asset Constants from Figma
const ASSET_JOY_LOGO = "http://localhost:3845/assets/b889fc2de8e4f2caaf9493bd1c2541017fc950bc.png";
const ASSET_LISTEN_ICON = "http://localhost:3845/assets/9796a8b7c53d5ede6fe6f99b8586cd72cd57f488.svg";

export const HeroCampaign: React.FC = () => {
    return (
        <div className="hero-campaign">
            <div className="hero-campaign__content">
                <div className="hero-campaign__header">
                    <span className="hero-campaign__label">Campaign</span>
                    <h1 className="hero-campaign__title">The Magic of Joy Holiday Season</h1>
                </div>

                <div className="hero-campaign__details">
                    <div className="detail-group">
                        <span className="detail-label">Scope</span>
                        <div className="detail-value">Global</div>
                    </div>

                    <div className="detail-group">
                        <span className="detail-label">Activation dates</span>
                        <div className="detail-value">October-December 2025</div>
                    </div>

                    <div className="detail-group">
                        <span className="detail-label">Channels</span>
                        <div className="detail-value">Reserve & Collect (Web /APP) Emporium</div>
                    </div>

                    <div className="detail-group detail-group--scope">
                        <span className="detail-label">Scope</span>
                        <div className="scope-list">
                            <div className="scope-item">
                                <Badge color="Premium" size="sml" />
                                <span>Full visibility</span>
                            </div>
                            <div className="scope-item">
                                <Badge color="Executive" size="sml" />
                                <span>Medium visibility</span>
                            </div>
                            <div className="scope-item">
                                <Badge color="Standard" size="sml" />
                                <span>Regular visibility</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-campaign__media">
                <div className="media-card">
                    <div className="media-card__content">
                        <img src={ASSET_JOY_LOGO} alt="Joy Unlimited" className="media-card__logo" />

                        <div className="media-card__footer">
                            <div className="media-info">
                                <span>Audio</span>
                                <span>overview</span>
                            </div>
                            <CTAButton
                                text="Listen"
                                icon={ASSET_LISTEN_ICON}
                                color="dark"
                                size="sml"
                                onClick={() => console.log('Listen clicked')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
