// import React from 'react'
import { useState } from "react"
import { Button } from "../ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileMenu = () => {
    const[IsMenuOpen, setIsMenuOpen] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!IsMenuOpen);
    }
    
  return (
    <div>
        <Button onClick={toggleMenu} className="lg:hidden">
            {IsMenuOpen ? (<AiOutlineMenu />) : (<AiOutlineClose />)}</Button>
    </div>
  )
}

export default MobileMenu