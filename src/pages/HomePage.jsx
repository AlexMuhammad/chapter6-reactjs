import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/cari">
                    <li>Cari Mobile</li>
                </Link>
            </ul>
        </>
    )
}

export default HomePage