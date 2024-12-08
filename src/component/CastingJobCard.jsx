import { Bookmark } from "lucide-react";
import Button from "./Button";

export const CastingJobCard = ({ cast }) => {
  return (
    <div className=" w-[200px]   border boder-[#E6E6E6] border-solid rounded-xl ">
      <img
        src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
        className="w-[200px] h-[200px] rounded-xl"
      />
      <div className="p-1 ">
        <div className="flex gap-2 ">
          <span className="font-bold text-sm">{cast.title}</span>
          <Bookmark className="w-7 h-7" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">{cast.closing_date.substr(2)}</p>
          <Button size={"xxs"} label={"마감"} variant={"orange"} />
        </div>
        <div className="flex items-end justify-items-start">
          <Button size={"xs"} label={cast.category} />
          <Button size={"xs"} label={cast.category_sub} />
        </div>
      </div>
    </div>
  );
};
