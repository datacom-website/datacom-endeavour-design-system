import React from 'react';
import { Colour, coreTokens, shadeTokens } from './Colour';
import { colorPair } from './shared/styles';

export default {
  title: 'Design System/Colour',
  component: Colour,
};

const outputTokens = (arr) => {
  return (
    <div>
      {arr.map((element) => {
        return (
          <div
            style={{
              padding: '12px 8px',
              borderBottom: '1px solid #DADADA',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Colour key={element} token={element}></Colour>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 0%',
              }}
            >
              <span>{element}</span>
            </div>
            <div style={{ marginLeft: '16px' }}>
              <span style={{ color: '#666666' }}>{colorPair[element]}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const CoreColours = () => (
  <div>
    {coreTokens.map((element) => {
      return (
        <div
          style={{
            padding: '12px 8px',
            borderBottom: '1px solid #DADADA',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Colour key={element} token={element}></Colour>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 1 0%',
            }}
          >
            <span>{element}</span>
          </div>
          <div style={{ marginLeft: '16px' }}>
            <span style={{ color: '#666666' }}>{colorPair[element]}</span>
          </div>
        </div>
      );
    })}
  </div>
);

CoreColours.storyName = 'Core Colour Tokens';

export const ExtendedShades = () => outputTokens(shadeTokens);

ExtendedShades.storyName = 'Extended Shade Tokens';
