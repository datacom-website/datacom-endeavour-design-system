import React from 'react';
import { Table } from './Table';
import { paddingNames, paddingValues } from './Padding';
import { layoutNames, layoutValues } from './Layout';

//  Shows the component on the side panel
export default {
    title: 'Design System/Spacing And Layout',
}

const tableTemplate = args => <Table {...args}/>

export const paddingTable = tableTemplate.bind({});
paddingTable.args = {
    categories: [
        'Token',
        'REM',
        'Px value',
        'Example',],
    tokens: paddingNames,
    data: paddingValues,
}

export const layoutTable = tableTemplate.bind({});
layoutTable.args = {
    categories: [
        'Token',
        'REM',
        'Px value',
        'Example',],
    tokens: layoutNames,
    data: layoutValues,
    topic: 'Layout',
}

paddingTable.storyName = 'Padding Tokens';

layoutTable.storyName = 'Layout Tokens'
