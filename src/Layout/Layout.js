import React from 'react';
import styled from 'styled-components';

// Layout table components
export const LayoutElement = 
styled.div`
    width: ${props => props.pxValues}px;
    height: ${props => props.pxValues}px;
    background-color: #76C4FF;
`

export const LayoutElementContainer =
styled.div`
    height: ${props => 
        props.containerHeight < 64 
        ? '97px' : props.containerHeight == 64
        ? '113px' : props.containerHeight == 80
        ? '129px' : props.containerHeight == 120
        ? '169px' : '200px'
    };
    padding: 24px 0px 0px 24px;
`

//  Information
export const layoutNames = [
    '$layout-01',
    '$layout-02',
    '$layout-03',
    '$layout-04',
    '$layout-05',
    '$layout-06',
    '$layout-07',
    '$layout-08',
    '$layout-09',
]

export const layoutValues = {
    '$layout-01': ['0.75', '12'],
    '$layout-02': ['1', '16'],
    '$layout-03': ['1.5', '24'],
    '$layout-04': ['2', '32'],
    '$layout-05': ['2.5', '40'],
    '$layout-06': ['3', '48'],
    '$layout-07': ['4', '64'],
    '$layout-08': ['5', '80'],
    '$layout-09': ['7.5', '120'],
}