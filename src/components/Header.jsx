
export default function Header({ navEl }) {
    return (
        <header>
            <img className="logo" src="/img/dc-logo.png" alt="dc header logo" />
            <nav>

                <ul className="header-list">
                    {navEl.map((navEl) => (

                        <li key={navEl.id}><a href={navEl.link}>{navEl.title}</a></li>
                    )
                    )}
                </ul>


            </nav>
        </header >

    )
}