import React from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Introduction', 'Design System', 'Welcome', 'Change Log', 'MUI BASIC', 'Custom']
    },
  },
  layout: 'padded',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div background="#D0EBF1">
      <Story />
    </div>
  ),
];