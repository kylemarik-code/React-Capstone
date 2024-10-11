function About() {
    return (
        <div id="About-section" className="about container">
            <div className="about-info-container">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States
                    to pursue their shared dream of owning a restaurant. <br /> <br />
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.
                    Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond
                    classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="about-images-container">
                <img className="about-image about-image-1" src={require("../images/ownersa.jpg")} alt="The owners of the restaurant, Mario and Adrian"></img>
                <img className="about-image about-image-2" src={require("../images/ownersb.jpg")} alt="The owners of the restaurant, Mario and Adrian"></img>
            </div>
        </div>
    );
}

export default About;