
export default function Button({text, className="", color="purple"}) {

    let _btnColor = color
    switch (color) {
        case "green":
            _btnColor = "green-btn"
        break;
        case "dark-orangish":
            _btnColor = "dark-orangish-btn"
        break;

        default:
            _btnColor = "purple-btn"
    }

    return (
        <button
            className={`${_btnColor} relative active:scale-[0.96] transition-transform py-4 px-9 rounded-sm overflow-hidden text-white text-base tracking-wide font-normal ` + className}
        >
            <span className="z-10 relative pointer-events-none ">
                {text}
            </span>
        </button>
    )
}