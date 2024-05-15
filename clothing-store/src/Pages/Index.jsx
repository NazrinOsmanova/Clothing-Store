import React from 'react'
import Carousel from '../PagesComponents/IndexPageComponents/Components/Carousel'
import Favourites from '../PagesComponents/IndexPageComponents/Components/Favourites'
import UserOpinion from '../PagesComponents/IndexPageComponents/Components/UserOpinion'
import UserOpinion2 from '../PagesComponents/IndexPageComponents/Components/UserOpinion2'
import Category1 from '../PagesComponents/IndexPageComponents/Components/Category1'
import Category2 from '../PagesComponents/IndexPageComponents/Components/Category2'

const index = () => {
    const users = [
        {
            img: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1605',
            name: 'John Smith',
            opinion: 'As a fashion enthusiast, I believe that a great clothing website should not only offer stylish and trendy outfits but also provide a seamless shopping experience. From user-friendly navigation to detailed product descriptions, every aspect contributes to a delightful shopping journey.'
        },
        {
            img: 'https://i3.wp.com/mighty.tools/mockmind-api/content/cartoon/7.jpg?ssl=1',
            name: 'Emily Jones',
            opinion: 'In my opinion, a clothing website should prioritize inclusivity and diversity in its offerings. From size-inclusive options to a diverse range of styles that cater to different tastes and preferences, embracing diversity is key to creating a welcoming and inclusive online fashion community.'
        },
        {
            img: 'https://mighty.tools/mockmind-api/content/human/1.jpg',
            name: 'Michael Brown',
            opinion: 'Transparency and sustainability are vital for modern clothing websites. Todays customers prioritize the environmental and social impact of their purchases. Thus, a site that openly shares its sourcing practices and offers sustainable fashion gains trust and loyalty.'
        },
    ];

    return (
        <>
            <Carousel />
            <Category1 />
            <Category2 />
            <Favourites />
            <UserOpinion />
            <UserOpinion2 users={users} />
        </>
    )
}

export default index