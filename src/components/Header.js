const Title = () => (
    <div className="logo">
        <img src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" alt="" />
    </div>
)

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />        
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

export default HeaderComponent;