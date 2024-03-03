import React from 'react';
import './saajha.css';
import ngoImage from '../assets/log.png';
import ngoImage1 from '../assets/k.png';  // Corrected import path
import ngoImage2 from '../assets/m.png';  // Corrected import path
import icon1 from '../assets/i.png';
import icon2 from '../assets/n.png';
import icon3 from '../assets/w.png';


function Saajha() {
    return (
        <div>
            <div className='cont'>
                <div className='text-container'>
                    <div className='hometext'>
                        <h1>Saajha</h1>
                        <h2>Empowering Inclusivity, Transforming Lives</h2>
                    </div>
                    <div className='social-media'>
                    <div className='social-media'>
    <a href='https://www.instagram.com/thengoproject?igsh=emFsN2h4NnJwa29l&utm_source=qr'><img alt='Instagram' src={icon1} className='social-icon' /></a>
    <a href='https://www.linkedin.com/company/saajha-ngo-portal-for-people-with-disabilities/?viewAsMember=true'><img alt='LinkedIn' src={icon2} className='social-icon' /></a>
    <a href='#'><img alt='WhatsApp' src={icon3} className='social-icon' /></a>
</div>

                    </div>
                </div>
            </div>
            <div className='about-us'>
                <div className='about-text'>
                    <h3>About Us</h3>
                    <h4>“Alone we can do so little; together we can do so much.”
</h4>
<h5>Helen Keller, U.S. author, educator, and disability rights advocate
</h5>
            <div className='aboutus1'>
                <p>Inspired by Helen Keller's wisdom we launch our Project Saajha, a dedicated NGO portal fostering collaboration between individuals with disabilities and Non-Governmental Organizations.</p>
            </div>
            <div className='aboutus2'>
                <p>In the ever-evolving healthcare landscape, NGOs face challenges due to fragmented systems. This platform fosters collaboration and support from people across various backgrounds and individuals with disabilities. Saajha aims to bridge this gap, providing a centralized platform for efficient collaboration, progress monitoring, and resource mobilization for the NGOs nationwide.
</p>
            </div>
            <div className='aboutus3'>
                <p>Our wonderful team is led by Jannat Khan, including Sneha Pandey, Anika Srivastava, Shreya Dandwate, Vagdevi Mangi, Akansha, and Tisha.
</p>

            </div>
            <div className='aboutus4'>
                <p>Join us in this initiative to create a seamless and dependable experience, empowering both communities to achieve more together.
</p>

            </div>
                </div>
                <div className='logo'>
                    <img alt='Logo' src={ngoImage} />
                </div>
            </div>
            <div className='partition'></div>
            <div className='cards-container'>
                <div className='card'>
                    <h3>Motivation</h3>
                    <img alt='Motivation Logo' src={ngoImage1} className='card-logo' />
                    <p>
                        The driving force behind this entire project is our passion to help persons with disabilities. We wish to create a platform where people from all spheres of life can help and get help.
                    </p>
                </div>
                <div className='card'>
                    <h3>Mission</h3>
                    <img alt='Mission Logo' src={ngoImage2} className='card-logo' />
                    <p>
                        Our mission is to bring together NGOs across the country together and to make rehabilitation easier for all the people involved in it.
                    </p>
                </div>
            </div>
            <div className='partition1'></div>
            <div className='contact-section'>
                <h3>Contact Us</h3>
                <form>
                    <label htmlFor='fullName'>Full Name:</label>
                    <input type='text' id='fullName' name='fullName' required />

                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' id='email' name='email' required />

                    <label htmlFor='mobileNumber'>Mobile Number:</label>
                    <input type='tel' id='mobileNumber' name='mobileNumber' required />

                    <label htmlFor='emailSubject'>Email Subject:</label>
                    <input type='text' id='emailSubject' name='emailSubject' required />

                    <label htmlFor='message'>Your Message:</label>
                    <textarea id='message' name='message' rows='4' required></textarea>

                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Saajha;