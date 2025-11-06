const ExternalLinks = (props) => {

    const links = [
        {name: 'Try Pap' ,url: 'https://trypap.com/'},
        {name: 'Republique french stuff' ,url: 'http://www.republiquedesmangues.fr/'},
        {name: 'Optical Toys' ,url: 'https://optical.toys/'},
        {name: 'Jackson Pollock' ,url: 'https://jacksonpollock.org/'},
        {name: 'Every Day IM' ,url: 'http://www.everydayim.com/'},
        {name: 'Random Colour' ,url: 'http://randomcolour.com/'},
        {name: 'Cat Bounce' ,url: 'https://cat-bounce.com/'},
    ]

    const pStyle = {
        display: props.activePage === 'externalLinks' ? 'flex' : 'none',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={pStyle}>
            <h1>Check out these great and not random links!!</h1>
            <ul className="externalLinks">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank"> {link.name}</a>
                    </li>

                ))}
            </ul>

        </div>

    )

}

export default ExternalLinks