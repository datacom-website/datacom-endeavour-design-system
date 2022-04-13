import React from 'react';
import  { styles }  from '../shared/spacingAndLayout.css';
import { TableContainer, TRow,
        THeading, TData } from '../Table/Table';
import { Layout, layoutNames,
        layoutValues, Element, ElementContainer } from '../Layout/Layout';

//  Shows the component on the side panel
export default {
    title: 'Design System/Spacing And Layout',
    component: Layout,
}

// For each layout tokens, create a row of their respective values
export const layoutTemplate = () => (
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
        {layoutNames.map((layoutTokens) => {
            return (
                <TRow>
                    <TData 
                    style={{borderLeftColor: '#F0F0F0'}}
                    itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <ElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            <mark>
                                {layoutTokens}
                            </mark>
                        </ElementContainer>
                    </TData>
                    <TData itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <ElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            {layoutValues[layoutTokens][0]}
                        </ElementContainer>
                    </TData>
                    <TData itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <ElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            {layoutValues[layoutTokens][1]}px
                        </ElementContainer>
                    </TData>
                    <TData 
                    style={{borderRightColor: '#F0F0F0'}}
                    itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <ElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            <Element pxValues={layoutValues[layoutTokens][1]}/>
                        </ElementContainer>
                    </TData>
                </TRow>
            )
        })}
    </TableContainer>
)

layoutTemplate.storyName = 'Layout'
