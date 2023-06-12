import React, {useState} from 'react';
import './Range.scss';

interface RangeProps {
    _min: string | number,
    _max: string | number,
    _step: string | number,
    symbol?: string,
    label?: string,
}

const Range: React.FC<RangeProps> = ({
                                         _min,
                                         _max,
                                         _step,
                                         symbol,
                                         label
                                     }) => {

    const [range, setRange] = useState(_min);

    return (
        <div className="range-container">
            <span className="label">{label}</span>
            <input
                type="range"
                min={_min}
                max={_max}
                step={_step}
                value={range}
                onChange={(e) => setRange(e.target.value)}/>
            <span className='symbol'>{range}{symbol}</span>
        </div>
    );
};

export default Range;