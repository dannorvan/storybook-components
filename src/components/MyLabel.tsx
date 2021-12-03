import React from 'react';
import './mylabel.css';


export interface MyLabelProsps {
    /**
     * Text of the label
     */
    label: string,
    /**
     * Size of the label
     */
    size: 'normal'| 'h1' | 'h2' | 'h3',
    /**
     * Capitalize all text
     */
    allCaps?: boolean,
    /**
     * Color class of text
     */
    color?: string
    /**
     * Color of text
     */
    fontColor?: string
}

export const MyLabel = ({ label = 'no label', size = 'normal',color, allCaps = false, fontColor }:MyLabelProsps) => {
    return (
        <span
            style={{
                textTransform: `${allCaps ? 'uppercase' : 'initial'}`,
                color: fontColor,
            }}
            className={`${size} text-${color}`}
        >{label}</span>
    );
};

