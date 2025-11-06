const Staff = (props) => {

    /****************************************
    *         DATA VARIABLES
    ***************************************/
    const staffArray = [
        {
            name: "Joe Ramirez",
            specialty: "DevOps Bard",
            about: `Hark! When pipelines do groan and pods do wail, I, Joe, take up my lyre of YAML and sing sweet deploys upon the clouded stage. I soothe the tempest of CI with charms of cache, and bid the gates of staging open like dawn’s first blush. Should metrics droop as wilted violets, I whisper incantations to autoscale, and lo—uptime doth strut like a peacock in fine hose, proud and most continuous.`,
            img: '/images/staffMonster.png'
        },
        {
            name: "Mia Park",
            specialty: "CSS Sorcerer",
            about: `Good gentles, attend: I bend the will of wayward margins as a falconer tames the wind. With but a flick of rem and an earnest glance of flex, I do center that which hath never been centered since Rome was young. Colours obey me; gradients swoon; and Tailwind itself, though tempest-tongued, doth yield to my declarations most important. Behold, the layout stands fair and responsive, as if Titania herself had trimmed it with moonlight.`,
            img: '/images/staffMonster.png'
        },
        {
            name: "Devon Carter",
            specialty: "Backend Alchemist",
            about: `By subtle arts I turn base endpoints into gold, distilling secrets from databases as a vintner teases wine from grapes. My regex, hydra-headed and fearsome, bites bugs in twain whilst sparing nary a stray whitespace. The APIs I forge flow smoother than iambic verse, and logs, once cryptic as a sphinx at midnight, now sing truth like a choir of honest var declarations. Pray, commit and be at peace; the server purrs like a well-bribed cat.`,
            img: '/images/staffMonster.png'
        },
        {
            name: "Avery Nguyen",
            specialty: "Bug Whisperer",
            about: `Soft! What crash through yonder stack trace breaks? ’Tis but a null, and Avery is the sun to banish night from memory’s malaise. I parley with exceptions in tones most courteous, offering warm tea and a single step-through in the debugger. Thus pacified, the gremlins do confess their mischief; I patch with grace, refactor with mercy, and send the code to production, where it doth behave like a gentleman at court—mostly sober, and entirely loggable.`,
            img: '/images/staffMonster.png'
        },
        {
            name: "Zoe Chen",
            specialty: "Prompt Wrangler",
            about: `Methinks the gears of thought do turn within my silicon squires; I bid twelve chat-oracles speak, yet only one reply shall gallop forth, concise and true. With careful tokens and a sprinkle of context rare, I charm these quills of lightning to write tests unasked and docs most readable. Should the models wax poetic, I leash their rhyme; should they wander, I compass them home. Thus do I conjure sense from noise, and ship before the rooster crow.`,
            img: '/images/staffMonster.png'
        }
    ];


    /****************************************
    *         STYLE VARIABLES
    ***************************************/
    const parentStyle = {
        display: props.activePage === 'staff' ? 'block' : 'none',
        marginTop: '40px',
    }

    const h1Style = {
        marginBottom: '3px',
    }

    const pStyle = {
        margin: '3px',
        fontSize: '1rem',
    }

    return (
        <div style={parentStyle}>
        <h1 style={h1Style}>Our team of excellent leaders</h1>
        <p style={pStyle}>who are totally actually qualified and not nepo babies</p>

        <ul>
            {staffArray.map((staff, index) => (
                <li key={index} className="staff">
                    <img src={staff.img}></img>
                    <h2>{staff.name}</h2>
                    <p className="speciality">Speciality: {staff.specialty}</p>
                    <p className="about">About: {staff.about}</p>
                </li>
            ))}
        </ul>
        
        </div>

    )

}

export default Staff