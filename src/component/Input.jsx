import { cva } from "class-variance-authority";
import { cn } from "../util/cn";

const inputVariants = cva(` flex rounded-[5px] h-[2rem]  `, {
  variants: {
    color: {
      default: "bg-[#f4f4f4]",
    },
    size: {
      default: "text-[40px] w-[100%] h-[2.375rem]",
      sm: "text-[40px] w-[50%] h-[2.375rem]",
      xsm: "text-[40px] w-[30%] h-[2.375rem]",
      md: "text-[40px] w-[100%] h-[2.375rem]",
    },
    disabled: {
      true: "bg-gray-200 text-gray-500 cursor-not-allowed",
      false: "",
    },
    isValid: {
      true: "border-green-500 focus:ring-2 focus:ring-inset focus:ring-green-500 focus:outline-none",
      false:
        "border border-solid border-red-500 bg-[black]  focus:ring-2 focus:ring-inset focus:ring-red-500 focus:outline-none",
    },
  },
  defaultVariants: {
    color: "default",
    size: "small",
  },
});

const InputBox = ({ color, size, disabled, isValid, ...props }) => {
  return (
    <input
      disabled={disabled}
      isValid={isValid}
      className={cn(inputVariants({ color, size, disabled, isValid }))}
      {...props}
    />
  );
};

export default InputBox;
