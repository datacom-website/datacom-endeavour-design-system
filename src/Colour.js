import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, colorPair } from './shared/styles';

const TokenWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 16px;

  ${(props) =>
    css`
      background: ${colorPair[props.token]};
      border: 1px solid ${color.lightgrey};
    `};
`;

export function Colour({ ...props }) {
  return <TokenWrapper {...props} />;
}

export const coreTokens = [
  // Core colour tokens
  'background-white-theme',
  'ui-background-dark-theme',
  'ui-background-light-theme',
  'overlay-dark-01',
  'overlay-dark-02',
  'overlay-light-01',
  'text-01',
  'text-02',
  'text-03',
  'text-04',
  'text-05',
  'ui-01',
  'ui-02',
  'ui-03',
  'ui-04',
  'ui-05',
  'ui-06',
  'ui-07',
  'ui-08',
  'ui-09',
  'interactive-01',
  'interactive-hover-01',
  'link-01',
  'link-hover-01',
  'link-02',
  'link-03',
  'link-04',
  'link-visited-white-theme',
  'link-visited-dark-theme',
  'ui-greyscale-01',
  'ui-greyscale-02',
  'ui-greyscale-03',
  'ui-greyscale-04',
  'ui-greyscale-05',
  'ui-greyscale-06',
  'disabled-01',
  'disabled-02',
  'support-01',
  'support-02',
  'support-03',
];

export const shadeTokens = [
  // Extended shade tokens
  'ui-fill-extended-01',
  'ui-fill-extended-02',
  'ui-fill-extended-03',
  'ui-fill-extended-04',
  'ui-fill-extended-05',
  'ui-fill-extended-06',
  'ui-fill-extended-07',
  'ui-fill-extended-08',
  'ui-fill-extended-09',
  'ui-fill-extended-10',
  'ui-fill-extended-11',
  'ui-fill-extended-12',
  'ui-fill-extended-13',
  'ui-fill-extended-14',
  'ui-fill-extended-15',
  'ui-fill-extended-16',
  'ui-fill-extended-17',
  'ui-fill-extended-18',
  'ui-fill-extended-19',
  'ui-fill-extended-20',
  'ui-fill-extended-21',
  'ui-fill-extended-22',
  'ui-fill-extended-23',
  'ui-fill-extended-24',
  'ui-fill-extended-25',
  'ui-fill-extended-26',
  'ui-fill-extended-27',
  'ui-fill-extended-28',
  'ui-fill-extended-29',
  'ui-fill-extended-30',
  'ui-fill-extended-31',
  'ui-fill-extended-32',
];
