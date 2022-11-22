import './styles.css';

const Header = () => {
    return (
        <header className='header d-flex align-items-center justify-content-between p-3 gap-5'>
            <div className='header__logo-container d-flex align-items-center gap-3'>
                <div className='header__logo-container__logo'>
                    <img src='/logo.png' alt='Monetaria'/>
                </div>
                <div className='header__name d-flex flex-column'>
                    <h4 className='text-light fs-5 my-0'>monetaria</h4>
                    <p className='text-secondary fs-6 my-0' style={{letterSpacing: '0.3em'}}>protocol</p>
                </div>
            </div>
            <div className='header__links d-flex ms-auto me-5'>
                <a className='ms-auto text-white text-decoration-none px-4' href='/'>Governance</a>
                <a className='ms-auto text-white text-decoration-none px-4' href='/'>Docs</a>
                <a className='ms-auto text-white text-decoration-none px-4' href='/'>Security</a>
                <a className='ms-auto text-white text-decoration-none ps-4' href='/'>FAQ</a>
            </div>
            <div className='header__button'>
                <input className='text-dark bg-white rounded py-2 px-3 fw-bold' type='button' value='Launch App'/>
            </div>
        </header>
    );
};

export default Header;
