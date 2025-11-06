const History = (props) => {
    console.log(`inside history: ${props.activePage}`);

    const pStyle = {
        display: props.activePage === 'history' ? 'block' : 'none'
    }
    
    return (
        <>
        <p style={pStyle}>History</p>
        </>

    )

}

export default History