import React from 'react';

interface ImageComponentProps {
	src: string;
	alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
	return <img src={src} alt={alt} />;
};

export default ImageComponent;
