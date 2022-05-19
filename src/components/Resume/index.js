import React from 'react';
import resume from '../../assets/resume.pdf'

function Resume(props) {
    return (
        <section>
            <h1>Take a closer look at my experience...</h1>
            <a href= {resume} target='_blank' rel='noreferrer'>Danielle James ~ Resume</a>
            
        </section>
    )
}

export default Resume;