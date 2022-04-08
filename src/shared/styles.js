import { css } from 'styled-components';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  white: '#FFFFFF',
  darkblue: '#0A1839',
  extralightblue: '#E5F1FF',
  datacomblue: '#002470',
  cobaltblue: '#0047BA',
  lightblue: '#76C4FF',
  accentpink: '#E60060',
  accentorange: '#F04C2C',
  accentseablue: '#00ADBB',
  actionblue: '#0055FF',
  actionbluehover: '#003FBC',
  deeproyalpurple: '#6B2FC6',
  lightroyalpurple: '#B888FF',
  datacomblack: '#151515',
  darkestgrey: '#333333',
  darkgrey: '#666666',
  grey: '#999999',
  lightgrey: '#DADADA',
  extralightgrey: '#F0F0F0',
  ragred: '#CF364E',
  ragamber: '#F0B02C',
  raggreen: '#40B549',
  darkblue80: '#3B4660',
  darkblue60: '#6C7488',
  darkblue40: '#9DA2AF',
  darkblue20: '#CED0D7',
  datacomblue80: '#334F8C',
  datacomblue60: '#667BA9',
  datacomblue40: '#99A7C6',
  datacomblue20: '#CCD3E2',
  lightblue80: '#91CFFF',
  lightblue60: '#ACDBFF',
  lightblue40: '#C8E7FF',
  lightblue20: '#E3F3FF',
  cobaltblue80: '#486DC2',
  cobaltblue60: '#7692D2',
  cobaltblue40: '#A3B6E0',
  cobaltblue20: '#D1DAF0',
  extralightblue80: '#EAF3FF',
  extralightblue60: '#EFF6FF',
  extralightblue40: '#F5F9FF',
  extralightblue20: '#FAFCFF',
  accentpink80: '#EB337F',
  accentpink60: '#F0669F',
  accentpink40: '#F599BF',
  accentpink20: '#FACCDF',
  accentorange80: '#F36F56',
  accentorange60: '#F69380',
  accentorange40: '#F9B7AA',
  accentorange20: '#FCDBD4',
  accentseablue80: '#71BCC7',
  accentseablue60: '#94CDD5',
  accentseablue40: '#B8DDE3',
  accentseablue20: '#DBEFF1',
};

export const colorPair = {
  'background-white-theme': color.white,
  'ui-background-dark-theme': color.darkblue,
  'ui-background-light-theme': color.extralightblue,
  'overlay-dark-01': color.darkblue,
  'overlay-dark-02': color.datacomblue,
  'overlay-light-01': color.extralightblue,
  'text-01': color.darkblue,
  'text-02': color.white,
  'text-03': color.datacomblue,
  'text-04': color.cobaltblue,
  'text-05': color.lightblue,
  'ui-01': color.white,
  'ui-02': color.darkblue,
  'ui-03': color.datacomblue,
  'ui-04': color.cobaltblue,
  'ui-05': color.lightblue,
  'ui-06': color.extralightblue,
  'ui-07': color.accentpink,
  'ui-08': color.accentorange,
  'ui-09': color.accentseablue,
  'interactive-01': color.actionblue,
  'interactive-hover-01': color.actionbluehover,
  'link-01': color.actionblue,
  'link-hover-01': color.actionbluehover,
  'link-02': color.lightblue,
  'link-03': color.darkblue,
  'link-04': color.white,
  'link-visited-white-theme': color.deeproyalpurple,
  'link-visited-dark-theme': color.lightroyalpurple,
  'ui-greyscale-01': color.datacomblack,
  'ui-greyscale-02': color.darkestgrey,
  'ui-greyscale-03': color.darkgrey,
  'ui-greyscale-04': color.grey,
  'ui-greyscale-05': color.lightgrey,
  'ui-greyscale-06': color.extralightgrey,
  'disabled-01': color.grey,
  'disabled-02': color.lightgrey,
  'support-01': color.ragred,
  'support-02': color.ragamber,
  'support-03': color.raggreen,
  'ui-fill-extended-01': color.darkblue80,
  'ui-fill-extended-02': color.darkblue60,
  'ui-fill-extended-03': color.darkblue40,
  'ui-fill-extended-04': color.darkblue20,
  'ui-fill-extended-05': color.datacomblue80,
  'ui-fill-extended-06': color.datacomblue60,
  'ui-fill-extended-07': color.datacomblue40,
  'ui-fill-extended-08': color.datacomblue20,
  'ui-fill-extended-09': color.lightblue80,
  'ui-fill-extended-10': color.lightblue60,
  'ui-fill-extended-11': color.lightblue40,
  'ui-fill-extended-12': color.lightblue20,
  'ui-fill-extended-13': color.cobaltblue80,
  'ui-fill-extended-14': color.cobaltblue60,
  'ui-fill-extended-15': color.cobaltblue40,
  'ui-fill-extended-16': color.cobaltblue20,
  'ui-fill-extended-17': color.extralightblue80,
  'ui-fill-extended-18': color.extralightblue60,
  'ui-fill-extended-19': color.extralightblue40,
  'ui-fill-extended-20': color.extralightblue20,
  'ui-fill-extended-21': color.accentpink80,
  'ui-fill-extended-22': color.accentpink60,
  'ui-fill-extended-23': color.accentpink40,
  'ui-fill-extended-24': color.accentpink20,
  'ui-fill-extended-25': color.accentorange80,
  'ui-fill-extended-26': color.accentorange60,
  'ui-fill-extended-27': color.accentorange40,
  'ui-fill-extended-28': color.accentorange20,
  'ui-fill-extended-29': color.accentseablue80,
  'ui-fill-extended-30': color.accentseablue60,
  'ui-fill-extended-31': color.accentseablue40,
  'ui-fill-extended-32': color.accentseablue20,
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
