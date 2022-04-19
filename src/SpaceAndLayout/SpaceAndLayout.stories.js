import React from 'react';
import  {styleSheet}  from '../shared/spacingAndLayout.css';
import { Table, 
    THeading, TData } from '../Table/Table';
import { Padding, PaddingSquare, 
    paddingNames, paddingValues,
    PadSquareContainer} from '../Padding/Padding';
import { Layout, layoutNames,
    layoutValues, LayoutElement, LayoutElementContainer } from '../Layout/Layout';

//  Shows the component on the side panel
export default {
    title: 'Design System/Spacing And Layout',
}

// For each padding tokens, create a row of their respective values
export const paddingTemplate = () => (
    <Table>
        <tr>
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
        </tr>   
        {paddingNames.map((paddingTokens) => {
            return (
                <tr>
                    <TData style={{borderLeftColor: 'white'}}
                    itemIndex={paddingNames.indexOf(paddingTokens)}>
                        <PadSquareContainer containerHeight={paddingValues[paddingTokens][1]}>
                            <mark
                            className='mark'>
                                {paddingTokens}
                            </mark>
                        </PadSquareContainer>
                    </TData>
                    <TData itemIndex={paddingNames.indexOf(paddingTokens)}>
                        <PadSquareContainer containerHeight={paddingValues[paddingTokens][1]}>
                            {paddingValues[paddingTokens][0]}
                        </PadSquareContainer>
                    </TData>
                    <TData itemIndex={paddingNames.indexOf(paddingTokens)}>
                        <PadSquareContainer containerHeight={paddingValues[paddingTokens][1]}>
                            {paddingValues[paddingTokens][1]}
                            px
                        </PadSquareContainer>
                    </TData>
                    <TData
                    style={{
                    borderRightColor: 'white'}} 
                    itemIndex={paddingNames.indexOf(paddingTokens)}> 
                        <PadSquareContainer containerHeight={paddingValues[paddingTokens][1]}>
                            <PaddingSquare pxValue={paddingValues[paddingTokens][1]}/>
                        </PadSquareContainer>
                    </TData>
                </tr>
            )
        })}
    </Table>
)

// For each layout tokens, create a row of their respective values
export const layoutTemplate = () => (
    <Table>
        <tr>
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
        </tr>
        {layoutNames.map((layoutTokens) => {
            return (
                <tr>
                    <TData 
                    style={{
                    borderLeftColor: 'white'}}
                    itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <LayoutElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            <mark>
                                {layoutTokens}
                            </mark>
                        </LayoutElementContainer>
                    </TData>
                    <TData itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <LayoutElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            {layoutValues[layoutTokens][0]}
                        </LayoutElementContainer>
                    </TData>
                    <TData itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <LayoutElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            {layoutValues[layoutTokens][1]}px
                        </LayoutElementContainer>
                    </TData>
                    <TData 
                    style={{
                    borderRightColor: 'white'}}
                    itemIndex={layoutNames.indexOf(layoutTokens)}>
                        <LayoutElementContainer containerHeight={layoutValues[layoutTokens][1]}>
                            <LayoutElement pxValues={layoutValues[layoutTokens][1]}/>
                        </LayoutElementContainer>
                    </TData>
                </tr>
            )
        })}
    </Table>
)

paddingTemplate.storyName = 'Padding Tokens';

layoutTemplate.storyName = 'Layout Tokens'
