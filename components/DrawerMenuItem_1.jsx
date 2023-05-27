
export default function DrawerMenuItem_1({text, href, icon, items=[]}) {

    return (
        <button
        className="flex items-center gap-x-1 group text-lg hover:bg-[#383a3e] group-hover:bg-[#383a3e] text-white/60 font-light hover:text-white leading-none py-4 ormal p-3 bg-[#2d3035] w-full"
        >
            <div className="w-14 grid place-items-center">
                {icon}
            </div>
            {text}
        </button>
    )
}