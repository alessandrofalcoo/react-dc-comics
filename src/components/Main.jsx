import Card from './Card.jsx'
import comics from '../data/comics.js'

export default function Main() {
    return (
        <main>
            <div className="jumbotron">
                <div>
                    <h3>Current Series</h3>

                </div>
            </div>
            <div className="main-content">
                {comics.map((comic) => (
                    <Card key={comic.id} image={comic.thumb} title={comic.title} />
                ))}
                <div className='btn-container'>
                    <a href="#"><button><strong>load more</strong></button></a>

                </div>
            </div>
            <div className="main-menu">
                <div>
                    <img src="/img/buy-comics-digital-comics.png" alt="" />
                    <p>DIGITAL COMICS</p>

                </div>
                <div>
                    <img src="/img/buy-comics-merchandise.png" alt="" />
                    <p>DC MERCHANDISE</p>

                </div>
                <div>

                    <img src="/img/buy-comics-subscriptions.png" alt="" />
                    <p>SUBSCRIPTION</p>
                </div>
                <div>

                    <img src="/img/buy-comics-shop-locator.png" alt="" />
                    <p>COMIC SHOP LOCATOR</p>
                </div>
                <div>

                    <img src="/img/buy-dc-power-visa.svg" alt="" />
                    <p>DC POWER VISA</p>
                </div>
            </div>
        </main>

    )
}