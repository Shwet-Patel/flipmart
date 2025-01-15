
function Footer() {
    return (
        <div className="bg-black py-2 text-white text-md">

            <div className="flex px-16 py-8">
                <div className="basis-3/4 flex justify-around">
                    <div>
                        <h2 className="font-bold text-gray-200 mb-2">About</h2>
                        <ul>
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Legal info</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-200 mb-2">Group Companies</h2>
                        <ul>
                            <li>Myntra</li>
                            <li>Shopsy</li>
                            <li>Cleartrip</li>
                            <li>Kaushalam</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-bold text-gray-200 mb-2">Help</h2>
                        <ul>
                            <li>Privacy</li>
                            <li>Cancellations & returns</li>
                            <li>Sitemap</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                </div>
                <div className="basis-1/4">
                    <div>
                        <h2 className="font-bold text-gray-200 mb-2">Office Address</h2>
                        <h3>Random Address here..................</h3>
                    </div>

                    <div className="mt-4">
                        <h2 className="font-bold text-gray-200 mb-2">Socials</h2>
                        <div className="flex mt-2 gap-x-4">
                            <a href="https://www.facebook.com">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.twitter.com">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.youtube.com">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center py-4 justify-around border-t border-white">
                <div>become a seller</div>
                <div>Advertise</div>
                <div>Gift cards</div>
                <div>Help centers</div>
            </div>
            <div className="pt-4 border-t border-white text-center">&copy 2020-2025 Flipmart</div>
        </div>
    )
}

export default Footer;