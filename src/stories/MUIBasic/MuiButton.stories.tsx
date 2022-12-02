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
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'MUI BASIC/Action/Button',
  component: Button,
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
    size: {
      name: 'Button Size',
      defaultValue: 'small',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    color: {
      name: 'Button Color',
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    },
    variant: {
      name: 'Button Variant',
      defaultValue: 'contained',
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' }
    },
    disabled: {
      name: 'Disable',
      defaultValue: false,
      options: [true, false],
      control: { type: 'radio' }
    },
    startIcon: {
      name: 'Start Icon',
      defaultValue: 'arrow',
      options: ['none', 'arrow', 'KeyboardArrow'],
      mapping: {
        none: '',
        arrow: <ChevronLeftIcon />,
        KeyboardArrow: <KeyboardDoubleArrowLeftOutlinedIcon />
      },
      control: { type: 'radio' }
    },
    endIcon: {
      name: 'End Icon',
      defaultValue: 'none',
      options: ['none', 'arrow', 'KeyboardArrow'],
      mapping: {
        none: '',
        arrow: <ChevronRightIcon />,
        KeyboardArrow: <KeyboardDoubleArrowRightOutlinedIcon />
      },
      control: { type: 'radio' }
    }
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  size: 'small',
  children: 'Button',
  color: 'primary',
  startIcon: 'none',
  onClick: () => {
    alert('Button Clicked');
  },
  variant: 'contained'
};
Small.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' }
    ]
  }
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button',
  color: 'secondary',
  startIcon: 'none',
  onClick: () => {
    alert('Button Clicked');
  },
  variant: 'contained'
};
