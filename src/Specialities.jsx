import React from 'react'
import Dataitems from './Dataitem';
import Dataspecial from './Dataspecial';

export default function Specialities() {
    return (
        <>
            <section class="food_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2 className='text-center mt-5'>
                            Top Selling
                        </h2>
                    </div>

                    <Dataspecial/>

                </div>
            </section>
        </>
    );
}
