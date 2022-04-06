import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';

const BadgeWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  line-height: 12px;
  padding: 4px 12px;
  border-radius: 3em;
  font-weight: ${typography.weight.bold};

  svg {
    height: 12px;
    width: 12px;
    margin-right: 4px;
    margin-top: -2px;
  }

  ${(props) =>
    props.token === 'background-white-theme' &&
    css`
      color: ${color.darkblue};
      background: ${color.white};
      border: 1px solid ${color.border};
    `};

  ${(props) =>
    props.token === 'ui-background-dark-theme' &&
    css`
      color: ${color.white};
      background: ${color.darkblue};
    `};

  ${(props) =>
    props.token === 'ui-background-light-theme' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue};
    `};

  ${(props) =>
    props.token === 'overlay-dark-01' &&
    css`
      color: ${color.white};
      background: ${color.darkblue};
      opacity: 0.6;
    `};

  ${(props) =>
    props.token === 'overlay-dark-02' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue};
      opacity: 0.6;
    `};

  ${(props) =>
    props.token === 'overlay-light-01' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue};
      opacity: 0.8;
    `};

  ${(props) =>
    props.token === 'text-01' &&
    css`
      color: ${color.white};
      background: ${color.darkblue};
    `};

  ${(props) =>
    props.token === 'text-02' &&
    css`
      color: ${color.darkblue};
      background: ${color.white};
      border: 1px solid ${color.border};
    `};

  ${(props) =>
    props.token === 'text-03' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue};
    `};

  ${(props) =>
    props.token === 'text-04' &&
    css`
      color: ${color.white};
      background: ${color.cobaltblue};
      opacity: 0.6;
    `};

  ${(props) =>
    props.token === 'text-05' &&
    css`
      color: ${color.darkblue};
      background: ${color.lightblue};
    `};

  ${(props) =>
    props.token === 'ui-01' &&
    css`
      color: ${color.darkblue};
      background: ${color.white};
      border: 1px solid ${color.border};
    `};

  ${(props) =>
    props.token === 'ui-02' &&
    css`
      color: ${color.white};
      background: ${color.darkblue};
    `};

  ${(props) =>
    props.token === 'ui-03' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue};
    `};

  ${(props) =>
    props.token === 'ui-04' &&
    css`
      color: ${color.white};
      background: ${color.cobaltblue};
    `};

  ${(props) =>
    props.token === 'ui-05' &&
    css`
      color: ${color.darkblue};
      background: ${color.lightblue};
    `};

  ${(props) =>
    props.token === 'ui-06' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue};
    `};

  ${(props) =>
    props.token === 'ui-07' &&
    css`
      color: ${color.white};
      background: ${color.accentpink};
    `};

  ${(props) =>
    props.token === 'ui-08' &&
    css`
      color: ${color.white};
      background: ${color.accentorange};
    `};

  ${(props) =>
    props.token === 'ui-09' &&
    css`
      color: ${color.white};
      background: ${color.accentseablue};
    `};

  ${(props) =>
    props.token === 'interactive-01' &&
    css`
      color: ${color.white};
      background: ${color.actionblue};
    `};

  ${(props) =>
    props.token === 'interactive-hover-01' &&
    css`
      color: ${color.white};
      background: ${color.actionbluehover};
    `};

  ${(props) =>
    props.token === 'link-01' &&
    css`
      color: ${color.white};
      background: ${color.actionblue};
    `};

  ${(props) =>
    props.token === 'link-hover-01' &&
    css`
      color: ${color.white};
      background: ${color.actionbluehover};
    `};

  ${(props) =>
    props.token === 'link-02' &&
    css`
      color: ${color.darkblue};
      background: ${color.lightblue};
    `};

  ${(props) =>
    props.token === 'link-03' &&
    css`
      color: ${color.white};
      background: ${color.darkblue};
    `};

  ${(props) =>
    props.token === 'link-04' &&
    css`
      color: ${color.darkblue};
      background: ${color.white};
      border: 1px solid ${color.border};
    `};

  ${(props) =>
    props.token === 'link-visited-white-theme' &&
    css`
      color: ${color.white};
      background: ${color.deeproyalpurple};
    `};

  ${(props) =>
    props.token === 'link-visited-dark-theme' &&
    css`
      color: ${color.white};
      background: ${color.lightroyalpurple};
    `};

  ${(props) =>
    props.token === 'ui-greyscale-01' &&
    css`
      color: ${color.white};
      background: ${color.datacomblack};
    `};

  ${(props) =>
    props.token === 'ui-greyscale-02' &&
    css`
      color: ${color.white};
      background: ${color.darkestgrey};
    `};

  ${(props) =>
    props.token === 'ui-greyscale-03' &&
    css`
      color: ${color.white};
      background: ${color.darkgrey};
    `};

  ${(props) =>
    props.token === 'ui-greyscale-04' &&
    css`
      color: ${color.darkblue};
      background: ${color.grey};
    `};

  ${(props) =>
    props.token === 'ui-greyscale-05' &&
    css`
      color: ${color.darkblue};
      background: ${color.lightgrey};
    `};

  ${(props) =>
    props.token === 'ui-greyscale-06' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightgrey};
    `};

  ${(props) =>
    props.token === 'disabled-01' &&
    css`
      color: ${color.darkblue};
      background: ${color.grey};
    `};

  ${(props) =>
    props.token === 'disabled-02' &&
    css`
      color: ${color.darkblue};
      background: ${color.lightgrey};
    `};

  ${(props) =>
    props.token === 'support-01' &&
    css`
      color: ${color.white};
      background: ${color.ragred};
    `};

  ${(props) =>
    props.token === 'support-02' &&
    css`
      color: ${color.white};
      background: ${color.ragamber};
      opacity: 0.6;
    `};

  ${(props) =>
    props.token === 'support-03' &&
    css`
      color: ${color.white};
      background: ${color.raggreen};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-01' &&
    css`
      color: ${color.white};
      background: ${color.darkblue80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-02' &&
    css`
      color: ${color.white};
      background: ${color.darkblue60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-03' &&
    css`
      color: ${color.white};
      background: ${color.darkblue40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-04' &&
    css`
      color: ${color.white};
      background: ${color.darkblue20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-05' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-06' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-07' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-08' &&
    css`
      color: ${color.white};
      background: ${color.datacomblue20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-09' &&
    css`
      color: ${color.white};
      background: ${color.lightblue80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-10' &&
    css`
      color: ${color.white};
      background: ${color.lightblue60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-11' &&
    css`
      color: ${color.white};
      background: ${color.lightblue40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-12' &&
    css`
      color: ${color.white};
      background: ${color.lightblue20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-13' &&
    css`
      color: ${color.white};
      background: ${color.cobaltblue80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-14' &&
    css`
      color: ${color.white};
      background: ${color.cobaltblue60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-15' &&
    css`
      color: ${color.white};
      background: ${color.cobaltblue40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-16' &&
    css`
      color: ${color.white};
      background: ${color.cobaltblue20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-17' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-18' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-19' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-20' &&
    css`
      color: ${color.darkblue};
      background: ${color.extralightblue20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-21' &&
    css`
      color: ${color.white};
      background: ${color.accentpink80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-22' &&
    css`
      color: ${color.white};
      background: ${color.accentpink60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-23' &&
    css`
      color: ${color.white};
      background: ${color.accentpink40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-24' &&
    css`
      color: ${color.white};
      background: ${color.accentpink20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-25' &&
    css`
      color: ${color.white};
      background: ${color.accentorange80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-26' &&
    css`
      color: ${color.white};
      background: ${color.accentorange60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-27' &&
    css`
      color: ${color.white};
      background: ${color.accentorange40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-28' &&
    css`
      color: ${color.white};
      background: ${color.accentorange20};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-29' &&
    css`
      color: ${color.darkblue};
      background: ${color.accentseablue80};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-30' &&
    css`
      color: ${color.darkblue};
      background: ${color.accentseablue60};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-31' &&
    css`
      color: ${color.darkblue};
      background: ${color.accentseablue40};
    `};

  ${(props) =>
    props.token === 'ui-fill-extended-32' &&
    css`
      color: ${color.darkblue};
      background: ${color.accentseablue20};
    `};
`;

export function Colour({ ...props }) {
  return <BadgeWrapper {...props} />;
}
Colour.propTypes = {
  token: PropTypes.oneOf([
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
  ]),
};
