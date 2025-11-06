const Contact = (props) => {

    const pStyle = {
        display: props.activePage === 'contact' ? 'flex' : 'none',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '20px',
        margin: '40px',
        color: 'white',
    }

    const h1Style = {
        marginTop: '0'
    }

    const imgStyle = {
        width: '500px',
        borderRadius: '10px',
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '15px',
    }

    return (
        <div style={pStyle}>
            <div>
                <h1 style={h1Style}>Get in touch!!</h1>
                <form style={formStyle}>
                    <label htmlFor="name">What's your name?</label>
                    <input type="text" name="name" />

                    <label htmlFor="email">What's your email?</label>
                    <input type="text" name="name" />

                    <label htmlFor="body">How can our monsters help?</label>
                    <textarea name="name" />

                    <button>Bug Us</button>
                </form>
            </div>
            <img style={imgStyle} src='/images/officebuilding.jpg' />
        </div>

    )

}

export default Contact