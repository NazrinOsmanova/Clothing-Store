import React, { useState, useEffect } from 'react';
import './styles/ProductsStyle.css'
import { NavLink, useLocation } from "react-router-dom"
import { HiOutlineChevronDown } from "react-icons/hi";
import { FaStar, FaHeart } from "react-icons/fa";

const Products = ({cartItems, addToCart}) => {
  
    const [data, setData] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const [categoryShow, setCategoryShow] = useState(true);
    const [brandShow, setBrandShow] = useState(true);
    const [sizeShow, setSizeShow] = useState(true);
    const [genderShow, setGenderShow] = useState(true);

    const [womanChecked, setWomanChecked] = useState(false);
    const [manChecked, setManChecked] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const gender = queryParams.get('gender');
        const brand = queryParams.get('brand');

        let url = 'https://662a6ef167df268010a3e9dd.mockapi.io/api/v1/products';
        let queryString = '';

        if (gender) {
            queryString += `gender=${gender}`;
        }

        if (brand) {
            queryString += queryString ? `&brand=${brand}` : `brand=${brand}`;
        }

        if (queryString) {
            url += `?${queryString}`;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [location.search]);


    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const gender = queryParams.get('gender');

        if (gender === 'woman') {
            setWomanChecked(true);
            setManChecked(false);
        } else if (gender === 'mann') {
            setWomanChecked(false);
            setManChecked(true);
        } else {
            setWomanChecked(false);
            setManChecked(false);
        }
    }, [location.search]);

    const toggleDropdown = (dropdown) => {
        switch (dropdown) {
            case 'category':
                setCategoryShow(!categoryShow);
                break;
            case 'brand':
                setBrandShow(!brandShow);
                break;
            case 'size':
                setSizeShow(!sizeShow);
                break;
            case 'gender':
                setGenderShow(!genderShow);
                break;
            default:
                break;
        }
    };

    const handleBrandToggle = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const handleCategoryToggle = (category) => {
        if (selectedCategory.includes(category)) {
            setSelectedCategory(selectedCategory.filter(c => c !== category));
        } else {
            setSelectedCategory([...selectedCategory, category]);
        }
    };

    const handleGenderToggle = (gender) => {
        const lowerCaseGender = gender.toLowerCase();
        if (selectedGender.includes(lowerCaseGender)) {
            setSelectedGender(selectedGender.filter(g => g !== lowerCaseGender));
        } else {
            setSelectedGender([...selectedGender, lowerCaseGender]);
        }
    };

    const handleSizeToggle = (size) => {
        if (selectedSizes.includes(size)) {
            setSelectedSizes(selectedSizes.filter(s => s !== size));
        } else {
            setSelectedSizes([...selectedSizes, size]);
        }
    };

    useEffect(() => {
        const filteredByBrand = selectedBrands.length === 0 ? data : data.filter(product => selectedBrands.includes(product.brand.toLowerCase()));
        const filteredByCategory = selectedCategory.length === 0 ? filteredByBrand : filteredByBrand.filter(product => selectedCategory.includes(product.category.toLowerCase()));
        const filteredByGender = selectedGender.length === 0 ? filteredByCategory : filteredByCategory.filter(product => selectedGender.includes(product.gender.toLowerCase()));
        const filteredBySize = selectedSizes.length === 0 ? filteredByGender : filteredByGender.filter(product => {
            if (product.sizes && product.sizes.length > 0) {
                for (let i = 0; i < product.sizes.length; i++) {
                    if (selectedSizes.includes(product.sizes[i].toLowerCase())) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        });
        setFilteredProducts(filteredBySize);
    }, [selectedBrands, selectedCategory, selectedGender, selectedSizes, data]);

    return (
        <>
            <main>
                <aside>
                    <form action="" method="get">
                        <div className="category">
                            <div className="up">
                                <p>Category</p>
                                <HiOutlineChevronDown onClick={() => toggleDropdown('category')} />
                            </div>
                            {
                                categoryShow &&
                                <div className="down">
                                    <div className="categoryName">
                                        <input type="checkbox" id="skirtCheckbox" name="category" value="skirt" onChange={() => handleCategoryToggle("skirt")} />
                                        <label htmlFor="skirtCheckbox">Skirt</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="shirtCheckbox" name="category" value="shirt" onChange={() => handleCategoryToggle("shirt")} />
                                        <label htmlFor="shirtCheckbox">Shirt</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="hatCheckbox" name="category" value="hat" onChange={() => handleCategoryToggle("hat")} />
                                        <label htmlFor="hatCheckbox">Hat</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="jeansCheckbox" name="category" value="jeans" onChange={() => handleCategoryToggle("jeans")} />
                                        <label htmlFor="jeansCheckbox">Jeans</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="dressCheckbox" name="category" value="dress" onChange={() => handleCategoryToggle("dress")} />
                                        <label htmlFor="dressCheckbox">Dress</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="glassesCheckbox" name="category" value="glasses" onChange={() => handleCategoryToggle("glasses")} />
                                        <label htmlFor="glassesCheckbox">Sunglasses</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="accessoriesCheckbox" name="category" value="accessories" onChange={() => handleCategoryToggle("accessories")} />
                                        <label htmlFor="accessoriesCheckbox">Accessories</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="jacketCheckbox" name="category" value="jacket" onChange={() => handleCategoryToggle("jacket")} />
                                        <label htmlFor="jacketCheckbox">Jacket</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="shoesCheckbox" name="category" value="shoes" onChange={() => handleCategoryToggle("shoes")} />
                                        <label htmlFor="shoesCheckbox">Shoes</label>
                                    </div>
                                    <div className="categoryName">
                                        <input type="checkbox" id="beltCheckbox" name="category" value="belt" onChange={() => handleCategoryToggle("belt")} />
                                        <label htmlFor="beltCheckbox">Belt</label>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="brand">
                            <div className="up">
                                <p>Brand</p>
                                <HiOutlineChevronDown onClick={() => toggleDropdown('brand')} />
                            </div>
                            {
                                brandShow &&
                                <div className="down">
                                    <div className="brandName">
                                        <input type="checkbox" id="zaraCheckbox" name="brand" value="zara" onChange={() => handleBrandToggle("zara")} />
                                        <label htmlFor="zaraCheckbox">Zara</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="bershkaCheckbox" name="brand" value="bershka" onChange={() => handleBrandToggle("bershka")} />
                                        <label htmlFor="bershkaCheckbox">Bershka</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="pull&bearCheckbox" name="brand" value="pull&bear" onChange={() => handleBrandToggle("pull&bear")} />
                                        <label htmlFor="pull&bearCheckbox">Pull&Bear</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="mangoCheckbox" name="brand" value="mango" onChange={() => handleBrandToggle("mango")} />
                                        <label htmlFor="mangoCheckbox">Mango</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="levi'sCheckbox" name="brand" value="levi's" onChange={() => handleBrandToggle("levi's")} />
                                        <label htmlFor="levi'sCheckbox">Levi's</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="nikeCheckbox" name="brand" value="nike" onChange={() => handleBrandToggle("nike")} />
                                        <label htmlFor="nikeCheckbox">Nike</label>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="size">
                            <div className="up">
                                <p>Size</p>
                                <HiOutlineChevronDown onClick={() => toggleDropdown('size')} />
                            </div>
                            {
                                sizeShow &&
                                <div className="down">
                                    <div className="brandName">
                                        <input type="checkbox" id="xsCheckbox" name="size" value="xs" onChange={() => handleSizeToggle("xs")} />
                                        <label htmlFor="xsCheckbox">XS</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="sCheckbox" name="size" value="s" onChange={() => handleSizeToggle("s")} />
                                        <label htmlFor="sCheckbox">S</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="mCheckbox" name="size" value="m" onChange={() => handleSizeToggle("m")} />
                                        <label htmlFor="mCheckbox">M</label>
                                    </div>
                                    <div className="brandName">
                                        <input type="checkbox" id="lCheckbox" name="size" value="l" onChange={() => handleSizeToggle("l")} />
                                        <label htmlFor="lCheckbox">L</label>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="gender">
                            <div className="up">
                                <p>Gender</p>
                                <HiOutlineChevronDown onClick={() => toggleDropdown('gender')} />
                            </div>
                            {
                                genderShow &&
                                <div className="down">
                                    <div className="genderName">
                                        <input type="checkbox" id="womanCheckbox" name="gender" value="woman" onChange={() => handleGenderToggle("woman")} checked={womanChecked} />
                                        <label htmlFor="womanCheckbox">Woman</label>
                                    </div>
                                    <div className="genderName">
                                        <input type="checkbox" id="manCheckbox" name="gender" value="mann" onChange={() => handleGenderToggle("mann")} checked={manChecked} />
                                        <label htmlFor="manCheckbox">Man</label>
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                </aside>
                <section className='section3'>
                    {
                        filteredProducts.map((m, i) => (
                            <div key={i}>
                                <NavLink to={`/readmore/${m.id}`}>
                                    <div className="up">
                                        <div>
                                            <FaHeart />
                                        </div>
                                        <img src={m.images[0]} alt="image1" />
                                    </div>
                                    <div className="down">
                                        <h3>{m.name}</h3>
                                        <div>
                                            <p>{m.price} $</p>
                                            <p><span>{m.rating}</span><FaStar /></p>
                                        </div>
                                    </div>
                                </NavLink>
                                <button onClick={() => addToCart(m.id)}>Add to Cart</button>
                            </div>
                        ))
                    }
                </section>
            </main>
        </>
    )
}

export default Products

// import { HiOutlineChevronUp } from "react-icons/hi";
{/* <HiOutlineChevronUp /> */ }
// aciq olanda yuxaridaki lazimdi (ya da css-de transform ele)

