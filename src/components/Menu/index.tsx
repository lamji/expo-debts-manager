import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Icon } from 'react-native-paper';

const MyComponentMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} textColor="white">
            Manage
          </Button>
        }
        contentStyle={{
          marginTop: 30,
          backgroundColor: 'white',
          top: 5,
          right: 0,
          width: 120,
        }}
      >
        <Menu.Item
          leadingIcon={({ color }) => <Icon source="pencil" size={20} color={color} />}
          onPress={() => {}}
          title="Edit"
          titleStyle={{ fontSize: 16 }}
          style={{ minHeight: 48 }}
        />
        <Menu.Item
          leadingIcon={({ color }) => <Icon source="delete" size={20} color={color} />}
          onPress={() => {}}
          title="Delete"
          titleStyle={{ fontSize: 16 }}
          style={{ minHeight: 48, padding: 0 }}
        />
      </Menu>
    </View>
  );
};

export default MyComponentMenu;
