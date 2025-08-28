import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
    return (
        <header className="bg-[#1C1C1C] text-white shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 space-x-3">
                
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="/assets/brand_logo.png" alt="Brand Logo" className="w-32" />
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-6 max-w-2xl">
                    <div className="flex items-center bg-white rounded-2xl shadow-md border border-gray-200 focus-within:ring-2 focus-within:ring-[#006BAC] transition-all">
                        <IoSearchOutline className="ml-3 text-gray-400 text-2xl" />
                        <input
                            type="text"
                            placeholder="Search for products, brands and more..."
                            className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none rounded-2xl"
                        />
                        <button className="bg-[#7ABD30] text-white px-6 py-2 rounded-r-2xl font-semibold hover:bg-green-600 transition-colors">
                            Search
                        </button>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-xl shadow-md cursor-pointer hover:bg-gray-700 transition">
                    <CiLocationOn className="text-3xl" />
                    <div className="text-sm leading-tight">
                        <div>Deliver to <span className="font-semibold">Surat</span></div>
                        <div className="text-xs font-medium opacity-90">Pincode: 395006</div>
                    </div>
                </div>

                {/* Country Selector */}
                <div className="ml-4">
                    <select className="bg-gray-800 text-white px-3 py-2 rounded-lg cursor-pointer">
                        <option value="IN">India</option>
                        <option value="US">USA</option>
                        <option value="UK">UK</option>
                    </select>
                </div>

                {/* Cart */}
                <div className="ml-4 relative">
                    <button className="btn btn-circle btn-ghost">
                        <FiShoppingCart className="text-2xl" />
                        <span className="badge badge-sm indicator-item absolute -top-1 -right-1">8</span>
                    </button>
                </div>

                {/* User Profile */}
                <div className="ml-4 dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="User Avatar"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box shadow mt-3 w-52 p-2"
                    >
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Header;
