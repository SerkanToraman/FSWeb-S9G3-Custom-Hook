import { useState } from "react";

export const useInput = () => {
  const [geceModuHook,SetFeceModuHook] = useState(false);

  return [geceModuHook, SetFeceModuHook];
};

