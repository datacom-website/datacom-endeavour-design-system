import React from "react";
import styled from "styled-components";
import icons from "../shared/icons";

export const ProductiveExample =
styled.div`
    font-size: ${props => props.exSize}px;
    font-weight: ${props => props.exFontWeight};
    line-height: ${props => props.exlineHeight}px;
    color: ${props => props.exColour};
    example: 
`

export const productiveTokens = [
    '$caption-01',
    '$label-01',
    '$helper-text-01',
    '$icon-01'
]

export const productiveValues = {
    '$caption-01' : {
        type: 'Montserrat',
        size: ['14', '0.875'],
        lineHeight: ['18', '1.125'],
        weight: ['400', 'Regular'],
        letterSpacing: '-0.2',
        colour: '#666666',
        example: 'This is for captions or legal content in a layout — not for body copy'
    },
    '$label-01' : {
        type: 'Montserrat',
        size: ['12', '0.75'],
        lineHeight: ['16', '1'],
        weight: ['400', 'Regular'],
        letterSpacing: '-0.2',
        colour: '#0a1839',
        example: 'This is for ﬁeld labels in components and error messages'
    },
    '$helper-text-01' : {
        type: 'Montserrat',
        size: ['12', '0.75'],
        lineHeight: ['16', '1'],
        weight: ['400', 'Regular'],
        letterSpacing: '-0.2',
        colour: '#666666',
        example: 'This is for explanatory helper text that appears below a ﬁeld within a component'
    },
    '$icon-01' : {
        type: 'Font Awesome 5 Pro',
        size: ['24', '1.5'],
        lineHeight: ['24', '1.5'],
        weight: ['Light'],
        letterSpacing: '0',
        colour: '#0a1839',
        example: 'fal fa-copy',
    }
}