import React from 'react';
import { Colour } from './Colour';
import { Icon } from './Icon';

export default {
  title: 'Design System/Colour',
  component: Colour,
};

export const CoreColours = () => (
  <div>
    <Colour token="background-white-theme">$background-white-theme</Colour>
    <Colour token="ui-background-dark-theme">$ui-background-dark-theme</Colour>
    <Colour token="ui-background-light-theme">
      $ui-background-light-theme
    </Colour>
    <Colour token="overlay-dark-01">$overlay-dark-01</Colour>
    <Colour token="overlay-dark-02">$overlay-dark-02</Colour>
    <Colour token="text-01">$text-01</Colour>
    <Colour token="text-02">$text-02</Colour>
    <Colour token="text-03">$text-03</Colour>
    <Colour token="text-04">$text-04</Colour>
    <Colour token="text-05">$text-05</Colour>
    <Colour token="ui-01">$ui-01</Colour>
    <Colour token="ui-02">$ui-02</Colour>
    <Colour token="ui-03">$ui-03</Colour>
    <Colour token="ui-04">$ui-04</Colour>
    <Colour token="ui-05">$ui-05</Colour>
    <Colour token="ui-06">$ui-06</Colour>
    <Colour token="ui-07">$ui-07</Colour>
    <Colour token="ui-08">$ui-08</Colour>
    <Colour token="ui-09">$ui-09</Colour>
    <Colour token="interactive-01">$interactive-01</Colour>
    <Colour token="interactive-hover-01">$interactive-hover-01</Colour>
    <Colour token="link-01">$link-01</Colour>
    <Colour token="link-hover-01">$link-hover-01</Colour>
    <Colour token="link-02">$link-02</Colour>
    <Colour token="link-03">$link-03</Colour>
    <Colour token="link-04">$link-04</Colour>
    <Colour token="link-visited-white-theme">$link-visited-white-theme</Colour>
    <Colour token="link-visited-dark-theme">$link-visited-dark-theme</Colour>
    <Colour token="ui-greyscale-01">$ui-greyscale-01</Colour>
    <Colour token="ui-greyscale-02">$ui-greyscale-02</Colour>
    <Colour token="ui-greyscale-03">$ui-greyscale-03</Colour>
    <Colour token="ui-greyscale-04">$ui-greyscale-04</Colour>
    <Colour token="ui-greyscale-05">$ui-greyscale-05</Colour>
    <Colour token="ui-greyscale-06">$ui-greyscale-06</Colour>
    <Colour token="disabled-01">$disabled-01</Colour>
    <Colour token="disabled-02">$disabled-02</Colour>
    <Colour token="support-01">$support-01</Colour>
    <Colour token="support-02">$support-02</Colour>
    <Colour token="support-03">$support-03</Colour>
  </div>
);

CoreColours.storyName = 'core colour tokens';

export const ExtendedShade = () => (
  <div>
    <Colour token="ui-fill-extended-01">$ui-fill-extended-01</Colour>
    <Colour token="ui-fill-extended-02">$ui-fill-extended-02</Colour>
    <Colour token="ui-fill-extended-03">$ui-fill-extended-03</Colour>
    <Colour token="ui-fill-extended-04">$ui-fill-extended-04</Colour>
    <Colour token="ui-fill-extended-05">$ui-fill-extended-05</Colour>
    <Colour token="ui-fill-extended-06">$ui-fill-extended-06</Colour>
    <Colour token="ui-fill-extended-07">$ui-fill-extended-07</Colour>
    <Colour token="ui-fill-extended-08">$ui-fill-extended-08</Colour>
    <Colour token="ui-fill-extended-09">$ui-fill-extended-09</Colour>
    <Colour token="ui-fill-extended-10">$ui-fill-extended-10</Colour>
    <Colour token="ui-fill-extended-11">$ui-fill-extended-11</Colour>
    <Colour token="ui-fill-extended-12">$ui-fill-extended-12</Colour>
    <Colour token="ui-fill-extended-13">$ui-fill-extended-13</Colour>
    <Colour token="ui-fill-extended-14">$ui-fill-extended-14</Colour>
    <Colour token="ui-fill-extended-15">$ui-fill-extended-15</Colour>
    <Colour token="ui-fill-extended-16">$ui-fill-extended-16</Colour>
    <Colour token="ui-fill-extended-17">$ui-fill-extended-17</Colour>
    <Colour token="ui-fill-extended-18">$ui-fill-extended-18</Colour>
    <Colour token="ui-fill-extended-19">$ui-fill-extended-19</Colour>
    <Colour token="ui-fill-extended-20">$ui-fill-extended-20</Colour>
    <Colour token="ui-fill-extended-21">$ui-fill-extended-21</Colour>
    <Colour token="ui-fill-extended-22">$ui-fill-extended-22</Colour>
    <Colour token="ui-fill-extended-23">$ui-fill-extended-23</Colour>
    <Colour token="ui-fill-extended-24">$ui-fill-extended-24</Colour>
    <Colour token="ui-fill-extended-25">$ui-fill-extended-25</Colour>
    <Colour token="ui-fill-extended-26">$ui-fill-extended-26</Colour>
    <Colour token="ui-fill-extended-27">$ui-fill-extended-27</Colour>
    <Colour token="ui-fill-extended-28">$ui-fill-extended-28</Colour>
    <Colour token="ui-fill-extended-29">$ui-fill-extended-29</Colour>
    <Colour token="ui-fill-extended-30">$ui-fill-extended-30</Colour>
    <Colour token="ui-fill-extended-31">$ui-fill-extended-31</Colour>
    <Colour token="ui-fill-extended-32">$ui-fill-extended-32</Colour>
  </div>
);

ExtendedShade.storyName = 'extended shade tokens';

export const WithIcon = (args) => (
  <Colour {...args}>
    <Icon {...args} />
    with icon
  </Colour>
);

WithIcon.args = {
  status: 'warning',
  icon: 'check',
  inline: true,
};

WithIcon.storyName = 'with icon';
