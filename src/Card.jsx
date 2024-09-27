import nftPic from "./assets/images.png"


function Card(){
    return(
        <div className="cardBox">
            <img className="card_img" src={nftPic} alt="" />
            <h2 className="card_h2">Muhammad Elham</h2>
            <p className="card_p">The Man was Changing Era of Era</p>
        </div>
    );
}
export default Card