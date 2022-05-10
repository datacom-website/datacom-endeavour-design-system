import React from 'react';
import styled from 'styled-components';
import { css } from './default.css';
import { HeadingsExample } from './Headings';
import { ProductiveExample } from './Productive';

//  Table
export const Table = ({tokens, data, topic = 'Headings'}) => {
    if(topic == 'Productive'){
        return(
            <div>
                <table className='cmp-table--borderless'>
                    {tokens.map((el => {
                        return (
                            <tr>
                                <td className='cmp-table__td'>
                                    <ProductiveExample exSize={data[el].size[0]} exFontWeight={data[el].weight[0]}
                                    exlineHeight={data[el].lineHeight[0]} exColour={data[el].colour}>
                                        {data[el].example}
                                        -Example: <i className='fa-arrow'></i>
                                    </ProductiveExample>
                                </td>
                                <td className='cmp-table__td secondCol'>
                                    <p><mark className='cmp-table__td--gray-background'>{el}</mark></p><br/>
                                    <p><span className='cmp-table__name--semibold'>Type:</span> Montserrat</p>
                                    <p><span className='cmp-table__name--semibold'>Size:</span> {data[el].size[0]}px/{data[el].size[1]}rem</p>
                                    <p><span className='cmp-table__name--semibold'>Line Height:</span> {data[el].lineHeight[0]}px/{data[el].lineHeight[1]}rem</p>
                                    <p><span className='cmp-table__name--semibold'>Weight:</span> {data[el].weight[0]}/{data[el].weight[1]}</p>
                                    <p><span className='cmp-table__name--semibold'>Letting Spacing:</span> {data[el].letterSpacing}px</p>
                                    <p><span className='cmp-table__name--semibold'>Colour:</span> {data[el].colour}</p>
                                </td>
                            </tr>
                        )
                    }))}
                </table>
            </div>
        )
    }
    else if(topic == 'Body'){
        return (
            <div>
                <table className='cmp-table--borderless'>
                    <td className='cmp-table__td secondCol'  style={{borderLeft: 0, borderTop: 0, borderBottom: 0}}>
                        This is for short or long paragraphs. It is a good size for comfortable
                         long-form reading. This text style is also used for longer body copy
                          in accordions and modals. We always left-align this type when used
                           standalone. However it can also be center-aligned when used within
                            certain components that require it.
                    </td>
                    <td className='cmp-table__td secondCol' 
                    style={{borderRight: 0, borderTop: 0, borderBottom: 0, width: '237px'}}>
                        <p><mark className='cmp-table__td--gray-background'>body-01</mark></p><br/>
                        <p><span className='cmp-table__name--semibold'>Type:</span> Montserrat</p>
                        <p><span className='cmp-table__name--semibold'>Size:</span> 16px/1rem</p>
                        <p><span className='cmp-table__name--semibold'>Line Height:</span>  24px/1.5rem</p>
                        <p><span className='cmp-table__name--semibold'>Weight:</span> 400/Regular</p>
                        <p><span className='cmp-table__name--semibold'>Letting Spacing:</span> -0.2px</p>
                        <p><span className='cmp-table__name--semibold'>Colour:</span> #0a1839</p>
                    </td>
                </table>
            </div>
        )
    }
    return (
        <div>
            <table className='cmp-table--borderless'>
                {tokens.map((el => {
                    return (
                        <tr>
                            <td className='cmp-table__td'>
                                <HeadingsExample 
                                exSize={data[el].size[0]} exFontWeight={data[el].weight[0]}
                                exlineHeight={data[el].lineHeight[0]}>
                                    Headings Example
                                </HeadingsExample></td>
                            <td className='cmp-table__td secondCol' style={{width: '237px'}}>
                                <p><mark className='cmp-table__td--gray-background'>{el}</mark></p><br/>
                                <p><span className='cmp-table__name--semibold'>Type:</span> Montserrat</p>
                                <p><span className='cmp-table__name--semibold'>Size:</span> {data[el].size[0]}px/{data[el].size[1]}rem</p>
                                <p><span className='cmp-table__name--semibold'>Line Height:</span> {data[el].lineHeight[0]}px/{data[el].lineHeight[1]}rem</p>
                                <p><span className='cmp-table__name--semibold'>Weight:</span> {data[el].weight[0]}/{data[el].weight[1]}</p>
                                <p><span className='cmp-table__name--semibold'>Letting Spacing:</span> {data[el].letterSpacing}px</p>
                                <p><span className='cmp-table__name--semibold'>Colour:</span> #0a1839</p>
                            </td>
                        </tr>
                    )
                }))}
            </table>
        </div>
    )
}

