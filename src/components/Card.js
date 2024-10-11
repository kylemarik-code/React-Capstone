
function Card({ data }) {
    const allCards = data.map(item => {
        return (
            <div className="card">
                <img className="card-image" src={require(`../images/${item.image}`)} alt="" />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <h6>{item.price}</h6>
                <h6>Order Delivery =></h6>
            </div>
        );
    })

    return allCards;
}

export default Card;