import React from 'react';

interface MotionPresProps {
    title: string;
    description: string;
    video: string;
}

const MotionPres: React.FC<MotionPresProps> = ({ title, description, video }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-8">
            <h3 className="mb-6 text-white self-start uppercase">{title}</h3>
            <p className="text-white whitespace-pre-line leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default MotionPres;