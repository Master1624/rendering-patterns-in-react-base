import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState<string>("");
  
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Ingresa el código del cupón. Ej: 10OFF"
        onChange={(e) => {
          const newValue = e.target.value;
          setValue(newValue);
        }}
      />
      <p>
        Cupón de descuento: <b>{value}</b>
      </p>
    </div>
  );
};
