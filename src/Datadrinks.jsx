import React from "react";
import Data from "./Data"
import Items from "./Items";

const Datadrinks = () => {

    const filtered = Data.filter(item => {
        return item.commune === 'drink';
    });

    return (
        <>
            <div class="admin">

                {filtered.map((item, index) => {
                    return (
                        <>
                            <div >
                                <Items
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    name={item.name}
                                    item={item}
                                    category={item.category}
                                    button={item.button}
                                    key={index}
                                />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Datadrinks;