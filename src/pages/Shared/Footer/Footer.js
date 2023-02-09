import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/footerLogo.png';
import { BiMap } from 'react-icons/bi';
import { BsTelephone, BsFacebook, BsTwitter, BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className='bg-[#222222] p-10 text-white'>
            <div className="max-width">
                {/* Footer top */}
                <div className="footer pb-10">
                    <div>
                        <img src={`${footerLogo}`} alt="" />
                        <p>Design amazing digital experiences that <br /> create more happy in the world.</p>
                        <div className='flex items-center'>
                            <div className='mr-2 p-2 rounded-full bg-white'>
                                <BiMap className='text-black' />
                            </div>
                            <p>3768 Stratford Court, <br /> Raleigh NC 27604</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='mr-2 p-2 rounded-full bg-white'>
                                <BsTelephone className='text-black' />
                            </div>
                            <p>+1 620-263-8162</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='mr-2 p-2 rounded-full bg-white'>
                                <FaRegEnvelope className='text-black' />
                            </div>
                            <p>info@furnimart.com</p>
                        </div>
                    </div>
                    <div>
                        <span className="text-xl">Product</span>
                        <Link className="link link-hover">Overview</Link>
                        <Link className="link link-hover">Features</Link>
                        <Link className="link link-hover">Solutions</Link>
                        <Link className="link link-hover">Tutorials</Link>
                        <Link className="link link-hover">Pricing</Link>
                        <Link className="link link-hover">Releases</Link>
                    </div>
                    <div>
                        <span className="text-xl">Resources</span>
                        <Link className="link link-hover">Blog</Link>
                        <Link className="link link-hover">Newsletter</Link>
                        <Link className="link link-hover">Events</Link>
                        <Link className="link link-hover">Help Centre</Link>
                        <Link className="link link-hover">Tutorials</Link>
                        <Link className="link link-hover">Support</Link>
                    </div>
                    <div>
                        <span className="text-xl">Social</span>
                        <Link className="link link-hover">Twitter</Link>
                        <Link className="link link-hover">LinkedIn</Link>
                        <Link className="link link-hover">Facebook</Link>
                        <Link className="link link-hover">GitHub</Link>
                        <Link className="link link-hover">AngelList</Link>
                        <Link className="link link-hover">Dribbble</Link>
                    </div>
                    <div>
                        <span className="text-xl">Legal</span>
                        <Link className="link link-hover">Terms</Link>
                        <Link className="link link-hover">Privacy</Link>
                        <Link className="link link-hover">Cookies</Link>
                        <Link className="link link-hover">Licenses</Link>
                        <Link className="link link-hover">Settings</Link>
                        <Link className="link link-hover">Contact</Link>
                    </div>

                </div>
                {/* Footer Bottom */}
                <hr />
                <div className='sm:flex justify-between items-center pt-5'>
                    <p>© 2022 Furniture Store LLC. All rights reserved.</p>
                    <div className='flex items-center mt-5 sm:mt-0'>
                        <BsTwitter className='text-xl mr-3' />
                        <BsLinkedin className='text-xl mr-3' />
                        <BsFacebook className='text-xl mr-3' />
                        <BsGithub className='text-xl mr-3' />
                        <BsDribbble className='text-xl' />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;