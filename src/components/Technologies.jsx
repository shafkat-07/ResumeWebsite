import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaAngular } from 'react-icons/fa'
import { AiOutlineDotNet } from 'react-icons/ai'
import { SiLangchain, SiPostgresql } from 'react-icons/si'
import { FaFlask } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            repeat: Infinity,
            duration: duration,
            ease: 'linear',
            repeatType: 'reverse'
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaAngular className='text-7xl text-red-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(4.5)}
                    initial='initial'
                    animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <AiOutlineDotNet className='text-7xl text-purple-400' />
                </motion.div>

                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostgresql className='text-7xl text-sky-700' />
                </motion.div>

                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaFlask className='text-7xl' />
                </motion.div>

                <motion.div
                    variants={iconVariants(5.5)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiLangchain className='text-7xl text-green-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies