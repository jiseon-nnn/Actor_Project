import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledButton } from "../component/StyledButton";
import { BookmarkButton } from "../component/BookmarkButton";

export const CastingJobDetail = () => {
  const { contentId } = useParams();
  const [castDetail, setCastDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCastData = async () => {
      try {
        const response = await axios.get("/mockup_data/castPosting.JSON");
        const data = response.data;
        const detail = data.find(
          (item) => item.content_id === parseInt(contentId)
        );

        if (!detail) {
          throw new Error("서버에서 정보를 찾을 수 없습니다.");
        }
        setCastDetail(detail);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCastData();
  }, [contentId]);
  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl text-center gap-4 p-5">
        <div className="flex justify-between ">
          <StyledButton label={"진행 중"} size={"xs"} />
          <BookmarkButton />
        </div>
        <h1 className="font-[900] text-4xl">{castDetail.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <StyledButton label={"진행 중"} size={"xs"} />
            <StyledButton label={"진행 중"} size={"xs"} />
          </div>
          <StyledButton
            label={`모집기한: ${castDetail.closing_date}`}
            size={"wlg"}
          />
        </div>
      </div>
      <img src={`${castDetail.post_img}`} className="w-[20rem] rounded-xl" />
    </div>
  );
};
