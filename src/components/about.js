import navbar from "./navbar";

const About = () => {
    

    function typewriter() {

                let completedText = `
                    I graduated from Northeastern University with a Computer Science Degree in Spring 2023.
                    <br></br>The most up to date information on languages/software I've used and classes I've taken can be found on the resume linked at the top of this page.
                    <br></br>You can also navigate to the projects page to see a list of projects I've worked on, with their associated github pages if applicable.`;

                let textShown = "";

                let i = 1;

                function type () {
                    setTimeout( function() {
                    document.getElementById("aboutText").innerHTML = textShown;
                    textShown = textShown.concat(completedText.charAt(i));
                    i++;

                    if (i <= completedText.length) {
                        type();
                    }

                    }, 25)

                }
                type();
                
    }

    return (
        <div>
            <div className="container" style={{paddingTop:"150px"}}>
            
                <h1 className="font-weight-bold" style={{fontfamily: 'Copperplate Gothic Light'}}>
                Hi, my name is Mathew Hirsch.
                </h1>

                <p id="aboutText" style={{fontfamily: 'Courier New, monospace', fontsize: 'large'}}>
                    {typewriter()}
                </p>
            </div>
        </div>
    )
}
export default About;