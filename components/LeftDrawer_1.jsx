"use client"

import { useState, forwardRef } from "react"

const LeftDrawer = forwardRef(({trigger, children, className}, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={className} ref={ref} onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>
            <div className={`fixed top-0 left-0 z-[9999] w-full h-full pointer-events-none ${isOpen?"!pointer-events-auto":""}`}>
                {/* backdrop */}
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute z-10 top-0 left-0 w-full h-full bg-black
                    opacity-0 transition-opacity duration-200 ${isOpen?"!opacity-50":""}`}
                >
                </div>

                {/* menu */}
                <div className={`w-screen md:w-80 h-screen z-20 bg-[#24262b] transition-transform duration-300 ease-out absolute top-0 left-0 -translate-x-full ${isOpen?"!translate-x-0":""}`}>
                    {children}
                </div>
            </div>
        </>
    )
})

export default LeftDrawer