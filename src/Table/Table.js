import React from 'react';
import styled from 'styled-components';

//  Table style
export const TableContainer = 
styled.table`
    background-color: #F0F0F0;
    border-radius: 8px;
    border-collapse: collapse;
    overflow: hidden;
`;

export const TRow = 
styled.tr`
    // background-color: #F0F0F0;
`;

export const THeading =
styled.th`
    // background-color: #F0F0F0;
    text-align: start;
`

export const TData =
styled.td`
    border: 1px solid #d9d9d9;
    // padding: 24px 0px 0px 24px;
    border-bottom-color: ${props => 
        (props.itemIndex+1) % 9 == 0
        ? '#F0F0F0'  : '#d9d9d9'};
`
