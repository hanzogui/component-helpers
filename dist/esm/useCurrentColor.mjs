import { getVariable, useTheme } from "@hanzogui/web";
const useCurrentColor = colorProp => {
  const theme = useTheme();
  const out = colorProp ? getVariable(colorProp) : theme[colorProp]?.get() || theme.color?.get();
  return out;
};
export { useCurrentColor };
//# sourceMappingURL=useCurrentColor.mjs.map
