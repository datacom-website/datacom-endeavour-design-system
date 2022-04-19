import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//  Padding layout components
export const PaddingSquare = 
styled.div`
    width: ${props => props.pxValue}px;
    height: ${props => props.pxValue}px;
    background-color: #E60060;
`

export const PadSquareContainer = 
styled.div`
    height: ${props => 
        props.containerHeight < 64
        ? '97px' : '113px'};
    padding: 24px 0px 0px 24px;
`
//  Information
export const paddingNames = [
    '$padding-01',
    '$padding-02',
    '$padding-03',
    '$padding-04',
    '$padding-05',
    '$padding-06',
    '$padding-07',
    '$padding-08',
    '$padding-09',
]

export const paddingValues = {
    '$padding-01': ['0.25', '4'],
    '$padding-02': ['0.5', '8'],
    '$padding-03': ['0.75', '12'],
    '$padding-04': ['1', '16'],
    '$padding-05': ['1.5', '24'],
    '$padding-06': ['2', '32'],
    '$padding-07': ['2.5', '40'],
    '$padding-08': ['3', '48'],
    '$padding-09': ['4', '64'],
}
