import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Menu } from 'react-native-paper';

import useStyles from './useStyles';
import useViewModel from './useViewModel';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  menuItems: {
    title: string;
    onPress: () => void;
    icon: string;
  }[];
};

const FilterMenu = ({ menuItems }: Props) => {
  const styles = useStyles();
  const { closeMenu, openMenu, visible } = useViewModel();

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity style={styles.wrapper} onPress={openMenu}>
            <Text style={styles.title}>Filter By</Text>
            <Ionicons size={20} name="filter" />
          </TouchableOpacity>
        }
        contentStyle={styles.menuContent}
      >
        {menuItems.map(item => (
          <Menu.Item
            key={item.title}
            onPress={() => {
              item.onPress();
              closeMenu();
            }}
            title={item.title}
            leadingIcon={item.icon}
          />
        ))}
      </Menu>
    </View>
  );
};

export default FilterMenu;
