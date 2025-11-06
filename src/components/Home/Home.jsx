const Home = (props) => {

    const homeP1 = `NullPointer Labs builds boring-in-the-best-way software: systems that stay
        up, dashboards that tell the truth, and releases that don’t turn Fridays
        into horror stories. We design simple cloud architectures, tame container
        sprawl, and automate the parts humans forget. Our rule of thumb is
        clarity over cleverness—plain English docs, small changes shipped often,
        and tools your future self will thank you for.`;

    const homeP2 = `We’ve helped parody-grade giants like Netflux (less buffering, more
        watching), TOOGLE (search that finds what you meant), Macrosoft (monoliths
        that behave), Facebrook (hot takes with speed limits), and Amazen (carts
        that stop crying “Only 1 left!”). Names are jokes, results aren’t: fewer
        incidents, faster feedback loops, cleaner handoffs. Tell us what you’re
        trying to ship; we’ll make the computers behave.`;

    const parentStyle = {
        display: props.activePage === 'home' ? 'flex' : 'none',
        justifyContent: 'center',

        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // placeItems: 'center'
    }

    return (
        <div style={parentStyle}  >
            <div className="home">
                <h1>Hey, we're Syntax Circus!</h1>
                <p id="p1">We're changing the world through microservices..</p>
                <p id="p2">{homeP1}</p>
                <p id="p3">{homeP2}</p>
                <img src="/images/home.png" />
            </div>
        </div>
    )
}

export default Home