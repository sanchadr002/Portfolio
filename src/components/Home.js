// import necessary dependencies
import Project from './projects/Project'
import About from './about/About'

// home component
const Home = (props) => {
    return (
        <>
            <div style={{
                backgroundColor: '#c6ddf2',
                fontFamily: "trebuchet ms",
            }}>
                <div style={{
                    padding: '1em'
                }}
                
                >
                    <About />
                </div>
                <div>
                    <Project />
                </div>
            </div>
        </>
    )
}

export default Home