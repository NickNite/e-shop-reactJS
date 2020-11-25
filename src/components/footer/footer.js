import React from 'react';
import styles from './footer.module.css';
import payImg from '../../image/payPartner.png';
import googleImg from '../../image/google-logo.jpg';
import yahooImg from '../../image/icons-yahoo.jpg';
import arrow from '../../image/kisspng1.png';
import vk from '../../image/vk.png';
import tw from '../../image/tw.png'
import fb from '../../image/fb.png'
import inst from '../../image/instagram.png'
import { Icon } from 'semantic-ui-react';



export const Footer = () => {

    return (
        <div>
            <div className={styles.payPartner}>
                <img src={payImg} />
            </div>
            <div className={styles.shopInfo}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44063.348388482314!2d18.485412673565072!3d54.51948580543313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda145071ed789%3A0xdee2f99989236636!2sGdynia!5e0!3m2!1spl!2spl!4v1601301528516!5m2!1spl!2spl" width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div className={styles.contact}>
                    <ul>
                        <h3>Furniture store "<i>Сomfortable Kitchen</i>"</h3>
                        <li>Poland, Gdynia</li>
                        <li>81-000 st. Morska 59</li>
                    </ul>
                    <ul>
                        <h3>Contact</h3>
                        <li><Icon className={styles.icon} name='phone' color='green' />+48 113-411-00</li>
                        <li><Icon className={styles.icon} name='phone' color='green' />+48 112-311-00</li>
                        <li><Icon className={styles.icon} name='mail' color='gray' />ck-shop@mail.com</li>
                        <li><Icon className={styles.icon} name='time' color='gray' />MN-FR: 7:00-22:00</li>
                    </ul>
                    <div className={styles.socialNetw}>
                        <h3>Subscribe</h3>
                        <div className={styles.links}>
                            <a href='https://vk.com/' rel='nofollow' className={styles.vk} title='Our group in VKontakte'><img src={vk} /></a>
                            <a href='https://twitter.com/' className={styles.tw} title='Our group in Twitter'><img src={tw} /></a>
                            <a href='https://www.facebook.com/' className={styles.fb} title='Our group in Facebook'><img src={fb} /></a>
                            <a href='https://www.instagram.com/' className={styles.inst} title='Our group in Instagram'><img src={inst} /></a>
                        </div>
                        <div className={styles.copyright}>
                            <span>©&#8194;2019-2020 Company</span>
                            <span>"<i>Сomfortable Kitchen</i>"</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.footer}>
                <div id={styles.promo}>
                    <h4>FURNITURE</h4>
                    <div className={styles.promo}>
                        <ul>
                            <li><a>System furniture</a></li>
                            <li><a>Youth furniture</a></li>
                            <li><a>Bedroom furniture</a></li>
                            <li><a>Upholstered furniture</a></li>
                            <li><a>Baby furniture</a></li>
                        </ul>
                    </div>
                </div>
                <div id={styles.userInfo}>
                    <h4>BUYER INFORMATION</h4>
                    <div className={styles.userInfo}>
                        <ul>
                            <li><a>Contract</a></li>
                            <li><a>How to order</a></li>
                            <li><a>Assurance</a></li>
                            <li><a>User's manual</a></li>
                            <li><a>Photos from clients</a></li>
                        </ul>
                        <ul>
                            <li><a>Articles</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Wholesale</a></li>
                            <li><a>Trading rule</a></li>
                            <li><a>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div id={styles.companyInfo}>
                    <h4>INFORMATION ABOUT THE COMPANY</h4>
                    <div className={styles.companyInfo}>
                        <ul>
                            <li><b>NIP:</b>&#8194;<i>135 000 01 99</i></li>
                            <li><b>REGON:</b>&#8194;<i>135 000 135</i></li>
                            <li><b>C/A:</b>&#8194;<i>PL15AKBB301226960260051400</i></li>
                        </ul>
                    </div>
                </div>
                <div id={styles.assessment}>
                    <h4>BUYER ASSESSMENT</h4>
                    <div className={styles.assessment}>
                        <ul>
                            <li>
                                <div className={styles.assessmentImg}><img src={googleImg} /></div>
                                <div className={styles.number}>4.5</div>
                                <div className={styles.google}><img src={arrow} className={styles.arrow} /></div>
                            </li>
                            <li>
                                <div className={styles.assessmentImg}><img src={yahooImg} /></div>
                                <div className={styles.number}>4.1</div>
                                <div className={styles.yahoo}><img src={arrow} className={styles.arrow} /></div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

