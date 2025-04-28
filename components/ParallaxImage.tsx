'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FramerParallaxProps {
	imageUrl: string;
	height?: string;
	children?: React.ReactNode;
	overlay?: boolean;
}

const FramerParallax: React.FC<FramerParallaxProps> = ({
	                                                       imageUrl,
	                                                       height = "h-[500px]",
	                                                       children,
	                                                       overlay = true
                                                       }) => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

	return (
		<div
			ref={ref}
			className={`relative w-full overflow-hidden ${height}`}
		>
			<motion.div
				style={{
					y,
					backgroundImage: `url(${imageUrl})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
				className="absolute inset-0 w-full h-[130%] -top-[15%]"
			/>

			{/* Overlay */}
			{overlay && (
				<div className="absolute inset-0 bg-black/40"></div>
			)}

			{/* Content */}
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-white text-center z-10]">
					{children}
				</div>
			</div>
		</div>
	);
};

export default FramerParallax;