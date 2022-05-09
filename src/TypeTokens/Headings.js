import styled from "styled-components";

export const HeadingsExample = 
styled.div`
    color: #0A1839;
    font-size: ${props => props.exSize}px;
    font-weight: ${props => props.exFontWeight};
    line-height: ${props => props.exlineHeight}px;
`

export const headingTokens = [
    '$heading-01',
    '$heading-02',
    '$heading-03',
    '$heading-04',
    '$heading-05',
    '$footer-heading-01',
]

export const headingValues = {
    '$heading-01' : {
        size: ['64', '4'],
        lineHeight: ['80', '5'],
        weight: ['700', 'Bold'],
        letterSpacing: '-0.5'
    },
    '$heading-02' : {
        size: ['48', '3'],
        lineHeight: ['64', '4'],
        weight: ['700', 'Bold'],
        letterSpacing: '-0.5'
    },
    '$heading-03' : {
        size: ['40', '2.5'],
        lineHeight: ['48', '3'],
        weight: ['700', 'Bold'],
        letterSpacing: '-0.5'
    },
    '$heading-04' : {
        size: ['32', '2'],
        lineHeight: ['40', '2.5'],
        weight: ['700', 'Bold'],
        letterSpacing: '-0.5'
    },
    '$heading-05' : {
        size: ['24', '1.5'],
        lineHeight: ['32', '2'],
        weight: ['700', 'Bold'],
        letterSpacing: '-0.5'
    },
    '$footer-heading-01' : {
        size: ['14', '0.875'],
        lineHeight: ['18', '1.125'],
        weight: ['700', 'Bold'],
        letterSpacing: '-0.2'
    }
}