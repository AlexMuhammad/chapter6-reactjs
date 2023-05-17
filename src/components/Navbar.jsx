import Button from "./Button/Button"

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full max-w-full">
            <nav className="w-full h-20 bg-bnr-gray">
                <div className="container flex items-center justify-between w-full h-full mx-auto px-36">
                    <div>
                        <div className="h-8 w-28 bg-bnr-blue"></div>
                    </div>
                    <div>
                        <ul className="inline-flex items-center space-x-6">
                            <li className="text-bnr-sm">Our Service</li>
                            <li className="text-bnr-sm">Why Us</li>
                            <li className="text-bnr-sm">Testimoni</li>
                            <li className="text-bnr-sm">FAQ</li>
                            <li>
                                <Button />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar