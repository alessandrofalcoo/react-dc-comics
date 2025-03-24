export default function Footer({ firstList, secondList, thirdList, fourthList }) {
    return (
        <footer>
            <div className="dc">
                <div className="dc-lists">
                    <div className="first-list">
                        <ul>DC COMICS
                            {firstList.map((listEl) => (
                                <li key={listEl.id}><a href={listEl.url}>{listEl.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="second-list">
                        <ul>SHOP
                            {secondList.map((listEl) => (
                                <li key={listEl.id}><a href={listEl.url}>{listEl.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="third-list">
                        <ul>DC
                            {thirdList.map((listEl) => (
                                <li key={listEl.id}><a href={listEl.url}>{listEl.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="fourth-list">
                        <ul>SITES
                            {fourthList.map((listEl) => (
                                <li key={listEl.id}><a href={listEl.url}>{listEl.title}</a></li>
                            ))}
                        </ul>
                    </div>

                </div>
                <img src="/img/dc-logo-bg.png" alt="" />
            </div>
            <div className="end-footer">
                <button className="btn">SIGN-UP NOW!</button>
                <div className="social">
                    <p>FOLLOW US</p>
                    <img src="/img/footer-facebook.png" alt="" />
                    <img src="/img/footer-twitter.png" alt="" />
                    <img src="/img/footer-youtube.png" alt="" />
                    <img src="/img/footer-pinterest.png" alt="" />
                    <img src="/img/periscope.png" alt="" />

                </div>
            </div>
        </footer>

    )
}