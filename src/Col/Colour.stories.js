import React from 'react';
import { Table } from './Table'
import { colorTokens } from './Colour';
import { extendedShades } from './Colour';

export default{
    title: 'Design System/Col...'
}

const tableTemplate = args => <Table {...args}/>;

export const coreColourTokens = tableTemplate.bind({});
coreColourTokens.args = {
    categories: [
        'Token',
        'Role',
        'Value'
    ],
    data: colorTokens,
}

export const extendedShadesTokens = tableTemplate.bind({});
extendedShadesTokens.args = {
    categories: [
        'Token',
        'Role',
        'Value'
    ],
    data: extendedShades,
}