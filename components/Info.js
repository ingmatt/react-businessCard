import React from 'react';

export default function Info() {
       return (
        <div className="info">
            <div className="info-container">
            <img className="avatar" src="https://bit.ly/3Zca8rL" />
            <div className="info-main">
                <h1 className="name">Matthew Ing</h1>
                <p className="job">Frontend Developer</p>
                <small>m.ing2@icloud.com</small>
            </div>
            <div className="btn-div">
                <a className="email" href="mailto:m.ing2@icloud.com">Email</a>
                <a className="linkedin" href="https://www.linkedin.com/in/matthew-ing/?originalSubdomain=en">LinkedIn</a>
            </div>
            </div>
        </div>
    )
    
}