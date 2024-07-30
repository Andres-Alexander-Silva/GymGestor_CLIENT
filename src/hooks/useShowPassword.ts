import { useState } from "react";

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
};

export default useShowPassword;
