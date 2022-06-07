import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//  40 color tokens
export const colorTokens = [
    {
        token: '$background-white-theme', 
        role: 'Default page background; White theme background fill;',
        name: 'White',
        hex: '#ffffff',
    },
    {
        token: '$ui-background-dark-theme', 
        role: 'Dark theme background fill',
        name: 'Dark Blue',
        hex: '#0a1839'
    },
    {
        token: '$ui-background-light-theme', 
        role: 'Light theme background fill',
        name: 'Extra Light Blue',
        hex: '#e5f1ff'
    },
    {
        token: '$overlay-dark-01', 
        role: 'Dark theme colour overlay 1; Lightbox/modal/navigation background overlay; Image overlay',
        name: 'Dark Blue @ 60% opacity',
        hex: '#0a1839',
        opacity: 60
    },
    {
        token: '$overlay-dark-02', 
        role: 'Dark theme colour overlay 2; Image overlay',
        name: 'Datacom Blue @ 60% opacity',
        hex: '#002470',
        opacity: 60
    },
    {
        token: '$overlay-light-01', 
        role: 'Light theme colour overlay',
        name: 'Extra Light Blue @ 80% opacity',
        hex: '#e5f1ff',
        opacity: 80
    },
    {
        token: '$text-01', 
        role: 'Primary text (white, light themes); Headers; Body copy',
        name: 'Dark Blue',
        hex: '#0a1839',
    },
    {
        token: '$text-02', 
        role: 'Primary text (dark theme); Headers; Body copy',
        name: 'White',
        hex: '#ffffff',
    },
    {
        token: '$text-03', 
        role: 'Secondary text; Headers',
        name: 'Datacom Blue',
        hex: '#002470',
    },
    {
        token: '$text-04', 
        role: 'Secondary text; Headers',
        name: 'Cobalt Blue',
        hex: '#0047ba',
    },
    {
        token: '$text-05', 
        role: 'Secondary text; Headers',
        name: 'Light Blue',
        hex: '#76c4ff',
    },
    {
        token: '$ui-01', 
        role: 'UI element fill',
        name: 'White',
        hex: '#0047ba',
    },
    {
        token: '$ui-02', 
        role: 'UI element fill',
        name: 'Dark Blue',
        hex: '#0a1839',
    },
    {
        token: '$ui-03', 
        role: 'UI element fill',
        name: 'Datacom Blue',
        hex: '#002470',
    },
    {
        token: '$ui-04', 
        role: 'UI element fill',
        name: 'Cobalt Blue',
        hex: '#0047ba',
    },
    {
        token: '$ui-05', 
        role: 'UI element fill',
        name: 'Light Blue',
        hex: '#76c4ff',
    },
    {
        token: '$ui-06', 
        role: 'UI element fill',
        name: 'Extra Light Blue',
        hex: '#e5f1ff',
    },
    {
        token: '$ui-07', 
        role: 'UI accent element fill (commonly used)',
        name: 'Primary Accent Pink',
        hex: '#e60060',
    },
    {
        token: '$ui-08', 
        role: 'UI accent element fill (sparingly used)',
        name: 'Secondary Accent Orange',
        hex: '#f04c2c',
    },
    {
        token: '$ui-09', 
        role: 'UI accent element fill (rarely used)',
        name: 'Tertiary Accent Sea Blue',
        hex: '#00adbb',
    },
    {
        token: '$interactive-01', 
        role: 'Primary interactive colour; Primary buttons;',
        name: 'Action Blue',
        hex: '#0055ff',
    },
    {
        token: '$interactive-02', 
        role: 'Primary interactive colour; Secondary buttons; Tertiary buttons',
        name: 'White',
        hex: '#ffffff',
    },
    {
        token: '$interactive-hover-01', 
        role: 'Hover state colour; Primary buttons;',
        name: 'Action Blue Hover',
        hex: '#003fbc',
    },
    {
        token: '$interactive-hover-02', 
        role: 'Hover state colour; Secondary buttons, Tertiary buttons',
        name: 'Extra Light Grey',
        hex: '#f0f0f0',
    },
    {
        token: '$link-01', 
        role: 'CTA link (white theme) - Default',
        name: 'Action Blue',
        hex: '#0055ff',
    },
    {
        token: '$link-hover-01', 
        role: 'CTA link - Hover, active state',
        name: 'Action Blue Hover',
        hex: '#003fbc',
    },
    {
        token: '$link-02', 
        role: 'CTA link (dark theme) - Default',
        name: 'Light Blue',
        hex: '#76c4ff',
    },
    {
        token: '$link-03', 
        role: 'Stacked links (white theme)',
        name: 'Dark Blue',
        hex: '#0a1839',
    },
    {
        token: '$link-04', 
        role: 'Stacked links (dark theme)',
        name: 'White',
        hex: '#ffffff',
    },
    {
        token: '$link-visited-white-theme', 
        role: 'Link visited - For use on white theme components/pages',
        name: 'Deep Royal Purple',
        hex: '#6b2fc6',
    },
    {
        token: '$link-visited-dark-theme', 
        role: 'Link visited - For use on dark theme components/pages',
        name: 'Light Royal Purple',
        hex: '#b888ff',
    },
    {
        token: '$ui-greyscale-01', 
        role: 'UI element fill',
        name: 'Datacom Black',
        hex: '#151515',
    },
    {
        token: '$ui-greyscale-02', 
        role: 'UI element fill',
        name: 'Darkest Grey',
        hex: '#333333',
    },
    {
        token: '$ui-greyscale-03', 
        role: 'UI element fill',
        name: 'Dark Grey',
        hex: '#666666',
    },
    {
        token: '$ui-greyscale-04', 
        role: 'UI element fill',
        name: 'Grey',
        hex: '#999999',
    },
    {
        token: '$ui-greyscale-05', 
        role: 'UI element fill; Dividers',
        name: 'Light Grey',
        hex: '#dadada',
    },
    {
        token: '$ui-greyscale-06', 
        role: 'UI element fill',
        name: 'Extra Light Grey',
        hex: '#f0f0f0',
    },
    {
        token: '$disabled-01', 
        role: 'Disabled element fill',
        name: 'Grey',
        hex: '#999999',
    },
    {
        token: '$disabled-02', 
        role: 'Disabled element fill',
        name: 'Light Grey',
        hex: '#dadada',
    },
    {
        token: '$support-01', 
        role: 'RAG traffic light elements; Error',
        name: 'RAG Red',
        hex: '#cf364e',
    },
    {
        token: '$support-02', 
        role: 'RAG traffic light elements; Warning',
        name: 'RAG Amber',
        hex: '#f0b02c',
    },
    {
        token: '$support-03', 
        role: 'RAG traffic light elements; Success',
        name: 'RAG Green',
        hex: '#40b549',
    },
]

