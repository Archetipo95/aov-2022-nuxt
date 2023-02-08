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

// Just for Chromatic

// const Snapshot: Story<CellProps> = () => ({
//   template: "<Story>Default</Story>",
// });

// export const Circle2 = Snapshot.bind({}) as StorybookTemplateType<CellProps>;
// Circle2.list = [Default, Cross, Circle];

// console.log(Default);

// export const Snapshot = () => (
//   <SnapshotContainer>
//     {[Default, Cross, Circle].map((Story, index) => (
//       <Story key={index} {...Story.args} />
//     ))}
//   </SnapshotContainer>
// );

// Snapshot.parameters = {
//   chromatic: { disableSnapshot: false },
// };
