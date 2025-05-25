import { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const toggleSwitch = (): void => {
    setEnabled((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleSwitch}
      className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
      aria-pressed={enabled}
      role="switch"
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
          enabled ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
