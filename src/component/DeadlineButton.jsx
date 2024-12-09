import { useEffect, useState } from "react";
import Button from "./Button";

export const DeadlineButton = ({ closingDate }) => {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date(closingDate);
    const now = new Date();
    if (now > targetDate) {
      setIsPast(true);
    }
  }, [closingDate]);
  return (
    <>
      {isPast && (
        <Button
          size={"xxs"}
          label={"마감"}
          variant={"orange"}
          cusor={"default"}
        />
      )}
    </>
  );
};
