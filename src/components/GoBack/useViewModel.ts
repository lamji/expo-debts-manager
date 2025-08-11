import { useNavigation } from '@react-navigation/native';

const useViewModel = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleGoBack,
  };
};

export default useViewModel;