//  32 color enxtended shades
export const extendedShades = [
    {
        token: '$ui-fill-extended-01', 
        role: 'UI element fill',
        name: 'Dark Blue 80',
        hex: '#3b4660',
    },
    {
        token: '$ui-fill-extended-02', 
        role: 'UI element fill',
        name: 'Dark Blue 60',
        hex: '#6c7488',
    },
    {
        token: '$ui-fill-extended-03', 
        role: 'UI element fill',
        name: 'Dark Blue 40',
        hex: '#9da2af',
    },
    {
        token: '$ui-fill-extended-04', 
        role: 'UI element fill',
        name: 'Dark Blue 20',
        hex: '#ced0d7',
    },
    {
        token: '$ui-fill-extended-05', 
        role: 'UI element fill',
        name: 'Datacom Blue 80',
        hex: '#334f8c',
    },
    {
        token: '$ui-fill-extended-06', 
        role: 'UI element fill',
        name: 'Datacom Blue 60',
        hex: '#667ba9',
    },
    {
        token: '$ui-fill-extended-07', 
        role: 'UI element fill',
        name: 'Datacom Blue 40',
        hex: '#99a7c6',
    },
    {
        token: '$ui-fill-extended-08', 
        role: 'UI element fill',
        name: 'Datacom Blue 20',
        hex: '#ccd3e2',
    },
    {
        token: '$ui-fill-extended-09', 
        role: 'UI element fill',
        name: 'Light Blue 80',
        hex: '#91cfff',
    },
    {
        token: '$ui-fill-extended-10', 
        role: 'UI element fill',
        name: 'Light Blue 60',
        hex: '#acdbff',
    },
    {
        token: '$ui-fill-extended-11', 
        role: 'UI element fill',
        name: 'Light Blue 40',
        hex: '#c8e7ff',
    },
    {
        token: '$ui-fill-extended-12', 
        role: 'UI element fill',
        name: 'Light Blue 20',
        hex: '#e3f3ff',
    },
    {
        token: '$ui-fill-extended-13', 
        role: 'UI element fill',
        name: 'Cobalt Blue 80',
        hex: '#486dc2',
    },
    {
        token: '$ui-fill-extended-14', 
        role: 'UI element fill',
        name: 'Cobalt Blue 60',
        hex: '#7692d2',
    },
    {
        token: '$ui-fill-extended-15', 
        role: 'UI element fill',
        name: 'Cobalt Blue 40',
        hex: '#a3b6e0',
    },
    {
        token: '$ui-fill-extended-16', 
        role: 'UI element fill',
        name: 'Cobalt Blue 20',
        hex: '#d1daf0',
    },
    {
        token: '$ui-fill-extended-17', 
        role: 'UI element fill',
        name: 'Extra Light Blue 80',
        hex: '#eaf3ff',
    },
    {
        token: '$ui-fill-extended-18', 
        role: 'UI element fill',
        name: 'Extra Light Blue 60',
        hex: '#eff6ff',
    },
    {
        token: '$ui-fill-extended-19', 
        role: 'UI element fill',
        name: 'Extra Light Blue 40',
        hex: '#f5f9ff',
    },
    {
        token: '$ui-fill-extended-20', 
        role: 'UI element fill',
        name: 'Extra Light Blue 20',
        hex: '#fafcff',
    },
    {
        token: '$ui-fill-extended-21', 
        role: 'UI element fill',
        name: 'Primary Accent Pink 80',
        hex: '#eb337f',
    },
    {
        token: '$ui-fill-extended-22', 
        role: 'UI element fill',
        name: 'Primary Accent Pink 60',
        hex: '#f0669f',
    },
    {
        token: '$ui-fill-extended-23', 
        role: 'UI element fill',
        name: 'Primary Accent Pink 40',
        hex: '#f599bf',
    },
    {
        token: '$ui-fill-extended-24', 
        role: 'UI element fill',
        name: 'Primary Accent Pink 20',
        hex: '#faccdf',
    },
    {
        token: '$ui-fill-extended-25', 
        role: 'UI element fill',
        name: 'Secondary Accent Orange 80',
        hex: '#f36f56',
    },
    {
        token: '$ui-fill-extended-26', 
        role: 'UI element fill',
        name: 'Secondary Accent Orange 60',
        hex: '#f69380',
    },
    {
        token: '$ui-fill-extended-27', 
        role: 'UI element fill',
        name: 'Secondary Accent Orange 40',
        hex: '#f9b7aa',
    },
    {
        token: '$ui-fill-extended-28', 
        role: 'UI element fill',
        name: 'Secondary Accent Orange 20',
        hex: '#fcdbd4',
    },
    {
        token: '$ui-fill-extended-29', 
        role: 'UI element fill',
        name: 'Tertiary Accent Sea Blue 80',
        hex: '#71bcc7',
    },
    {
        token: '$ui-fill-extended-30', 
        role: 'UI element fill',
        name: 'Tertiary Accent Sea Blue 60',
        hex: '#94cdd5',
    },
    {
        token: '$ui-fill-extended-31', 
        role: 'UI element fill',
        name: 'Tertiary Accent Sea Blue 40',
        hex: '#b8dde3',
    },
    {
        token: '$ui-fill-extended-32', 
        role: 'UI element fill',
        name: 'Tertiary Accent Sea Blue 60',
        hex: '#dbeff1',
    },

]

export const ColorExample =
styled.div`
    background-color: ${props => props.color};
    // margin-left: auto;
    float: right;
    opacity: ${props => props.opacity};
    border-radius: 8px;
    border: solid 1px #DADADA;
`
