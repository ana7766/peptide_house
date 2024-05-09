// useCardState.tsx
export function useCardState(initialState: boolean) {
    let isOpen = initialState;
  
    const toggleCard = () => {
      isOpen = !isOpen;
    };
  
    const getIsOpen = () => isOpen;
  
    return {
      toggleCard,
      getIsOpen,
    };
  }
  