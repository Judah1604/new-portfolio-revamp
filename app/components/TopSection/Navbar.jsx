

const Navbar = () => {
    const navItems = [
        {title: 'About', lowerCased: 'about'},
        { title: 'Projects', lowerCased: 'projects'},
        { title: 'Contact', lowerCased: 'contact'}
    ]

    return (
        <div className="navbar navbar-expand-lg">
            <div className="navbar-nav nav">
                {
                    navItems.map((navItem, index) => (
                        <div className="nav-item" key={index}>
                            <a href={"#" + navItem.lowerCased} className="nav-link">{navItem.title}</a>
                            <div className="hover-effect"></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar