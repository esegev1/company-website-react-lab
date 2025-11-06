import { useState } from 'react'


const Navbar = (props) => {
    /****************************************
    *         DATA VARIABLES
    ***************************************/
    const pages = [
        { id: 1, name: 'home', displayName: 'Home' },
        { id: 2, name: 'history', displayName: 'History' },
        { id: 3, name: 'pastWork', displayName: 'Past Work' },
        { id: 4, name: 'staff', displayName: 'Staff' },
        { id: 5, name: 'contact', displayName: 'Contact' },
        { id: 6, name: 'externalLinks', displayName: 'External Links' },
      ]


    /****************************************
    *         STATES & HANDLERS
    ***************************************/


    const handleClick = (event) => {
        //don't open new page
        event.preventDefault();

        console.log(event.target.name)
        props.changePage(event.target.name);



    }

    /****************************************
    *         STYLE VARIABLES
    ***************************************/
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'gray',
        height: '40px',
    }

    const navStyle = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        background: 'none',
        border: 'none',

    }

    return (
        <>
            <div style={headerStyle}>
                <div className="burgerMenu">

                </div>
                <nav className="nav" style={navStyle}>
                    {pages.map((page) => (
                        <button key={page.id} name={page.name} onClick={handleClick}>{page.displayName}</button>
                    ))}
                </nav>
                <div className="companyLogo">

                </div>
            </div>
        </>

    )

}

export default Navbar