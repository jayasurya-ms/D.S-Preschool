import '../style/Social.css'

function Social() {
    return (
        <aside className='fs-1 social'>
            <a href="https://wa.me/+918884033085?text=Hello!%20I%E2%80%99m%20contacting%20you%20from%20the%20school%20website.%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20school%20programs%2C%20admission%20process%2C%20and%20other%20details.%20Thank%20you!" className='div'>
            <div className='whatsapp'>
                <a className='a' href="https://wa.me/+918884033085?text=Hello!%20I%E2%80%99m%20contacting%20you%20from%20the%20school%20website.%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20school%20programs%2C%20admission%20process%2C%20and%20other%20details.%20Thank%20you!
                "><i className="fa-brands fa-whatsapp"></i></a>
                <p>Whatsapp</p>
            </div>
            </a>
            <a className='div' href="https://www.instagram.com/d.s_preschool_and_daycare?igsh=MWY1djBjeWM0ZWdjYw==">
            <div className='insta'>
                <a className='a' href="https://www.instagram.com/d.s_preschool_and_daycare?igsh=MWY1djBjeWM0ZWdjYw=="><i className="fa-brands fa-instagram"></i></a>
                <p>Instagram</p>
            </div>
            </a>
            <a className='div' href="https://www.facebook.com/share/1EFGiUhHd6/">
            <div className='facebook'>
                <a className='a' href="https://www.facebook.com/share/1EFGiUhHd6/"><i className="fa-brands fa-facebook"></i></a>
                <p>Facebook</p>
            </div>
            </a>
        </aside>
    )
}

export default Social