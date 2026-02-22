import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Carousel.css';

export interface CarouselSlide {
    title: string;
    subtitle?: string;
    description?: string;
    gradient: string;
    textColor?: string;
}

export interface CarouselProps {
    heading?: string;
    subheading?: string;
    slides?: CarouselSlide[];
    className?: string;
}

const defaultSlides: CarouselSlide[] = [
    {
        title: '48MP Fusion camera',
        subtitle: 'Our best iPhone camera ever.',
        description: 'Stunning detail and color in every shot.',
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
        textColor: '#ffffff',
    },
    {
        title: '48MP Ultra Wide',
        subtitle: 'See the bigger picture.',
        description: 'Macro photography with incredible detail.',
        gradient: 'linear-gradient(135deg, #0a2e1a 0%, #1a4a2e 40%, #2d6a4f 100%)',
        textColor: '#ffffff',
    },
    {
        title: '48MP Telephoto',
        subtitle: '10x optical zoom.',
        description: 'Get closer than ever before.',
        gradient: 'linear-gradient(135deg, #2e1a0a 0%, #4a2e1a 40%, #6a4f2d 100%)',
        textColor: '#ffffff',
    },
    {
        title: 'Photographic Styles',
        subtitle: 'Make it yours.',
        description: 'Real-time tone and color adjustments.',
        gradient: 'linear-gradient(135deg, #2e0a2e 0%, #4a1a4a 40%, #6a2d6a 100%)',
        textColor: '#ffffff',
    },
    {
        title: 'ProRes & Log video',
        subtitle: 'Studio-quality video.',
        description: 'Professional workflows on iPhone.',
        gradient: 'linear-gradient(135deg, #0a1a2e 0%, #1a2e4a 40%, #2d4a6a 100%)',
        textColor: '#ffffff',
    },
];

export const Carousel: React.FC<CarouselProps> = ({
    heading = 'Camera',
    subheading = 'A camera system that redefines what a phone can capture.',
    slides = defaultSlides,
    className = '',
}) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const scrollStartX = useRef(0);

    const updateActiveIndex = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        const scrollLeft = track.scrollLeft;
        const cardWidth = track.querySelector('.carousel__slide')?.clientWidth ?? 0;
        const gap = 20;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(index, slides.length - 1));
    }, [slides.length]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        track.addEventListener('scroll', updateActiveIndex, { passive: true });
        return () => track.removeEventListener('scroll', updateActiveIndex);
    }, [updateActiveIndex]);

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        if (!track) return;

        const card = track.children[index] as HTMLElement;
        if (!card) return;

        track.scrollTo({
            left: card.offsetLeft - track.offsetLeft,
            behavior: 'smooth',
        });
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            scrollToIndex(activeIndex - 1);
        }
    };

    const handleNext = () => {
        if (activeIndex < slides.length - 1) {
            scrollToIndex(activeIndex + 1);
        }
    };

    // Mouse drag support
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStartX.current = e.clientX;
        scrollStartX.current = trackRef.current?.scrollLeft ?? 0;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !trackRef.current) return;
        e.preventDefault();
        const dx = e.clientX - dragStartX.current;
        trackRef.current.scrollLeft = scrollStartX.current - dx;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className={`carousel ${className}`}>
            <div className="carousel__header">
                <h2 className="carousel__heading">{heading}</h2>
                {subheading && (
                    <p className="carousel__subheading">{subheading}</p>
                )}
            </div>

            <div className="carousel__viewport">
                <button
                    className={`carousel__arrow carousel__arrow--prev ${activeIndex === 0 ? 'carousel__arrow--hidden' : ''}`}
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    disabled={activeIndex === 0}
                >
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                        <path d="M12 2L2 12L12 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <div
                    className={`carousel__track ${isDragging ? 'carousel__track--dragging' : ''}`}
                    ref={trackRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="carousel__slide"
                            style={{ background: slide.gradient }}
                        >
                            <div className="carousel__slide-content">
                                <div className="carousel__slide-text">
                                    <h3
                                        className="carousel__slide-title"
                                        style={{ color: slide.textColor }}
                                    >
                                        {slide.title}
                                    </h3>
                                    {slide.subtitle && (
                                        <p
                                            className="carousel__slide-subtitle"
                                            style={{ color: slide.textColor }}
                                        >
                                            {slide.subtitle}
                                        </p>
                                    )}
                                    {slide.description && (
                                        <p
                                            className="carousel__slide-description"
                                            style={{ color: slide.textColor ? `${slide.textColor}cc` : undefined }}
                                        >
                                            {slide.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className={`carousel__arrow carousel__arrow--next ${activeIndex === slides.length - 1 ? 'carousel__arrow--hidden' : ''}`}
                    onClick={handleNext}
                    aria-label="Next slide"
                    disabled={activeIndex === slides.length - 1}
                >
                    <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                        <path d="M2 2L12 12L2 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            <div className="carousel__dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel__dot ${index === activeIndex ? 'carousel__dot--active' : ''}`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
