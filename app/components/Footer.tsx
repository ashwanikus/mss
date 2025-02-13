import React from "react";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <!-- Logo Section --> */}
            <div>
                <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="MSS Logo" className="w-10 h-10" width={1000}
        height={760}/>
                <span className="text-xl font-bold">MSS</span>
                </div>
            </div>

            {/* <!-- Site Links Section --> */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Site Links</h3>
                <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-500">Home</a></li>
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Our Message</a></li>
                <li><a href="#" className="hover:text-orange-500">Services</a></li>
                <li><a href="#" className="hover:text-orange-500">Projects</a></li>
                <li><a href="#" className="hover:text-orange-500">Financial Reports</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Blogs</a></li>
                </ul>
            </div>

            {/* <!-- Contact & Follow Section --> */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
                <p className="text-sm">Phone No: <a href="tel:+911142546979" className="text-orange-500">+91 11 4254 6979</a></p>
                <p className="text-sm">Email: <a href="mailto:mssjanpath@gmail.com" className="text-orange-500">mssjanpath@gmail.com</a></p>
                <p className="text-sm">Address: Head Office: 70 Janpath, New Delhi – 110001, India</p>
                <form className="mt-4 flex space-x-2">
                <input type="email" placeholder="Email" className="flex-1 px-3 py-2 text-black rounded" />
                <button type="submit" className="px-4 py-2 bg-orange-500 rounded text-white">Subscribe</button>
                </form>
            </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
            <p>Follow Us:</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-orange-500"><i className="fab fa-facebook-f"></i> Facebook</a>
                <a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i> Twitter</a>
                <a href="#" className="hover:text-orange-500"><i className="fab fa-youtube"></i> YouTube</a>
                <a href="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
            </div>
        </div>
    </footer>
  );
}