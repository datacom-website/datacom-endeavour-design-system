import React from 'react';
import Button from './Button';
import { buttonColors } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
};

// Displays the button component
// Can be configured in storybook
// export const paddingTokens = (args) => <Button {...args}/>;
// paddingTokens.args = {
//     text: 'Click Me',
//     backgroundColor: "green",
//     padding: '4px',
// }

// Display all buttons
// {buttonColors} is returning the array values
// export const allButtons = () => (
//   <div>
//     {buttonColors.map((colorItem) => {
//       return (
//         <div style={{
//             padding: '12px 8px',
//             borderBottom: '1px solid #DADADA',
//             display: 'flex',
//             alignItems: 'center',
//         }}>
//           <Button text='Hello' backgroundColor={colorItem} padding='10px' />
//           <p> {colorItem} </p>
//         </div>
//       )
//     })}
//   </div>
// )