export function changeLocationInOrderLocationsList<T>(
  array: T[],
  index: number,
  newElement: T
): T[] {
  if (index >= 0 && index < array.length) {
    const newArray = [...array];
    newArray[index] = newElement;
    return newArray;
  } else {
    throw new Error("Index out of bounds");
  }
}

export const saveToLocalStorage = (state: any): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("orderState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

export const loadOrderLocalStorage = (): any => {
  try {
    const serializedState = localStorage.getItem("orderState");
    if (serializedState !== null) return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

export function trimArray<T>(array: T[], length: number): T[] {
  if (length < 0 || length > array.length) {
    throw new Error("Invalid length specified");
  }
  return array.slice(0, length);
}
