import { Meta, Story } from "@storybook/vue3";
import Cell from "./Cell.vue";
import { CellProps } from "./Cell.props";

export default {
  title: "Day00/Cell",
  component: Cell,
  argTypes: {
    value: {
      options: [, 0, 1],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<CellProps> = (args) => ({
  components: { Cell },
  setup() {
    return {
      args,
    };
  },
  template: '<Cell v-bind="args" />',
});

export const Default = Template.bind({}) as StorybookTemplateType<CellProps>;
Default.args = {};

export const Cross = Template.bind({}) as StorybookTemplateType<CellProps>;
Cross.args = {
  value: 0,
};

export const Circle = Template.bind({}) as StorybookTemplateType<CellProps>;
Circle.args = {
  value: 1,
};
