import { Switch, Typography, Box } from "@material-ui/core";
import { ChangeEvent, useCallback } from "react";
import Card from "../Card";

export interface Config {
  optimistic: boolean;
  delay: boolean;
  forceError: boolean;
}

export interface ControlPanelProps {
  config: Config;
  onChange: (config: Config) => void;
}

const keyMap: Array<[string, string, keyof Config]> = [
  ["Optimistic", "Provide optimistic responses" ,"optimistic"],
  ["Delay", "Delay endpoint response by 1500ms", "delay"],
  ["Force Error", "Make endpoint return error", "forceError"],
];

const ControlPanel = ({ config, onChange }: ControlPanelProps) => {
  const handleChange = useCallback(
    ({ target: { name, checked } }: ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...config,
        [name]: checked,
      });
    },
    [config, onChange]
  );

  return (
    <Card>
      <Typography variant="h5" align="center" gutterBottom>
        Controls
      </Typography>
      {keyMap.map(([label, caption, key]) => (
        <Box display="flex" justifyContent="space-between" alignItems="center" key={label} mb={4}>
          <Box mr={2} display="flex" flexDirection="column">
            <Typography>{label}</Typography>
            <Typography variant="caption" color="textSecondary">{caption}</Typography>
          </Box>
          <Switch name={key} onChange={handleChange} checked={config[key]} />
        </Box>
      ))}
    </Card>
  );
};

export default ControlPanel;
