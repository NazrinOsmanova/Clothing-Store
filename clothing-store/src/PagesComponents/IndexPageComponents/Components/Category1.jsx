import React from 'react';
import { NavLink } from "react-router-dom";
import '../Styles/Category1Style.css';

const Category1 = () => {
    return (
        <section className='section7'>
            <div>
                <NavLink to="/products?gender=woman">WOMEN</NavLink>
                <img src="https://staticpages.mngbcn.com/visual/localhost/images/2024/04/she_landings_usa_faldas_2604.jpg?imwidth=505&imdensity=2&impolicy=set_13" alt="sekil" />
            </div>
            <div>
                <NavLink to="/products?gender=mann">MEN</NavLink>
                <img src="https://staticpages.mngbcn.com/visual/localhost/images/2024/04/he_landings_lino_1204.jpg?imwidth=1012&imdensity=2&impolicy=set_23" alt="sekil" />
            </div>
        </section>
    );
}

export default Category1;
