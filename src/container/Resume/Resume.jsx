import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Resume.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';

const Resume = () => {

    const download = async () => {
        console.log("download")
        await fetch('./Abhirup_Resume.pdf').then(e => {
            console.log("fetch")
            e.blob().then(e => {
                console.log("e")
                let t = window.URL.createObjectURL(e)
                let s = document.createElement("a");
                s.href = t
                s.download = "Abhirup's Resume.pdf"
                s.click()
            })
        })
    };

    return (
        <>
            <h2 className="head-text">Resume</h2>
            <h3 className="subhead-text">Click The Arrow Below To Download My Resume</h3>

            <div className="app__resume-container" id="resume">
                <motion.div className="app__resume-list">
                    <span className='bounce' onClick={download}>
                        <AiOutlineArrowDown style={{
                            fontSize: '7rem',
                            color: '#909497',
                        }} />
                    </span>
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Resume, 'app__resume'),
    'resume',
    'app__primarybg',
);