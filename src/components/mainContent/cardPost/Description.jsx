
export const Description = () => {
    return (
        <div className="description">
            <div className="description_icons">
                <div className="description_icons_left">
                    <span class="material-symbols-outlined">favorite</span>
                    <img src="../../../../public/charlar.png" alt="menssage" width="30px" />
                    <span class="material-symbols-outlined">send</span>
                </div>
                <div className="descripton_icons_rigth">
                    <span class="material-symbols-outlined">bookmark</span>
                </div>
            </div>
            <div className="description_likes">
                <img src="../../../../public/opa.jpg" alt="like" width="30px" />
                <span> Les gusta a <b>getbitcode y 2,459 personas más</b></span>
            </div>
            <div className="description_description">
                <span><b>name</b> @learn_programo @creative__programmer <a href="#">ver más</a></span>
            </div>
            <div className="description_comment"></div>
            <div className="description_date"></div>
        </div>
    )
}
