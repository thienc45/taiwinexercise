import React, { useState } from 'react';
import { arrowRight } from "../assets/icons";
import Button from '../components/Button';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

export default function Hero() {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full border-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                {/* div-above-the-heading */}
                <p className="text-xl font-mono text-red-600">Our Summer collections</p>
                <h1 className="mt-10 font-serif text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3 text-red-500">Nike</span> Shoes
                </h1>
                <p className="font-serif text-slate-gray text-leading-8 mt-6 mb-14 sm-max-w-sm">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active
                    life.
                </p>
                <Button label="Shop now" iconUrl={arrowRight} />
                <div className="flex justify-start items-start w-full mt-20 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:40 bg-purple-200 bg-hero bg-cover bg-center">
                <img
                    src={bigShoeImg}
                    alt="bigShoe"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />
            </div>

            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                {shoes.map((image, index) => (
                    <div key={index}>
                        <ShoeCard
                            imgURL={image}
                            changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                            bigShoeImg={bigShoeImg}
                        />
                        map
                    </div>
                ))}
            </div>
        </section>
    );
}

// import React from 'react'

// export default function Hero() {
//   return (
//     <section className='w-full border-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>

//       .<div className="relative ">34343</div>
//     </section>
//   )
// }

