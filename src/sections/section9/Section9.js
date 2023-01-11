import React from "react";

import Prizes from '../../assets/data/PrizesData';
import PrizeBox from "../../components/PrizesBox/Prizebox";

import './Section9.css';

const Section9 = ()=> {

    return (
        <div className="codeutsava_section9">
            <div className="codeutsava_section9-title">
                <div className="codeutsava_section9-title1">Prizes</div>
                <div className="codeutsava_section9-title2">Win exciting prizes worth upto 8 lakhs</div>
            </div>
            <div className="codeutsava_section9-body">
                <div className="codeutsava_section9-description">
                    {Prizes.map((info , index ) => (
                        <PrizeBox title = {info.title} prizeInfo = {info.prizeInfo} cashPrize = {info.cashPrize} />
                    ))}
                </div>
            </div>
        </div>
    )

};

export default Section9;
