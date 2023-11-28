"use client";

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
    global.localStorage.setItem("orderState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

export const loadOrderLocalStorage = (): any => {
  try {
    const serializedState = global.localStorage.getItem("orderState");
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

export const showPrice = (price: number): string => {
  const dollar: string = (price * 100).toFixed().slice(0, -2);
  const cents: string = (price * 100).toFixed().slice(-2);
  const arrayToJoin: string[] = [dollar === "" ? "0" : dollar, cents];
  const actualPrice: string = arrayToJoin.join(",");
  return actualPrice;
};
