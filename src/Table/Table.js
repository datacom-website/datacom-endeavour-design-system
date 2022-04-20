import React from 'react';
import styled from 'styled-components';

//  Table style
export const Table = 
styled.table`
    border-collapse: collapse;
    width: 100%;
    height: 100%;
`

export const THeading =
styled.th`
    text-align: start;
    // width: 200px;
`

export const TData =
styled.td`
    border: 1px solid #d9d9d9;
    border-bottom-color: ${props => 
        (props.itemIndex+1) % 9 == 0
        ? 'transparent'  : '#d9d9d9'};
`
