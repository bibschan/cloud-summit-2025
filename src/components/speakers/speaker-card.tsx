'use client'
import React from 'react';
import Image from 'next/image';
import Link from "next/link";

interface Speaker {
    id: number;
    name: string;
    title: string;
    company: string;
    bio?: string;
    talk_title?: string;
    talk_summary?: string;
    image?: string;
}

interface SpeakersCardProps {
    speaker: Speaker;
    variant: 'keynote' | 'list' | 'selected' | 'alternating' | 'focused';
    position?: 'left' | 'right';
    className?: string;
    onSpeakerSelect?: (speaker: Speaker) => void; // New callback prop
}

const SpeakersCard: React.FC<SpeakersCardProps> = ({
    speaker,
    variant,
    position = 'left',
    className = '',
    onSpeakerSelect
}) => {
    const { name, title, company, talk_title, image } = speaker;

    const cardStyles = {
        keynote: "flex flex-col items-center text-center max-w-lg mx-auto",
        list: "flex flex-col items-center text-center max-w-xs",
        selected: "flex flex-col items-center text-center max-w-xs",
        focused: "flex flex-col items-center text-center max-w-xs",
        alternating: "flex items-center justify-center w-full"
    };

    const imageSizes = {
        keynote: 400,
        list: 200,
        selected: 200,
        focused: 200,
        alternating: 200
    };

    const imageContainerStyles = {
        keynote: `border-secondary-600 border-4 `,
        list: "grayscale border-white border-4",
        selected: " border-secondary-600 border-4",
        focused: " border-secondary-600 border-4",
        alternating: "bg-blue-400 p-1"
    };

    const talkTitleStyles = {
        keynote: "text-xl md:text-6xl font-bold ",
        list: "text-lg font-bold my-3 text-white ",
        selected: "text-lg font-bold my-3 text-white",
        focused: "text-lg font-bold my-3 text-white",
        alternating: "text-sm text-gray-200 mt-1 leading-snug line-clamp-2"
    };

    const nameStyles = {
        keynote: "text-lg md:text-xl font-semibold mt-3 text-white",
        list: "font-body text-lg font-medium mt-2 text-white",
        selected: "font-body text-lg font-medium mt-2 text-white",
        focused: "font-body text-lg font-medium mt-2 text-white",
        alternating: "font-body text-xl font-bold text-white"
    };

    const titleStyles = {
        keynote: "",
        list: "text-lg ",
        selected: "text-lg",
        focused: "text-lg",
        alternating: "text-sm"
    };

    // Handle click based on variant
    const handleCardClick = () => {
        if ((variant === 'list' || variant === 'selected') && onSpeakerSelect) {
            onSpeakerSelect(speaker);
        }
    };

    const Arrow = ({ position }: { position: 'left' | 'right' }) => {
        return position === 'left' ? (
            <Image
                src="/speakers/arrow.svg"
                width={60}
                height={30}
                alt="Arrow pointing at image"
                className="text-blue-400 fill-current rotate-180"
            />
        ) : (
            <Image
                src="/speakers/arrow.svg"
                width={60}
                height={30}
                alt="Arrow pointing at image"
                className="text-blue-400 fill-current scale-y-[-1]"
            />
        );
    };

    const renderSpeakerImage = (size: number, containerStyle: string) => (
        <div className={`h-full relative rounded-full overflow-hidden ${containerStyle}`} style={{ width: size, height: size }}>
            <div className="aspect-square relative  overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={`${name}'s photo`}
                        width={size}
                        height={size}
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <Image
                        src='/speakers/default-avatar.svg'
                        alt={`${name}'s photo`}
                        width={size}
                        height={size}
                        className="w-full h-full object-cover object-top"
                    />
                )}
            </div>
        </div>
    );

    const getContent = () => {
        switch (variant) {
            case 'keynote':
                return (
                    <>
                        <div className="text-secondary-600 doto-text uppercase text-2xl font-bold mt-4 mb-1">Notable Speaker</div>
                        {talk_title && <h2 className={talkTitleStyles[variant]}>{talk_title}</h2>}
                        <p className={nameStyles[variant]}>{name}, {title}, {company}</p>
                    </>
                );
            case 'list':
            case 'selected':
                return (
                    <>
                        {talk_title && <div className={talkTitleStyles[variant]}>{talk_title}</div>}
                        <div>
                            <h3 className={nameStyles[variant]}>{name}</h3>
                            <p className={titleStyles[variant]}>{title}, {company}</p>
                        </div>
                    </>
                );
            case 'focused':
                return (
                    <>
                        {talk_title && <div className={talkTitleStyles[variant]}>{talk_title}</div>}
                        <div>
                            <h3 className={nameStyles[variant]}>{name}</h3>
                            <p className={titleStyles[variant]}>{title}, {company}</p>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    if (variant === 'alternating') {
        const alternatingContent = (
            <>
                <h3 className={nameStyles[variant]}>{name}</h3>
                {talk_title && <div className={talkTitleStyles[variant]}>{talk_title || title}</div>}
            </>
        );

        const speakerImage = (
            <div className="relative rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 border-4 border-blue-400">
                {image ? (
                    <img
                        src={image}
                        alt={`${name}`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-lg">{name.charAt(0)}</span>
                    </div>
                )}
            </div>
        );

        return (
            <div className='flex items-center justify-center w-full h-full p-4 mx-auto'>
                {position === 'left' ? (
                    <Link href='/speakers' className="flex items-center justify-end gap-4">
                        {speakerImage}
                        <div className=''>
                            <Arrow position="left" />
                            <div className="flex flex-col items-start justify-center max-w-sm text-left mx-4 md:mx-10">
                                {alternatingContent}
                            </div>
                        </div>
                    </Link>
                ) : (
                    <Link href='/speakers' className="flex items-center justify-end gap-4">
                        <div className='flex flex-col items-end justify-end'>
                            <Arrow position="right" />
                            <div className="flex flex-col items-end justify-center max-w-sm text-right mx-4 md:mx-10">
                                {alternatingContent}
                            </div>
                        </div>
                        {speakerImage}
                    </Link>
                )}
            </div>
        );
    }

    const ClickableWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        if (variant === 'keynote') {
            return <Link href="/speakers" className="h-full">{children}</Link>;
        }
        if (variant === 'list' || variant === 'selected') {
            return <div onClick={handleCardClick} className="cursor-pointer h-full flex flex-col items-center">{children}</div>;
        }
        return <div className="h-full">{children}</div>;
    };

    return (
        <ClickableWrapper>
            <div className={`${cardStyles[variant]} ${className} transition-transform h-full`}>
                {renderSpeakerImage(imageSizes[variant], imageContainerStyles[variant])}
                <div className={`h-1/2 mt-2 flex flex-col ${variant !== 'focused' ? "justify-between" : ""}`}>
                    {getContent()}
                </div>
            </div>
        </ClickableWrapper>
    );
};

export default SpeakersCard;
