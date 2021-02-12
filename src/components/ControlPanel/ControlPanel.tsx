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

const keyMap: Array<[string, keyof Config]> = [
  ["Optimistic", "optimistic"],
  ["Delay", "delay"],
  ["Force Error", "forceError"],
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
      {keyMap.map(([label, key]) => (
        <Box display="flex" justifyContent="space-between" key={label}>
          <Box>
            <Typography>{label}</Typography>
          </Box>
          <Switch name={key} onChange={handleChange} checked={config[key]} />
        </Box>
      ))}
    </Card>
  );
};

export default ControlPanel;
