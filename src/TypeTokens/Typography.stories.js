import React from "react";
import { headingTokens, headingValues } from './Headings';
import { productiveTokens, productiveValues } from './Productive';
import { Table } from "./Table";

export default {
    title: 'Design System/Typography'
}

const tableTemplate = args => <Table {...args} />;

export const headingsTable = tableTemplate.bind({});
headingsTable.args = {
    tokens: headingTokens,
    data: headingValues,
}

export const bodyTable = tableTemplate.bind({});
bodyTable.args = {
    tokens: headingTokens,
    data: headingValues,
    topic: 'Body'
}

export const productiveTable = tableTemplate.bind({});
productiveTable.args = {
    tokens: productiveTokens,
    data: productiveValues,
    topic: 'Productive'
}

headingsTable.storyName = 'Headings Tokens';

bodyTable.storyName = 'Body Tokens';

productiveTable.storyName = 'Productive Tokens';