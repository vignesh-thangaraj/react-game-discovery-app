import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const OrderFilter = () => {
  const setOrderBy = useGameQueryStore((s) => s.setOrderBy);

  const orderItem = [
    {
      label: "By Name",
      value: "name",
    },
    {
      label: "By Released",
      value: "name",
    },
    {
      label: "By Added",
      value: "-added",
    },
    {
      label: "By Rating",
      value: "rating",
    },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {"Order By: Relevance"}
      </MenuButton>
      <MenuList>
        {orderItem.map((order) => (
          <MenuItem onClick={() => setOrderBy(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderFilter;
