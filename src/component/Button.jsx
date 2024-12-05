import { cva } from "class-variance-authority";
import { cn } from "../util/cn";

const ButtonVariants = cva(
  ` flex justify-center items-center active:scale-95 rounded-xl 
    font-bold text-slate-100 transition-all shadow-md
    hover:scale-105 duration-200 tracking-[.01em] p-[3px] ease-in-out
    `,
  {
    variants: {
      variant: {
        default: "active:scale-100 bg-[#041F32]",
        orange: "bg-[#E96C32]",
        lightgray: "bg-[#D9D9D9]",
      },
      size: {
        default: "w-[6rem] h-[3rem] text-[0.875rem]",
        sm: "w-[3.5rem] h-[2.375rem] text-[0.775rem] tracking-[.17em]",
        md: "w-[6.875rem] h-[2.375rem] text-[0.775rem] rounded-md",
        wlg: "w-[8.5rem] h-[2.375rem] text-[0.775rem]",
      },
      isActive: {
        true: "bg-[#E96C32]",
        false: "bg-[#D9D9D9]",
      },
      isLogin: {
        true: "mt-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({ variant, size, isActive, label, isLogin, ...props }) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size, isActive, isLogin }))}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
