const History = (props) => {

    const companyHistoryP1 = `We started after a standup that became a sit-down that became a nap. Someone said “what if we just ship code that works,” 
                            and everyone laughed for a full sprint. Since then we’ve heroically rewritten the monolith into microservices, then into 
                            nanoservices, then into a single well-named function called doEverything(), which we immediately wrapped in twelve adapters because architecture.`;

    const companyHistoryP2 = `When AI arrived, we embraced it like a rubber duck that talks back. Our AI pair-programmer insists tabs are three spaces 
                              and submits PRs at 3:14 AM titled “small fix.” We now specialize in building tools that help other tools write tools, which 
                              is very efficient until the tools start scheduling retros for the tools. Productivity is up, morale is chaotic, and our coffee machine has a roadmap.`;

    const pStyle = {
        display: props.activePage === 'history' ? 'flex' : 'none',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        width: '600px',
    }

    const parentStyle = {
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <div style={parentStyle}>
            <div style={pStyle}>
                <h1>Gather children, and hear our history</h1>
                <p>{companyHistoryP1}</p>
                <p>{companyHistoryP2}</p>
            </div>
        </div>

    )
}

export default History