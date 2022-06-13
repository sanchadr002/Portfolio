// import necessary dependencies
import { Card, CardGroup, Accordion, Container, Ratio } from 'react-bootstrap'

// project component
const Project = (props) => {
    const cardStyling = {
        backgroundColor: 'lightblue',
        boxShadow: '0px 0px 10px 5px #152238',
        margin: "1%",
        padding: "1%",
        backgroundColor: "#425061",
        borderRadius: "1em"
    }

    const headingStyling = {
        color: "#c1cdd2",
        textDecoration: "underline",
        textAlign: "center"
    }

    const bodyStyling = {
        backgroundColor: "#22283b", 
        borderRadius: "1em"
    }

    const textStyling = {
        color: "#22283b"
    }

    const footerStyling = {
        backgroundColor: "#c1cdd2",
        borderRadius: "1em",
        textAlign: "center"
    }

    const accordionStyling = {
        padding: "1em",
        backgroundColor: "#5f6b76",
        borderRadius: "1em",
    }

    const accBodyStyling = {
        backgroundColor: "#9fb4cc",
    }

    return(
        <Container style={{margin: "auto"}} fluid>
            <CardGroup>
                <Card style={cardStyling}>
                    <Ratio aspectRatio="4x3">
                        <iframe
                            src="https://www.youtube.com/embed/iNJH4FCmlvU" 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                    </Ratio>
                    <Card.Body style={bodyStyling}>
                        <Card.Title style={headingStyling}>Magic: The Gathering Deck Builder</Card.Title>
                        <Accordion defaultActiveKey="0" style={accordionStyling}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Project Summary</Accordion.Header>
                                <Accordion.Body style={accBodyStyling}>
                                    <Card.Text style={textStyling}>
                                        An Express CRED application built as the second project of General Assembly's SEI course using Liquid as a template language.<br/>
                                        Users can search for cards by various parameters, add cards to a deck, edit decks by removing cards, and delete decks.<br/>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Project Reflections</Accordion.Header>
                                <Accordion.Body style={accBodyStyling}>
                                    <Card.Text>
                                        <h6 style={{fontWeight: "bold"}}>What was your favorite part of this project?</h6>
                                            <p>
                                                Working with the Scryfall API was a 
                                                blast, and I really enjoyed figuring out 
                                                how to receieve the necessary data from
                                                the API calls.<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What was most challenging about it?</h6>
                                            <p>
                                                I struggled with figuring out how to add
                                                cards to a deck that technically hadn't
                                                been created yet. I worked around this by
                                                creating an empty array in the deck
                                                controller files that would have card 
                                                object IDs added to it, and would then 
                                                be added to the Deck model when the user 
                                                created the deck.<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What did you learn?</h6>
                                            <p>
                                                I learned the importance of learning the 
                                                limitations of the technology you're 
                                                using before starting to plan out your 
                                                application.<br/>
                                                The way I set up my app's forms and 
                                                functionality would be much better 
                                                suited for tech like React.js. Adding 
                                                checkboxes and a submission button for 
                                                adding cards and editing decks would 
                                                likely provide a more fluid user 
                                                experience, and would make more sense 
                                                with how a template language like Liquid 
                                                works.<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What's next for the project?</h6>
                                            <p>
                                                I will likely be rebuilding this app in 
                                                the MERN stack, since the user 
                                                experience and functionality I want is 
                                                expressed best in that tech stack. 
                                            </p>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                    <Card.Footer style={footerStyling}>
                        <Card.Link href="https://github.com/sanchadr002/Project-2">Check out the project repo on GitHub</Card.Link>
                    </Card.Footer>
                </Card>
                <Card style={cardStyling}>
                    <Ratio aspectRatio="4x3">
                        <iframe 
                            src="https://www.youtube.com/embed/dAn7un9-s2A" 
                            title="YouTube video player"  
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        ></iframe>
                    </Ratio>
                    <Card.Body style={bodyStyling}>
                        <Card.Title style={headingStyling}>Nutricart</Card.Title>
                        <Accordion defaultActiveKey="0" style={accordionStyling}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Project Summary</Accordion.Header>
                                <Accordion.Body style={accBodyStyling}>
                                    <Card.Text style={textStyling}>
                                        A MERN stack grocery shopping app built as the 
                                        third project for General Assembly's SEI 
                                        course focused on the convenience of allowing 
                                        users to shop by recipe.<br/>
                                        Users can search for recipes and add that 
                                        recipe's entire ingredient list to their 
                                        shopping cart, or add items individually.<br/>
                                        Users can also search for individual grocery 
                                        items and add those to their cart.
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Project Reflections</Accordion.Header>
                                <Accordion.Body style={accBodyStyling}>
                                    <Card.Text>
                                        <h6 style={{fontWeight: "bold"}}>What was your favorite part of this project?</h6>
                                            <p>
                                                My favorite part was getting to work with
                                                a group. My team and I communicated
                                                throughout all parts of the project, 
                                                making sure to let everyone know what we
                                                were each working on and had already
                                                completed.<br/>
                                                We also did quite a bit of pair- and
                                                mob-programming. This was a great
                                                experience, as I got to see how other
                                                people think and solve problems. Not only do
                                                bugs get solved faster, but I learned so much from
                                                working with others in this manner.<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What was most challenging about it?</h6>
                                            <p>
                                                The most challenging part actually had less
                                                to do with the technical aspects of this project,
                                                and was more about learning how to ask for help and
                                                the importance of doing so in a field like
                                                software engineering.<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What did you learn?</h6>
                                            <p>
                                                With this project, I learned that I can learn
                                                anything by doing! While working on this project, I
                                                realized that I was gaining a better understanding
                                                of React.js concepts that I was struggling with prior.
                                                My confidence gained from this helped push me through the
                                                last part of the course.
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What's next for the project?</h6>
                                            <p>
                                                As of this moment, there aren't any plans within
                                                the group to continue work on this project.
                                            </p>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                    <Card.Footer style={footerStyling}>
                        <Card.Link href="https://github.com/cloudedl/Grocery-Client">Check out the project repo on GitHub</Card.Link>
                    </Card.Footer>
                </Card>
                <Card style={cardStyling}>
                <Ratio aspectRatio="4x3">
                    <iframe 
                        src="https://www.youtube.com/embed/Dd2aX4pXBrY" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </Ratio>
                    <Card.Body style={bodyStyling}>
                        <Card.Title style={headingStyling}>Home Hero</Card.Title>
                        <Accordion defaultActiveKey="0" style={accordionStyling}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Project Summary</Accordion.Header>
                                <Accordion.Body style={accBodyStyling}>
                                    <Card.Text style={textStyling}>
                                        A gameified MERN stack to-do list app created as the fourth and final 
                                        project of General Assembly's SEI course that aims to help users get 
                                        their chores done.<br/>
                                        Users can create a player character that has its own customizable home 
                                        area.<br/>
                                        By completing tasks they've created, users earn in-app coins that they 
                                        can use to buy items at the in-app store to display in their character's 
                                        home area.
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Project Reflections</Accordion.Header>
                                <Accordion.Body style={accBodyStyling}>
                                    <Card.Text>
                                        <h6 style={{fontWeight: "bold"}}>What was your favorite part of this project?</h6>
                                            <p>
                                                I really enjoyed working with a group again, getting to design a 
                                                game-esque app, and creating an application that I could
                                                realistically find helpful.<br/>
                                                Pair- and mob-programming once again proved to be amazing
                                                tools: we solved issues faster and I got see the problem-solving thought processes of my fellow team members.
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What was most challenging about it?</h6>
                                            <p>
                                                My group and I had a hard time figuring out how to
                                                pass the props for the player character to the correct
                                                component.<br/>
                                                What we ended up doing was creating a blank character on user
                                                sign-up that the user would then give a name and class. From
                                                the user-side, this looks like creating the character, but
                                                in actuality, the user is editing a character that already exists.<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What did you learn?</h6>
                                            <p>
                                                After this project, I've become much more comfortable working
                                                with promises/promise chains. They are a big part of our app's 
                                                functionality, and getting the whole chain to work as needed was 
                                                a struggle that improved my comprehension of them!<br/>
                                            </p>
                                        <h6 style={{fontWeight: "bold"}}>What's next for the project?</h6>
                                            <p>
                                                My team and I want to add a little game/home area visual 
                                                component for the Home Hero, where their home will be displayed 
                                                with the various decorations that a user can buy in the app's store.
                                            </p>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                    <Card.Footer style={footerStyling}>
                        <Card.Link href="https://github.com/jscodeguy/capstone-client">Check out the project repo on GitHub</Card.Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    )
}

export default Project