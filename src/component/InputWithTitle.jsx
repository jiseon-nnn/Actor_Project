import { StyledInput } from "./StyledInput";

export const InputWithTitle = ({
  label,
  inputProps = {}, // InputBox 관련 props
}) => (
  <div>
    <div className="flex gap-[10px]">
      <label className="w-[120px]">{label}</label>
      <StyledInput {...inputProps} />
    </div>
  </div>
);
