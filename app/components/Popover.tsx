/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from "react";

type PopoverProps = {
    isOpen: boolean;
    onClose: ()=> void;
    containerRef: React.RefObject<HTMLElement | null>;
    children: React.ReactNode;
    className?: string
}

export default function Popover({ containerRef, isOpen, onClose, children, className}:PopoverProps){
    
    const popoverRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{
        if(!isOpen) return;

        const handleClickOutside = (event: MouseEvent)=>{
            const target = event.target as Node;

            if( popoverRef.current && 
                !popoverRef.current.contains(target) && 
                containerRef.current && 
                !containerRef.current.contains(target)){
                onClose();
            }
        };

        window.addEventListener("mousedown", handleClickOutside);

        return()=> {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen, onClose]);

    if(!isOpen) return null;

    return(
        <div ref={popoverRef} className={`${className}`}>
            {children}
        </div>
    )
}