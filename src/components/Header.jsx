import navList from '../data/nav_links'
export default function Header() {
    return (
        <header>
            <img className="logo" src="/img/dc-logo.png" alt="dc header logo" />
            <nav>

                <ul className="header-list">
                    {navList.map((navEl) => (

                        <li key={navEl.id}><a href={navEl.link}>{navEl.title}</a></li>
                    )
                    )}
                </ul>


            </nav>
        </header >

    )
}