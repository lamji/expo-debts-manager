import { useState } from 'react';

const useViewModel = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return {
    visible,
    openMenu,
    closeMenu,
  };
};

export default useViewModel;
