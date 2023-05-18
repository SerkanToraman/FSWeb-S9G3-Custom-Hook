import {useStorageInput} from "./LocalStorageKullan"

export const useInput = () => {

  const [value,SetValue] = useStorageInput("geceModu",false);

  // const toggleMode = e => {
  //   e.preventDefault();
  //   SetValue(!value);
  // };

  return [value, SetValue];
};

