import { Alert } from 'react-native';
import { FilteredViewProps } from '.';

const useViewModel = (props: FilteredViewProps) => {
  const handleClear = () => {
    props.handleClear ? props.handleClear() : Alert.alert('Clear action not defined');
  };

  return {
    handleClear,
  };
};

export default useViewModel;
