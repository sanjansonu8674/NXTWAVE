// components/Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-2 sm:pt-14 h-full flex flex-col justify-between mb-2">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 flex-grow">
                    <div className="md:w-1/2 max-w-md">
                        <h2 className="text-xl font-bold uppercase mb-2">BE THE FIRST TO KNOW</h2>
                        <p className="text-sm mb-4">Sign up for updates from mettā muse.</p>
                        <form className="flex">
                            <input
                                className="flex-grow bg-black border border-gray-700 text-xs text-gray-300 px-3 py-2 focus:outline-none"
                                placeholder="Enter your e-mail..."
                                type="email"
                            />
                            <button
                                className="ml-2 bg-black border border-gray-700 text-xs text-gray-700 uppercase px-4 py-2 hover:border-gray-500 hover:text-gray-500 transition"
                                type="submit"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                    <div className="md:w-1/2 max-w-xs space-y-6 text-sm">
                        <div>
                            <h3 className="font-bold uppercase mb-1">CONTACT US</h3>
                            <p className="mb-1">+44 221 133 5380</p>
                            <p className="text-gray-400">customercare@mettamuse.com</p>
                        </div>
                        <div>
                            <h3 className="font-bold uppercase mb-1">CURRENCY</h3>
                            <div className="flex items-center gap-2 mb-1">
                                <img
                                    alt="US flag icon"
                                    className="w-4 h-3"
                                    decoding="async"
                                    height="12"
                                    loading="lazy"
                                    src="https://storage.googleapis.com/a1aa/image/68300643-8f6b-43a3-041a-e2237d70e51d.jpg"
                                    width="16"
                                />
                                <span>USD</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-tight max-w-[220px]">
                                Transactions will be completed in Euros and a currency reference is available on here.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 text-sm">
                    <div className="md:w-1/4 space-y-2">
                        <h3 className="lowercase text-lg">mettā muse</h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 space-y-2">
                        <h3 className="font-bold uppercase">QUICK LINKS</h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>Orders &amp; Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment &amp; Pricing</li>
                            <li>Return &amp; Refunds</li>
                            <li>FAQs</li>
                            <li>Privacy Policy</li>
                            <li>Terms &amp; Conditions</li>
                        </ul>
                    </div>
                    <div className="md:w-1/4 space-y-2">
                        <h3 className="font-bold uppercase">FOLLOW US</h3>
                        <div className="flex space-x-3">
                            <a
                                aria-label="Instagram"
                                className="border border-white rounded-full w-7 h-7 flex items-center justify-center text-white text-sm hover:text-gray-400"
                                href="#"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                aria-label="LinkedIn"
                                className="border border-white rounded-full w-7 h-7 flex items-center justify-center text-white text-sm hover:text-gray-400"
                                href="#"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                        <h3 className="font-bold lowercase mt-6">mettā muse ACCEPTS</h3>
                        <div className="flex items-center space-x-2 mt-2">
                            <img
                                alt="Google Pay logo"
                                className="h-6 rounded-sm"
                                decoding="async"
                                height="24"
                                loading="lazy"
                                src="https://storage.googleapis.com/a1aa/image/6dd25556-443e-4339-ff30-f5024a34c881.jpg"
                                width="40"
                            />
                            <img
                                alt="Mastercard logo"
                                className="h-6 rounded-sm"
                                decoding="async"
                                height="24"
                                loading="lazy"
                                src="https://storage.googleapis.com/a1aa/image/644693a2-8805-4b81-e193-598b36c5ab2d.jpg"
                                width="40"
                            />
                            <img
                                alt="Paypal logo"
                                className="h-6 rounded-sm"
                                decoding="async"
                                height="24"
                                loading="lazy"
                                src="https://storage.googleapis.com/a1aa/image/bf5c649a-b1f6-4623-89f0-0b3e7ed10edc.jpg"
                                width="40"
                            />
                            <img
                                alt="American Express logo"
                                className="h-6 rounded-sm"
                                decoding="async"
                                height="24"
                                loading="lazy"
                                src="https://storage.googleapis.com/a1aa/image/7e391cfa-0e0c-487e-9cec-d50b320eeec1.jpg"
                                width="40"
                            />
                            <img
                                alt="Apple Pay logo"
                                className="h-6 rounded-sm"
                                decoding="async"
                                height="24"
                                loading="lazy"
                                src="https://storage.googleapis.com/a1aa/image/d8deb1c2-25f9-4e31-bdcd-9b351ec475b5.jpg"
                                width="40"
                            />
                            <img
                                alt="Discover Pay logo"
                                className="h-6 rounded-sm"
                                decoding="async"
                                height="24"
                                loading="lazy"
                                src="https://storage.googleapis.com/a1aa/image/e8f90e8b-540c-4ec8-ac75-37d28e2108ad.jpg"
                                width="40"
                            />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-400 text-center mt-10">
                    Copyright © 2023 mettamuse. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
