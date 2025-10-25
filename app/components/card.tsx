import anp from "../assets/anp.jpg"

function Card() {
    return (
    <div className="card">
        <img className="card-image" alt="default image" src={anp}></img>
        <h2>Title Here</h2>
        <p>I code applications and read books</p>
    </div>
    )
}

export default Card