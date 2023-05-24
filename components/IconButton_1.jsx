
export default function IconButton_1({icon, className, iconWrapperClassName, badge=null, badgeClassName}) {
    return (
        <div className={"cursor-pointer relative grid place-items-center group hover:bg-white transition-colors duration-200 rounded-full bg-white/[0.09] p-1.5 " + className}>
            <span className={"group-hover:fill-[#1e2123] fill-white/70 transition-colors duration-200 " + iconWrapperClassName}>
                {icon}
            </span>

            {
                typeof badge === "number"
                ?
                    <span className={"absolute -translate-y-1.5 translate-x-1.5 top-0 right-0 leading-none rounded-full text-xs font-normal text-white bg-green-400 p-1 px-2 " + badgeClassName}>
                        {badge}
                    </span>
                :
                    null
            }
        </div>
    )
}