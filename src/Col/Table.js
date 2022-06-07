import React from 'react';
import styled from 'styled-components';
import { css } from './default.css';
import hexToRGB from "node-hex-to-rgb";
import { ColorExample } from './Colour';

//  Table
export const Table = ({categories, data}) => {
    return(
        <div>
            <table className='cmp-table--borderless'>
                <tr>
                    {categories.map((el => {
                        return (
                            <th className='cmp-table__th'>{el}</th>
                        )
                    }))}
                </tr>
                {data.map((el => {
                        const {token, role, name, hex, opacity} = el;
                        const rgb = hexToRGB(hex);
                        // console.log(rgb);
                        const {red,green,blue} = rgb[0];

                        return (
                            <tr>
                                <td className='cmp-table__td'><mark className='cmp-table__td--gray-background'>{token}</mark></td>
                                <td className='cmp-table__td'>{role}</td>
                                <td className='cmp-table__td colorExample-ctn'>
                                    <div style={{flexShrink: 4, lineHeight: '2em', float: 'left'}}>
                                        <div>{name}</div>
                                        <div>{hex}</div>
                                        <div>R: {red} G: {green} B: {blue}</div>
                                    </div>
                                    <ColorExample color={hex} opacity={opacity != undefined ? opacity+'%' : 1} className='cmp-table__colorExample'/>
                                </td>
                            </tr>       
                        )
                    }))}
            </table>
        </div>
    )
}

//hex-to-rgb = https://www.npmjs.com/package/node-hex-to-rgb
