import React from 'react';


function Content() {
    return (
        <>
            <div className="technical">
                <h1>About me</h1>
                <p className="text">I'm a penultimate Computer Science student passionate about full-stack languages and frameworks. I'm actively implementing these technologies into my own personal projects which I enjoy showing to friends and family. </p>
                <div className="space"></div>
                <div className="space"></div>
                <p className="text">In my free time I love playing badminton, walking my border collie, and exploring nifty cafes around Auckland.</p>
                <div className="space"></div><p className="text">Click on my image to connect with me on LinkedIn, or feel free to leave your contact details in the form below!</p>


                <div className="space"></div>
                <div className="meskills"></div>

                <h1>Technical Skills</h1>
                <p className="text">Languages/Frameworks I can code comfortably in:</p>
                <div className="skills">
                    <img id="badge" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" className="firstimg"></img>

                    <img id="badge" src="https://img.shields.io/badge/.net-512DB4?style=for-the-badge&logo=.net&logoColor=white"></img>
                    <img id="badge" src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img id="badge" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"></img>
                    <img id="badge" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img id="badge" src="https://img.shields.io/badge/css-%23E34F26.svg?style=for-the-badge&logo=css3&logoColor=white"></img>

                </div>
                <div className="spaceskill"></div>
                <p className="text">Languages/Frameworks I have prior experience in:</p>
                <div className="skills">
                    <img id="badge" src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" className="firstimg"></img>
                    <img id="badge" src="https://img.shields.io/badge/c (Hardware)-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"></img>
                    <img id="badge" src="https://img.shields.io/badge/MATLAB-99230f?style=for-the-badge&logoColor=white"></img>
                </div>
                <div className="spaceskill"></div>
                <p className="text">Currently learning/using:</p>

                <div className="skills">

                    <img id="badge" src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="firstimg"></img>
                </div>

            </div>

            <div className="space"></div>
            <br></br>

            
        </>
    );
}
export default Content;