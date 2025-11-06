const Pastwork = (props) => {
    const pastWork = [
        {
            client: "TOOGLE",
            duration: "6 sprints (Q1 2025)",
            description:
                "Reduced 47 cookie popups to a single polite croissant. Search results now rank our snacks #1.",
            imgUrl: '/images/toogle.png'
        },
        {
            client: "Microhard",
            duration: "11 weeks (Q2–Q3 2025)",
            description:
                "Rewrote the installer so it asks only 3 questions instead of 93. It still reboots twice for tradition.",
            imgUrl: '/images/microhard.png'
        },
        {
            client: "Amazen Prime",
            duration: "3 months (Summer 2024)",
            description:
                "Optimized the ‘People also bought’ carousel; it now recommends a forklift for every bulk purchase of feathers.",
            imgUrl: '/images/amazen.png'
        },
        {
            client: "FaceLook",
            duration: "4 sprints (Fall 2024)",
            description:
                "Added a feature that auto-likes your own posts for confidence. Engagement up 200%, self-esteem up 201%.",
            imgUrl: '/images/facelook.png'
        },
        {
            client: "Netflux",
            duration: "7 weeks (Winter 2025)",
            description:
                "Auto-plays only the recap you actually forgot. Credits now scroll at a readable pace—legal was… unconvinced.",
            imgUrl: '/images/netflux.png'
        }
    ];

    const parentStyle = {
        display: props.activePage === 'pastWork' ? 'flex' : 'none',
        justifyContent: 'center',
    }

    return (
        <div style={parentStyle}>
            <ul>
                {pastWork.map((work, index) => (
                    <li key={index}>
                        <h2>{work.client}</h2>
                        <p>Relationship Length: {work.duration}</p>
                        <p>{work.description}</p>
                    </li>

                ))}

            </ul>

        </div>

    )

}

export default Pastwork