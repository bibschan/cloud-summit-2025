import React from 'react';
import Image from 'next/image';

// Define the speaker data structure
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

// Define the component props
interface SpeakersCardProps {
    speaker: Speaker;
    variant: 'keynote' | 'list' | 'selected';
    className?: string;
}

const SpeakersCard: React.FC<SpeakersCardProps> = ({
    speaker,
    variant,
    className = ''
}) => {
    const { name, title, company, bio, talk_title, image } = speaker;

    const cardStyles = {
        keynote: "flex flex-col items-center text-center max-w-lg mx-auto",
        list: "flex flex-col items-center text-center max-w-xs",
        selected: "flex flex-col items-center text-center max-w-md"
    };

    const imageSizes = {
        keynote: 400,
        list: 200,
        selected: 200
    };
    const imageContainerStyles = {
        keynote: `border-secondary-600 border-4 `,
        list: "grayscale border-white border-2",
        selected: ""
    };

    const talkTitleStyles = {
        keynote: "text-xl md:text-6xl font-bold ",
        list: "text-base font-bold mt-2 text-white",
        selected: "text-xl font-bold mt-4 text-white"
    };

    const nameStyles = {
        keynote: "text-lg md:text-xl font-semibold mt-3 text-white",
        list: "text-lg font-medium mt-2 text-white",
        selected: "text-2xl font-bold mt-3 text-white"
    };

    const titleStyles = {
        keynote: "",
        list: "text-xs text-gray-500",
        selected: "text-base text-gray-700 font-medium"
    };



    // Render different content based on variant
    const renderContent = () => {
        switch (variant) {
            case 'keynote':
                return (
                    <>
                        <div className=" text-secondary-600 doto-text uppercase text-2xl font-bold mt-4 mb-1">Notable Speaker</div>
                        {talk_title && <h2 className={talkTitleStyles[variant]}>{talk_title}</h2>}
                        <p className={nameStyles[variant]}>{name}, {title}, {company}</p>
                    </>
                );

            case 'list':
                return (
                    <>
                        {talk_title && <div className={talkTitleStyles[variant]}>{talk_title}</div>}
                        <h3 className={nameStyles[variant]}>{name}</h3>
                        <p className={titleStyles[variant]}>{title}, {company}</p>
                    </>
                );

            case 'selected':
                return (
                    <>
                        <h3 className={nameStyles[variant]}>{name}</h3>
                        <p className={titleStyles[variant]}>{title}</p>
                        <p className="text-sm text-white mb-3">{company}</p>
                        {talk_title && <div className={talkTitleStyles[variant]}>{talk_title}</div>}
                        {bio && <p className="mt-4 text-sm text-white">{bio}</p>}
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className={`${cardStyles[variant]} ${className}`}>
            <div className={`aspect-[4/5] relative rounded-full overflow-hidden w-[${imageSizes[variant]}px] h-[${imageSizes[variant]}px] ${imageContainerStyles[variant]}`}>
                <div className={`relative rounded-full overflow-hidden}`}>
                    {image ? (
                        <Image
                            src={image}
                            alt={`${name}'s photo`}
                            width={imageSizes[variant]}
                            height={imageSizes[variant]}
                            className="w-full h-full object-cover object-top"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-white text-lg">{name.charAt(0)}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-2">{renderContent()}</div>
        </div>
    );
};

export default SpeakersCard;
