import { Story, Meta } from "@storybook/react";
import { useState } from "react";

import ControlPanel, { ControlPanelProps } from "./ControlPanel";

export default {
  title: "Components/ControlPanel",
  component: ControlPanel,
} as Meta;

const initialConfig = {
  optimistic: false,
    delay: false,
    forceError: false,
}

const Template: Story<ControlPanelProps> = (args) => <ControlPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  config: initialConfig
};

const TemplateWithState: Story<ControlPanelProps> = (args) =>{
  const [config, setConfig] = useState(initialConfig);


  return  <ControlPanel {...args} config={config} onChange={setConfig}/>
};

export const WithState = TemplateWithState.bind({});