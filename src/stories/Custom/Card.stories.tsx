import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY
} from '@storybook/addon-docs';
import { Card } from '../../components';

export default {
  title: 'Custom/Area/Card',
  component: Card,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      )
    }
  },
  argTypes: {
    content: {
      name: 'content',
      defaultValue: 'hello'
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Custom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  content: 'good'
};
