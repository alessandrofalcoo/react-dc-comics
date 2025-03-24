const navList = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOP']
export default function Header() {
    return (
        <header>
            <img className="logo" src="/img/dc-logo.png" alt="dc header logo" />
            <nav>

                <ul className="header-list">
                    {navList.map((navEl) => (

                        <li key={navEl}>{navEl}</li>
                    )
                    )}
                </ul>


            </nav>
        </header >

    )
}