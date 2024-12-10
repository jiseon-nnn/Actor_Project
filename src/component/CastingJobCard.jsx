import { DeadlineButton } from "./DeadlineButton";
import { BookmarkButton } from "./BookmarkButton";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledButton";

export const CastingJobCard = ({ cast }) => {
  const navigate = useNavigate();
  const content_id = cast.content_id;
  const handler = (id) => {
    navigate(`/casting_job/${id}`);
  };
  return (
    <div className=" w-[200px] border boder-[#E6E6E6] border-solid rounded-xl ">
      <img
        onClick={() => {
          handler(content_id);
        }}
        src={`${cast.post_img}`}
        className="w-[200px] h-[200px] rounded-xl cursor-pointer"
      />
      <div className="p-1 flex flex-col gap-2">
        <div className="flex gap-2 ">
          <span
            onClick={() => {
              handler(content_id);
            }}
            className="font-bold text-sm cursor-pointer"
          >
            {cast.title}
          </span>
          <BookmarkButton />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">{cast.closing_date.substr(2)}</p>
          <DeadlineButton closingDate={cast.closing_date} />
        </div>
        <div className="flex items-end justify-items-start gap-1 pt-2">
          <StyledButton size={"xs"} label={cast.category} cusor={"default"} />
          <StyledButton
            size={"xs"}
            label={cast.category_sub}
            cusor={"default"}
          />
        </div>
      </div>
    </div>
  );
};
