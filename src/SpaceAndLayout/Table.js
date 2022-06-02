import React from 'react';
import styled from 'styled-components';
import { css } from './default.css';
import { PaddingExample } from './Padding';
import { LayoutExample } from './Layout';

//  Table
export const Table = ({categories, tokens, data, topic = 'Padding'}) => {
    if (topic != 'Padding'){
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
                    {tokens.map((el => {
                            return (
                                <tr>
                                    <td className='cmp-table__td'><mark className='cmp-table__td--gray-background'>{el}</mark></td>
                                    <td className='cmp-table__td'>{data[el][0]}</td>
                                    <td className='cmp-table__td'>{data[el][1]}</td>
                                    <td className='cmp-table__td' style={{width: '170px'}}><LayoutExample width={data[el][1]} height={data[el][1]}/></td>
                                </tr>
                            )
                        }))}
                </table>
            </div>
        )
    }
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
                {tokens.map((el => {
                        return (
                            <tr>
                                <td className='cmp-table__td'><mark className='cmp-table__td--gray-background'>{el}</mark></td>
                                <td className='cmp-table__td'>{data[el][0]}</td>
                                <td className='cmp-table__td'>{data[el][1]}</td>
                                <td className='cmp-table__td' style={{width: '226px'}}><PaddingExample width={data[el][1]} height={data[el][1]}/></td>
                            </tr>
                        )
                    }))}
            </table>
        </div>
    )
}

