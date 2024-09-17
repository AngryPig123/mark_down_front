export default function Navbar() {
    return (
        <nav className="flex p-2 border-2 border-gray-200">

            <div className="flex p-3 border-2 border-gray-200">
                <div className="p-3 border-2 border-gray-200">
                    home
                </div>
            </div>

            <div className="flex justify-around items-center w-full">
                <div className="p-3 border-2 border-gray-200">div</div>
                <div className="p-3 border-2 border-gray-200">div</div>
                <div className="p-3 border-2 border-gray-200">div</div>
            </div>

            <div className="flex p-3 border-2 border-gray-200">
                <div className="p-3 border-2 border-gray-200">
                    login
                </div>
                <div className="p-3 border-2 border-gray-200">
                    join
                </div>
            </div>

        </nav>
    )
}