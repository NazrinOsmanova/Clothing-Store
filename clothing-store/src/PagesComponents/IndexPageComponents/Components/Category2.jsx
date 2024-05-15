import React from 'react'
import '../Styles/Category2Style.css';
import { NavLink } from "react-router-dom";

const Category2 = () => {
    return (
        <>
            <section className='section18'>
                <h4>Choose Your Style: Explore Our Featured Brands!</h4>
                <div className="items">
                    <div className="item">
                        <NavLink to="/products?brand=bershka">
                            <img src="https://static.bershka.net/4/static/itxwebstandard/images/test/company/company02.jpg?20231127020006" alt="BrandLogo" />
                        </NavLink>
                        <NavLink to="/products?brand=zara">
                            <img src="https://assets-global.website-files.com/64830736e7f43d491d70ef30/64bfca456e3a5a803618a25d_64a5802512ee9430c0eafec6_64a2d408d2249c6450b8989f_zara-large.webp" alt="BrandLogo" />
                        </NavLink>
                    </div>
                    <div className="item">
                        <NavLink to="/products?brand=mango">
                            <img src="https://www.ecotextile.com/images/stories/2020/February/Mango.jpg" alt="BrandLogo" />
                        </NavLink>
                        <NavLink to="/products?brand=pull&bear">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/PullandBearAgora.jpg" alt="BrandLogo" />
                        </NavLink>
                    </div>
                </div>
                <h4>Discover Top Brands: Elevate Your Wardrobe Today!</h4>
            </section>
        </>
    )
}

export default Category2