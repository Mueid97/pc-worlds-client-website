
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CountBtn = () => {
    const [num, setNum] = useState(50);
    let incNum = () => {
        if (num < 500) {
            setNum(Number(num) + 1);
        }
    }
    let decNum = () => {
        if (num > 50) {
            setNum(num - 1);
        }else if(num<50){
            
           return toast('Order mimmum 50', setNum) 
        }
    }
    const handleChange = e => {
        setNum(e.target.value);
    }
    return (
        <div>
            <div className="col-xl-1">
                <div className="input-group">
                    <div className="input-group-prepend ">
                        <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                    </div>
                    <input type="text" className="form-control text-center" value={num} onChange={handleChange} />
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountBtn;