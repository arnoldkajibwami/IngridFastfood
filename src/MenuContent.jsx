import React from 'react'
import Dataitems from './Dataitem';

export default function MenuContent() {
    return (
        <>
            <section class="food_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container heading_center">
                        <h2 className='text-center mt-5'>
                            Our Menu
                        </h2>
                    </div>
                    <ul class="filters_menu">
                        <li class="active" data-filter="*">All</li>
                        <li data-filter=".Drinks">Drinks</li>
                        <li data-filter=".Pizza">Pizza</li>
                        <li data-filter=".shawarma">Shawarma</li>
                        <li data-filter=".roll's">Roll's</li>
                        <li data-filter=".chips">Chips</li>
                        <li data-filter=".burger">Burger</li>
                        <li data-filter=".sambusa">Sambusa</li>
                    </ul>
                    
                    <Dataitems />
                    
                </div>
            </section>
            
        </>
    );
}