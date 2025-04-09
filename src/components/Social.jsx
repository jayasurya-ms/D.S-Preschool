import '../style/Social.css'

function Social() {
    return (
        <aside className='fs-1 social'>
            <div className='whatsapp'>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <p>Whatsapp</p>
            </div>
            <div className='insta'>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <p>Instagram</p>
            </div>
            <div className='facebook'>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <p>Facebook</p>
            </div>
        </aside>
    )
}

export default Social