import {
    Facebook, Twitter, Instagram, Linkedin, Check, Utensils, Send, X
} from 'lucide-react';
const Footer = () => (
    <footer className="bg-[#111] text-gray-400 pt-20 pb-8 text-sm">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div>
                <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
                    <div className="border border-white p-1 rounded-sm">
                        <Utensils size={20} className="text-[#dcb156]" />
                    </div>
                    <span>Fixyland</span>
                </div>
                <p className="mb-6 leading-relaxed">
                    Nam libero tempore cum soluta nobis eseligendi optio cumque nihille impedit quo minus maxime placeat facere
                </p>
                <div className="flex gap-3">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="bg-[#222] p-2 rounded hover:bg-[#2da77a] hover:text-white transition-colors">
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Explore */}
            <div>
                <h4 className="text-white text-lg font-bold mb-6 uppercase">Explore</h4>
                <ul className="space-y-3">
                    {["About Hotel", "Pricing", "Hotel Staff", "Latest News", "Contact Us"].map((link, i) => (
                        <li key={i}><a href="#" className="hover:text-[#2da77a] transition-colors">{link}</a></li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-white text-lg font-bold mb-6 uppercase">Contact</h4>
                <ul className="space-y-4">
                    <li>7631 Sabina Park, 115 Devon Isle, <br /> Louisiana, USA</li>
                    <li className="text-white text-lg font-medium">(+1) 987 654 3210</li>
                    <li>info@domain.com</li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="text-white text-lg font-bold mb-6 uppercase">Newsletter</h4>
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <div className="relative mb-4">
                        <input
                            type="email"
                            placeholder="Ex. info@domain.com"
                            className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[#2da77a]"
                        />
                        <Send size={16} className="absolute right-0 top-3 text-gray-500" />
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center">
                            <Check size={10} />
                        </div>
                        I agree to all terms and policies
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© Copyright 2025 Fixyland. All Rights Reserved.</div>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white">Terms and Conditions</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
        </div>
    </footer>
);
export default Footer;  