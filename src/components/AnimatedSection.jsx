import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Title from '../components/Title';

const AnimatedSection = ({ line1, line2, children }) => {
	const animation = {
		hidden: {
			opacity: 0,
			x: 50,
		},
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.3,
			},
		},
	};
	return (
		<Layout>
			<AnimatePresence>
				<motion.section
					variants={animation}
					initial='hidden'
					animate='show'
					className='container'>
					<div className='content'>
						<Title line1={line1} line2={line2} />
						<div className='main-text'>{children}</div>
					</div>
				</motion.section>
			</AnimatePresence>
		</Layout>
	);
};

export default AnimatedSection;
