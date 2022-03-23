//import { useSession, signIn, signOut } from "next-auth/react";
import {
  Button,
  Menu as ChaMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaCog,
  FaBookOpen,
  FaChevronDown,
  FaSignOutAlt,
  FaGoogle,
} from "react-icons/fa";

export const Menu = () => {
  const { colorMode, setColorMode } = useColorMode();
  //const { data: session } = useSession();

  return (
    <ChaMenu placement="bottom-end">
      <MenuButton as={Button} rightIcon={<FaChevronDown />} variant="ghost">
        <FaCog />
      </MenuButton>
      <MenuList>
        <MenuGroup title="Account">
          {/* {session ? (
            <>
              <MenuItem icon={<FaBookOpen />}>Saved Recipes</MenuItem>
              <MenuItem icon={<FaSignOutAlt />} onClick={() => signOut()}>
                <Text>Sign out</Text>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem icon={<FaGoogle />} onClick={() => signIn("google")}>
                <Text>Sign in with Google</Text>
              </MenuItem>
            </>
          )} */}
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuOptionGroup
            value={colorMode}
            title="Color Mode"
            type="radio"
            onChange={setColorMode}
          >
            <MenuItemOption value="light" closeOnSelect={false}>
              <Text>Light</Text>
            </MenuItemOption>
            <MenuItemOption value="dark" closeOnSelect={false}>
              <Text>Dark</Text>
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuGroup>
      </MenuList>
    </ChaMenu>
  );
};
