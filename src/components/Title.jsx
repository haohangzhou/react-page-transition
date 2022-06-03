import { AnimatePresence, motion } from 'framer-motion';

const Title = ({ line1, line2 }) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<AnimatePresence>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				className='title-container'>
				<motion.h1 variants={item}>{line1}</motion.h1>
				<motion.h1 variants={item}>{line2}</motion.h1>
			</motion.div>
		</AnimatePresence>
	);
};

export default Title;
