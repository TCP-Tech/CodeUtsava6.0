import React from "react";

import Prizes from '../../assets/data/PrizesData';
import PrizeBox from "../../components/prizesBox/Prizebox";

import './Section9.css';

const Section9 = ()=> {

    return (
        <div className="codeutsava__section9">
            <div className="codeutsava__section9-title">
                <div className="codeutsava__section9-title1">Prizes</div>
                <div className="codeutsava__section9-title2">Win exciting prizes worth upto 8 lakhs</div>
            </div>
            <div className="codeutsava__section9-body">
                <div className="codeutsava__section9-description">
                    {Prizes.map((info , index ) => (
                        <PrizeBox title = {info.title} prizeInfo = {info.prizeInfo} cashPrize = {info.cashPrize} />
                    ))}
                </div>
            </div>
        </div>
    )

};

export default Section9;
