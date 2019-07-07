import {useState} from 'react';

export const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)){
      return ;
    }
    //eslint-disable-next-line
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  }