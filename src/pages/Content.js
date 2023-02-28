import React from 'react';


function Content() {
    return (
        <>
            <div className="technical">
                <h1>About me</h1>
                <p className="text">I'm a final year Computer Science student passionate about full-stack languages and frameworks. I'm actively implementing these technologies into my own personal projects which I enjoy showing to friends and family. </p>

                <p className="text">In my free time I love playing badminton, walking my border collie, and exploring nifty cafes around Auckland.</p>
                <div className="space"></div><p className="text">Click on my image to connect with me on LinkedIn, or feel free to leave your contact details in the form below!</p>


                <div className="meskills"></div>

                <h1>Technical Skills</h1>
                <p className="text">Languages/Frameworks I have used extensively:</p>
                <div className="skills">
                    <img id="badge" alt="cs" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" className="firstimg"></img>
                    <img id="badge" alt="net" src="https://img.shields.io/badge/.net-512DB4?style=for-the-badge&logo=.net&logoColor=white"></img>
                    <img id="badge" alt="js" src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                    <img id="badge" alt="java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"></img>
                    <img id="badge" alt="html" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
                    <img id="badge" alt="css" src="https://img.shields.io/badge/css-%23E34F26.svg?style=for-the-badge&logo=css3&logoColor=white"></img>
                    <img id="badge" alt="react" src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="firstimg"></img>
                    <img id="badge" alt="sql" src="https://img.shields.io/badge/sql-orange?style=for-the-badge&logo=sql&logoColor=black"></img>
                </div>

                <div className="spaceskill"></div>

                <p className="text">Languages/Frameworks I have prior experience in:</p>

                <div className="skills">
                    <img id="badge" alt="c" src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" className="firstimg"></img>
                    <img id="badge" alt="c-hardware" src="https://img.shields.io/badge/c (Hardware)-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"></img>
                    <img id="badge" alt="matlab" src="https://img.shields.io/badge/MATLAB-99230f?style=for-the-badge&logoColor=white"></img>
                </div>


                <div className="meskills"></div>

                <h1>Projects</h1>
                <div class="containerprojects">
                    <div class="box">
                        <h3>Personal Website / Portfolio</h3>           
                        
                        <img id="badge-proj" alt="react" src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="firstimg"></img>
                        <img id="badge-proj" alt="cs" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" className="firstimg"></img>
                        <img id="badge-proj" alt="js" src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>

                        <h5>August 2022</h5>
                        <p className="projectText">My personal website was my way of showcasing my projects, displaying my skills, as well as well as being able to utilise Javascript packages like Typewriter.js, Email.js, and more.
                            <br></br><br></br>This website is linked to my C# API repository (the last person who submitted the contact form is displayed in the footer).
                            <br></br><br></br>Click on the sun icon to toggle dark and light mode!</p>

                    </div>
                    <div class="box">
                        <h3>F1 Stock App </h3>

                        <img id="badge-proj" alt="react" src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="firstimg"></img>
                        <img id="badge-proj" alt="cs" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" className="firstimg"></img>
                        <img id="badge-proj" alt="js" src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                        <img id="badge-proj" alt="sql" src="https://img.shields.io/badge/sql-orange?style=for-the-badge&logo=sql&logoColor=black"></img>

                        <h5>December 2022 - (in-development / minimum viable product)</h5>
                        <p className="projectText">I decided to build a personal project that would be based around my interests/hobbies. Being a huge F1 fan, I was always wondered if a sponsor's presence on the car (in the form of a sticker), would have any impact on its share price.
                            <br></br><br></br>This website allows you to see a graph of the closing price for each sponsor, and visual cues provide insight as to how much the price increased or decreased after each race.
                            <br>
                            </br>
                            <br>
                            </br> Please feel free to visit the website here: <a target="_blank" rel="noopener noreferrer" href="https://saif3n.github.io/stockapp/">https://saif3n.github.io/stockapp/</a>
                        </p>
                        

                    </div>

                    <div class="box">
                        <h3>Central C# Endpoint Repository</h3>

                        <img id="badge-proj" alt="cs" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" className="firstimg"></img>
                        <img id="badge-proj" alt="net" src="https://img.shields.io/badge/.net-512DB4?style=for-the-badge&logo=.net&logoColor=white"></img>
                        <img id="badge-proj" alt="sql" src="https://img.shields.io/badge/sql-orange?style=for-the-badge&logo=sql&logoColor=black"></img>

                        <h5>July 2022</h5>
                        <p className="projectText">My central C# endpoint repository is to showcase some of my endpoints I use in my personal projects.
                            <br></br><br></br>All endpoints are written in C#, most make use of Entity Framework Core to interact with a database. Some endpoints will also implement an authentication handler, utilising password encryption.
                            <br>
                            </br>
                            <br>
                            </br>Feel free to look at my endpoints here: <a target="_blank" rel="noopener noreferrer" href="https://github.com/Saif3n/publiccs">https://github.com/Saif3n/publiccs</a>
                        </p>
                        
                    </div>
                    <div class="box">
                        <h3>Crowdsource App / Website</h3>

                        <img id="badge-proj" alt="react" src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB" className="firstimg"></img>
                        <img id="badge-proj" alt="cs" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" className="firstimg"></img>
                        <img id="badge-proj" alt="js" src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></img>
                        <img id="badge-proj" alt="sql" src="https://img.shields.io/badge/sql-orange?style=for-the-badge&logo=sql&logoColor=black"></img>

                        <h5>December 2022 - (in-development)</h5>
                        <p className="projectText">This project collects responses, and then aggregates this data. Once aggregated, the data is displayed on the website to view.
                            <br></br><br></br> I have deliberately obfuscated the purpose of this project as it's still being developed. <br></br><br></br>Watch this space to find out more! </p>
                        
                    </div>
                </div>
            </div>

            <div className="space"></div>
            <br></br>


        </>
    );
}
export default Content;