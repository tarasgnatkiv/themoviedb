import React from 'react';
import './Footer.css';

import logoReact from '../../img/logoReact.svg';
import phone from '../../img/Footer/phone.png';
import gmail from '../../img/Footer/gmail.png';
import facebook from '../../img/Footer/facebook.png';
import instagram from '../../img/Footer/instagram.png';
import telegram from '../../img/Footer/telegram.png';
import viber from '../../img/Footer/viber.png';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className='footerBody'>
                        <h2>Contact us</h2>
                        <div className='contacts'>
                            <div className='realContact'>
                                <div className='realContactItem'>
                                    <a href='tel:+380995217717'>
                                        <img src={phone} alt='' />
                                        <span>+38 099 521 7717</span>
                                    </a>
                                </div>
                                <div className='realContactItem'>
                                    <a href='mailto:tarasgnatkiv@gmail.com'>
                                        <img src={gmail} alt='' />
                                        <span>tarasgnatkiv@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                            <div className='social'>
                                <div className='socialItem'>
                                    <a target='blank' href='https://www.facebook.com/taras.hnatkiv'>
                                        <img src={facebook} alt='' />
                                    </a>
                                </div>
                                <div className='socialItem'>
                                    <a target='blank' href='https://www.instagram.com/chelovek_afk/'>
                                        <img src={instagram} alt='' />
                                    </a>
                                </div>
                                <div className='socialItem'>
                                    <a target='blank' href='https://t.me/chelovek_afk'>
                                        <img src={telegram} alt='' />
                                    </a>
                                </div>
                                <div className='socialItem'>
                                    <a target='blank' href='viber://add?number=380995217717'>
                                        <img src={viber} alt='' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;