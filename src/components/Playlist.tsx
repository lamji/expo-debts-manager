import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal, Portal, Button } from 'react-native-paper';

// Define a more generic type for list items
export interface ListItem {
  id: string;
  primary: string;
  secondary: string;
  amount: string;
  type?: 'income' | 'expense' | 'neutral';
  icon?: string;
  date?: Date;
}

// Props interface for the Playlist component
interface PlaylistProps {
  data: ListItem[];
  onItemPress?: (item: ListItem) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ data, onItemPress }) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

  const showModal = (item: ListItem) => {
    setSelectedItem(item);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };
  const MyEmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No items to display.</Text>
      {/* You can add more elements here, like an image or a button */}
    </View>
  );

  // Render individual list item
  const renderItem = ({ item }: { item: ListItem }) => {
    // Determine text color based on amount type
    const amountColor =
      item.type === 'income' ? 'green' : item.type === 'expense' ? 'red' : 'black';

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          showModal(item);
          if (onItemPress) onItemPress(item);
        }}
      >
        {item.icon && (
          <MaterialIcons name={item.icon as any} size={24} color="#666" style={styles.icon} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.primary}>{item.primary}</Text>
          <Text style={styles.secondary}>{item.secondary}</Text>
        </View>
        <Text style={[styles.amount, { color: amountColor }]}>{item.amount}</Text>
      </TouchableOpacity>
    );
  };

  // Format date if available
  const formatDate = (date?: Date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.container}
        ListEmptyComponent={MyEmptyListComponent}
      />

      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
        >
          {selectedItem && (
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{selectedItem.primary}</Text>
                {selectedItem.icon && (
                  <MaterialIcons name={selectedItem.icon as any} size={28} color="#666" />
                )}
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Description:</Text>
                <Text style={styles.detailValue}>{selectedItem.secondary}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Amount:</Text>
                <Text
                  style={[
                    styles.detailValue,
                    {
                      color:
                        selectedItem.type === 'income'
                          ? 'green'
                          : selectedItem.type === 'expense'
                            ? 'red'
                            : 'black',
                    },
                  ]}
                >
                  {selectedItem.amount}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Type:</Text>
                <Text style={styles.detailValue}>
                  {selectedItem.type
                    ? selectedItem.type.charAt(0).toUpperCase() + selectedItem.type.slice(1)
                    : 'N/A'}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date:</Text>
                <Text style={styles.detailValue}>{formatDate(selectedItem.date)}</Text>
              </View>

              <Button mode="contained" onPress={hideModal} style={styles.closeButton}>
                Close
              </Button>
            </View>
          )}
        </Modal>
      </Portal>
    </>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fffefeff',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  primary: {
    fontWeight: 'bold',
    color: '#333',
  },
  secondary: {
    fontSize: 10,
    color: '#666',
  },
  amount: {},
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  // Modal styles
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: height * 0.7,
  },
  modalContent: {
    width: '100%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    maxWidth: '60%',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#dd0339ff',
  },
});

export default Playlist;
