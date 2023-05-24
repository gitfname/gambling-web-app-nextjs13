
export default function Button({text, className="", color}) {
    return (
        <button
            style={{
                backgroundColor: color
            }}
            className={`relative active:scale-[0.96] transition-transform py-4 px-9 rounded-sm overflow-hidden text-white text-base tracking-wide font-normal ` + className}
        >
            <span className="absolute top-0 right-0 h-1/2 w-[50%] bg-gradient-to-l from-transparent to-white/[0.17]">
                <span className="absolute bottom-0 left-0 h-1/2 translate-y-1/2 w-full backdrop-blur-sm"></span>
            </span>
            <span className="z-10 relative">
                {text}
            </span>
        </button>
    )
}