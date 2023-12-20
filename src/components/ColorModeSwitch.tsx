import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">{colorMode} Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
