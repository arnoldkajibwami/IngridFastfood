import React from "react";
import { useNavigate } from "react-router-dom";

export default function Items(props) {
    const navigate = useNavigate()
    function Tocontact() {
        window.scrollTo(0, 0)

        navigate("/contact")
    }

    return (
        <>

            <div class="col-sm-6 col-lg-4 all pizza">
                <div class="box boxs" style={{ marginBottom: "25px" }}>
                    <div>
                        <div class="img-box">
                            <img src={props.image} alt="" />
                        </div>
                        <div class="detail-box">
                            <h5>
                                {props.name}
                            </h5>
                            <p>
                                {props.description}
                            </p>
                            <div class="options">
                                <h6>
                                    {props.price}
                                </h6>
                                <button onClick={Tocontact} className="buttonorange">{props.button}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


