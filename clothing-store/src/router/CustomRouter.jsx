import React from "react";
import Index from "../Pages/Index";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Products from "../Pages/Products";
// import Basket from "../Pages/Basket";
import ReadMore from "../Pages/ReadMore";
import Cart from "../Pages/Cart";
import Fav from "../Pages/Fav";

const CustomRouter = [
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    // {
    //     path: '/products',
    //     element: <Products />
    // },
    {
        path: '/fav',
        element: <Fav/>
    },
    {
        path: '/readmore/:id',
        element: <ReadMore />
    },
    {
        path: '/about',
        element: <About />
    },
    // {
    //     path: '/cart',
    //     element: <Cart />
    // },
]

export default CustomRouter;