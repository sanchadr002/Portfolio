// import necessary dependencies
import {Card, Image, Accordion, Container} from 'react-bootstrap'
import photo from '../../me_and_homeless.jpg'

// About component
const About = (props) => {
    return(
        <Container style={{
                maxWidth: "40%",
                margin: "auto",
                display: "flex",
                alignItems: "center",
                padding: "1em",
                boxShadow: "0px 0px 10px 5px #5f6b76",
                backgroundColor: "#425061",
                borderRadius: "1em"
            }}
            fluid
        >
            <Container fluid>
            <Image 
                src={photo} 
                fluid="true" 
                roundedCircle="true" 
                style={{
                    maxWidth: "50%",
                    margin: "auto",
                    display: "block",
                    boxShadow: "0px 0px 10px 5px #22283b"
                }}
            />
            <br/>
            <Card 
                className="text-left" 
                style={{
                    backgroundColor: '#22283b',
                    borderRadius: "1em",
                    margin: "auto",
                }}
            >
                <Card.Body>
                    {/* <ul style={{
                        listStylePosition: "inside",
                        listStyleType: "circle",
                        backgroundColor: "almond",
                        padding: "1em"
                    }}> */}
                    <p style={{textAlign: "center"}}>
                        <h3 style={{fontWeight: "bold", color: "#c1cdd2"}}>Adrian Sanchez | Software Engineer</h3>
                    </p>
                    <Accordion defaultActiveKey="0" style={{
                        padding: "1em",
                        backgroundColor: "#5f6b76",
                        borderRadius: "1em"
                    }}>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Tech</Accordion.Header>
                            <Accordion.Body>
                                React<br/>
                                Node<br/>
                                Express<br/>
                                Liquid<br/>
                                MongoDB<br/>
                                Python<br/>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>About me</Accordion.Header>
                            <Accordion.Body>
                                Hi there! My name is Adrian Sanchez, and I'm a software engineer.
                                <br/><br/>
                                What excites me most about software engineering is how it's always changing. 
                                In my spare time, I enjoy: 
                                <li>reading,</li><br/>
                                <li>listening to music,</li><br/>
                                <li>learning new skills,</li><br/>
                                <li>and playing games (Magic: The Gathering, Dungeons & Dragons, and Elden Ring to name a few).</li>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Get in touch</Accordion.Header>
                            <Accordion.Body>
                                LinkedIn: <Card.Link href="https://www.linkedin.com/in/sanchadr/">/sanchadr</Card.Link><br/>
                                GitHub: <Card.Link href="https://github.com/sanchadr002">/sanchadr002</Card.Link><br/>
                                Gmail: sanchadr002@gmail.com
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* </ul> */}
                </Card.Body>
            </Card>
            </Container>
        </Container>
        
    )
}

export default About