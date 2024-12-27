import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch , CiHeart} from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
export default function Header() {
    let [Count , SetCount]=useState(false)
    return (
    
            <div className="fixed navbar w-[80%] h-[40px] ml-[10%] flex justify-between center center">
                <div className="navlogo">
                    <h1 className="text-[35px] cursor-pointer ">Exclusive</h1>
                </div>
                <nav className="">
                    <ul className=" hidden md:flex gap-9">
                        <li className=" mt-[12px]"><Link to={'/'}>Home</Link></li>
                        <li className="md:ml-[30px] mt-[12px]"><Link to={'/contact'}>Contact</Link></li>
                        <li className="md:ml-[30px] mt-[12px]"><Link to={'/about'}>About</Link></li>
                        <li className="md:ml-[30px] mt-[12px]"><Link to={'/signup'}>Signup</Link></li> 
                    </ul>
                </nav>
                <div className="sBar flex">
                    <div className="search bg-[#F5F5F5] mt-[10px]">
                        <input type="text" className="cursor-pointer text-[12px] px-[10px] py-[8px] outline-0 border-0 bg-[#F5F5F5]" placeholder="What are you looking for?"/>
                        <button className=" absolute bg-[#F5F5F5] p-[5px] cursor-pointer "><CiSearch className="text-[25px]"/></button>
                    </div>
                    <CiHeart className="text-[35px] ml-[50px] mt-[10px] cursor-pointer"  />
                    <FaCartArrowDown  className="text-[30px] ml-[30px] mt-[12px] cursor-pointer "/>
                    <div onClick={() => SetCount(!Count)}className=" cursor-pointer mt-[12px] ml-[20px] md:hidden">
                     <CiMenuFries size={30}/> </div>
                    </div>
        

                <div className= {Count ? " fixed navbar right-0 top-0 w-[100%] h-[40px] ml-0 flex justify-between center center" :
                    " fixed navbar right-[-100%] top-0 w-[100%] h-[40px] ml-0 flex justify-between center center"
                }>

                       <div className="flex w-full items-center justify-end md:hidden">
          <ul className=" flex flex-col gap-5 mt-[50%] mr-[30px] md:hidden">
                        <li onClick={()=> SetCount(false)} className=""><Link to={'/'}>Home</Link></li>
                        <li onClick={()=> SetCount(false)}className=""><Link to={'/contact'}>Contact</Link></li>
                        <li onClick={()=> SetCount(false)}className=""><Link to={'/about'}>About</Link></li>
                        <li onClick={()=> SetCount(false)}className=""><Link to={'/signup'}>Signup</Link></li> 
                    </ul>
                    
        </div>
                </div>
                </div>
                
            
    )
}