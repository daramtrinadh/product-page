import './index.css'
import { SiSamsungpay } from "react-icons/si";
import { CgPaypal } from "react-icons/cg";
import { FaCcMastercard } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer=()=>{
    return(
        <div className="footer-section">
            <div className='firstpart'>
                <div className='first-part-first'>
                    <h1>BE THE FIRST TO KNOW</h1>
                    <p>Sign up for updates from TANTRA</p>
                    <div className='email-field'>
                        <input className='input-mail' placeholder='Enter Your e-mail'/>
                        <button className='subscribe-btn' type='button'>SUBSCRIBE</button>
                    </div>
                </div>
                <div>
                    <h1>CONTACT US</h1>
                    <p>+44 221 133 5360</p>
                    <p>customercare@tantra.com</p>
                    <h1>CURRENCY</h1>
                    <p>+USD</p>
                    <p>Transactions will be completed in Euros and currency reference is available on hover</p>

                </div>
            </div>
            <hr className='footer-line'/>
            <div className='second-part'>
                <div>
                    <h1>TANTRA</h1>
                    <p>About us</p>
                    <p>Stories</p>
                    <p>Articles</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h1>QUICK LINKS</h1>
                    <p>Orders & Shipping</p>
                    <p>Join /Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h1>FOLLOW US</h1>
                    <FaSquareInstagram className='social-icon' size={30}/>
                    <FaLinkedin className='social-icon' size={30}/>
                    <h1>Tantra Accepts</h1>
                    <SiSamsungpay className='social-icon' size={30}/>
                    <CgPaypal className='social-icon' size={30}/>
                    <FaApplePay className='social-icon' size={30}/>
                    <FaCcMastercard className='social-icon' size={30}/>

                </div>
            </div>

        </div>
    )

}
export default Footer