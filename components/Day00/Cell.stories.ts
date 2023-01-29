import { Meta, Story } from "@storybook/vue3";
import Cell from "./Cell.vue";
import { CellProps } from "./Cell.props";

export default {
  title: "Day00/Cell",
  component: Cell,
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
Default.args = {
  value: 1,
};
