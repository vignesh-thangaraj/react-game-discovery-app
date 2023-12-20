import {
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          color="gray.500"
          as={icons[platform.slug]}
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
