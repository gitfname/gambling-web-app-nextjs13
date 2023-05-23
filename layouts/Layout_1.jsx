
export default function Layout_1({children}) {
    return (
        <div className="w-screen h-screen overflow-hidden bg-red-400 grid grid-rows-1 grid-cols-[6rem_calc(100%-6rem)]">

            {/* left side */}
            <div className="bg-green-500 overflow-y-auto space-y-4 py-10">

                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>
                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>
                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>
                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>
                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>
                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>
                <div className="w-12 h-20 bg-yellow-300 mx-auto"></div>

            </div>

            {/* middle section */}
            <div className="border-2 border-white grid grid-cols-1 grid-rows-[3.5rem_calc(100%-3.5rem)]">

                {/* top side */}
                <div className="bg-yellow-500">

                </div>

                {/* main section */}
                <div className="bg-red-500 overflow-y-auto space-y-5">
                    {children}
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                    <div className="w-96 h-64 bg-yellow-300"></div>
                </div>

            </div>

        </div>
    )
}