import { FiFacebook, FiInstagram, FiTwitter, FiTwitch, FiMail } from "react-icons/fi"

const Footer = () => {
    return (
        <div className="h-full max-w-full">
            <div className="container w-full h-full mx-auto px-36">
                <div className="flex justify-between">
                    <div className="space-y-4">
                        <h6>Jalan Suroyo No. 161 Mayangan Kota <br />Probolonggo 672000</h6>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div>
                        <ul className="space-y-4">
                            <li>Our Services</li>
                            <li>Why Us</li>
                            <li>Testimonial</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h6>Contact with us</h6>
                        <div className="flex space-x-4">
                            <FiFacebook className="w-8 h-8 p-1 text-white rounded-full bg-bnr-blue" />
                            <FiInstagram className="w-8 h-8 p-1 text-white rounded-full bg-bnr-blue" />
                            <FiTwitter className="w-8 h-8 p-1 text-white rounded-full bg-bnr-blue" />
                            <FiMail className="w-8 h-8 p-1 text-white rounded-full bg-bnr-blue" />
                            <FiTwitch className="w-8 h-8 p-1 text-white rounded-full bg-bnr-blue" />
                        </div>
                    </div>
                    <div className="space-y-4" >
                        <h6>Copyright Binar 2023</h6>
                        <div className="w-24 h-10 bg-bnr-blue"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer