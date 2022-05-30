import React from 'react'
import { API } from '../apiConfig'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header';
import Separator from '../components/Separator/Separator';

const Homepage = () => {
    return (
        <>
            <Header />
            <Separator height={"50px"} />
            <Banner />
            <Carousel 
                entity={API.entity.popularMovies}
                title={'Popular Movies'}
            />
            <Carousel 
                entity={API.entity.topRatedMovies}
                title={'Top Rated Movies'}
            />
            <Carousel 
                entity={API.entity.popularTv}
                title={'Popular Series'}
            />
            <Carousel 
                entity={API.entity.topRatedTv}
                title={'Top Rated Series'}
            />
        </>
    )
}

export default Homepage