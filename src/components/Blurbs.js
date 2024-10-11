
function Blurbs({ data }) {
    const getStars = (number) => {
        let stars = [];
        for (let i = 0; i < number; i++) {
            stars.push(<img src={require("../images/star.svg").default} alt="" width={20} /> );
        }
        console.log(stars);
        return stars;
    }

    const allBlurbs = data.map(item => {
        return (
            <div className="blurb-card">
                <div>{getStars(item.rating)}</div>
                <img className="blurb-image" src={require(`../images/${item.image}`)} alt="" />
                <h5>{item.name}</h5>
                <p>{item.comment}</p>
            </div>
        );
    })

    return allBlurbs;
}

export default Blurbs;