import { cva } from "class-variance-authority";
import { cn } from "../util/cn";

const ButtonVariants = cva(
  ` flex justify-center items-center active:scale-95 rounded-xl 
    font-bold text-slate-100 transition-all shadow-md
     duration-200 tracking-[.01em] p-[3px] ease-in-out
    `,
  {
    variants: {
      variant: {
        default: "active:scale-100 bg-[#041F32]",
        orange: "bg-[#E96C32]",
        lightgray: "bg-[#D9D9D9] text-[#4C4C4C]",
        gray: "bg-[#dadada] text-white",
      },
      size: {
        default: "w-[6rem] h-[3rem] text-[0.875rem] ",
        xxs: "w-[2.7rem] h-[1.3rem] text-[0.775rem] ",
        xs: "w-[4rem] h-[1.7rem] text-[0.775rem] ",
        sm: "w-[3.5rem] h-[2.375rem] text-[0.775rem] tracking-[.17em] ",
        md: "w-[6.875rem] h-[2.375rem] text-[0.775rem] rounded-lg ",
        wlg: "w-[8.5rem] h-[2.375rem] text-[0.775rem]  p-1",
      },
      isActive: {
        true: "bg-[#E96C32]",
        false: "bg-[#D9D9D9]",
      },
      isLogin: {
        true: "",
      },
      cusor: {
        default: "cursor-default",
      },
      hover: {
        default: "hover:none",
        none: "hover:none",
        scale: "hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default",
      cusor: "default",
    },
  }
);

export const StyledButton = ({
  variant,
  size,
  isActive,
  label,
  isLogin,
  cusor,
  hover,
  ...props
}) => {
  return (
    <button
      className={cn(
        ButtonVariants({ variant, size, isActive, isLogin, cusor, hover })
      )}
      {...props}
    >
      {label}
    </button>
  );
};
