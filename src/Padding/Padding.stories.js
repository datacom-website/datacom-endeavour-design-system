import React from 'react';
import  { styles }  from '../shared/spacingAndLayout.css';
import { TableContainer, TRow, 
    THeading, TData } from '../Table/Table';
import { Padding, Element, 
    paddingNames, paddingValues,
    ElementContainer} from '../Padding/Padding';

//  Shows the component on the side panel
export default {
    title: 'Design System/Spacing And Layout',
    component: Padding,
}

// For each padding tokens, create a row of their respective values
export const paddingTemplate = () => (
    <TableContainer>
        <TRow>
            <THeading>
                <div className='headingDiv'>Tokens</div>
            </THeading>
            <THeading>
                <div className='headingDiv'>REM</div>
            </THeading>
            <THeading>
                <div className='headingDiv'>Px Values</div>
            </THeading>
            <THeading>
                <div className='headingDiv'>Example</div>
            </THeading>
        </TRow>
        {paddingNames.map((paddingTokens) => {
            return (
                <TRow>
                    <TData style={{borderLeftColor: '#F0F0F0'}}
                    itemIndex={paddingNames.indexOf(paddingTokens)}>
                        <ElementContainer containerHeight={paddingValues[paddingTokens][1]}>
                            <mark
                            className='mark'>
                                {paddingTokens}
                            </mark>
                        </ElementContainer>
                    </TData>
                    <TData itemIndex={paddingNames.indexOf(paddingTokens)}>
                        <ElementContainer containerHeight={paddingValues[paddingTokens][1]}>
                            {paddingValues[paddingTokens][0]}
                        </ElementContainer>
                    </TData>
                    <TData itemIndex={paddingNames.indexOf(paddingTokens)}>
                        <ElementContainer containerHeight={paddingValues[paddingTokens][1]}>
                            {paddingValues[paddingTokens][1]}
                            px
                        </ElementContainer>
                    </TData>
                    <TData itemIndex={paddingNames.indexOf(paddingTokens)}> 
                        <ElementContainer containerHeight={paddingValues[paddingTokens][1]}>
                            <Element pxValue={paddingValues[paddingTokens][1]}/>
                        </ElementContainer>
                    </TData>
                </TRow>
            )
        })}
    </TableContainer>
)

paddingTemplate.storyName = 'Padding';