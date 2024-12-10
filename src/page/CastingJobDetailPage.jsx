import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledButton } from "../component/StyledButton";
import { BookmarkButton } from "../component/BookmarkButton";
import { DeadlineButton } from "../component/DeadlineButton";

export const CastingJobDetailPage = () => {
  const { contentId } = useParams();
  const [castDetail, setCastDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const now = new Date();
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
  const isClosed = now > new Date(castDetail.closing_date);
  return (
    <div className="flex flex-col gap-8 h-full p-5 ">
      <div className="flex flex-col w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl text-center gap-9 p-5">
        <div className="flex justify-between ">
          {isClosed ? (
            <DeadlineButton closingDate={castDetail.closing_date} size={"xs"} />
          ) : (
            <StyledButton label={"진행 중"} size={"xs"} />
          )}
          <BookmarkButton />
        </div>
        <h1 className="font-[900] text-4xl">{castDetail.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <StyledButton label={`${castDetail.category}`} size={"xs"} />
            <StyledButton label={`${castDetail.category_sub}`} size={"xs"} />
          </div>
          <StyledButton
            label={`모집기한: ${castDetail.closing_date}`}
            size={"wlg"}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={`${castDetail.post_img}`} className="w-[25rem] rounded-xl" />
      </div>
      <div className="flex  w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl  gap-9 p-10 ">
        <div className="flex gap-56">
          <div className="flex flex-col gap-5">
            <label>
              <strong>작품 카테고리</strong>
              <p>{castDetail.category_sub}</p>
            </label>
            <label>
              <strong>작품명</strong>
              <p>{castDetail.title_movie}</p>
            </label>
            <label>
              <strong>참고사항</strong>
              <p>{castDetail.remarks}</p>
            </label>
            <label>
              <strong>지원 방법</strong>
              <p>{castDetail.apply_content}</p>
            </label>
            <label>
              <strong>촬영일정</strong>
              <p>{castDetail.film_date}</p>
            </label>
          </div>
          <div className="h-full border-l-2"></div>
        </div>
        <div>
          <label>
            <strong>모집 상세 내용</strong>
            <p>{castDetail.contents}</p>
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {castDetail.recruit && (
          <div className="flex flex-col w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl gap-5 p-10">
            <div className="flex gap-5">
              <p>
                <strong>지원 역할</strong> {castDetail.recruit.name}{" "}
                <strong>역</strong>
              </p>
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit.gender}
                size={"xxs"}
              />
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit.actor_role}
                size={"xxs"}
              />
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit.age}
                size={"xxs"}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>
                <strong>역할 설명</strong> {castDetail.recruit.role_detail}
              </p>
              <StyledButton label={"지원하기"} size={"md"} />
            </div>
          </div>
        )}
        {castDetail.recruit_1 && (
          <div className="flex flex-col w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl gap-5 p-10">
            <div className="flex gap-5">
              <p>
                <strong>지원 역할</strong> {castDetail.recruit_1.name}{" "}
                <strong>역</strong>
              </p>
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit_1.gender}
                size={"xs"}
              />
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit_1.actor_role}
                size={"xs"}
              />
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit_1.age}
                size={"xs"}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>
                <strong>역할 설명</strong> {castDetail.recruit_1.role_detail}
              </p>
              <StyledButton label={"지원하기"} size={"md"} />
            </div>
          </div>
        )}
        {castDetail.recruit_2 && (
          <div className=" flex flex-col w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl gap-5 p-10">
            <div className="flex gap-5">
              <p>
                <strong>지원 역할</strong> {castDetail.recruit_2.name}{" "}
                <strong>역</strong>
              </p>
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit_2.gender}
                size={"xs"}
              />
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit_2.actor_role}
                size={"xs"}
              />
              <StyledButton
                variant={"gray"}
                label={castDetail.recruit_2.age}
                size={"xs"}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>
                <strong>역할 설명</strong> {castDetail.recruit_2.role_detail}
              </p>
              <StyledButton label={"지원하기"} size={"md"} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col w-[950px] border boder-[#E6E6E6] border-solid rounded-3xl gap-9 p-5">
        <strong>기업정보</strong>
        <div>
          <p>{castDetail.company_id}</p>
          <p>{castDetail.company_phone}</p>
          <p>{castDetail.company_email}</p>
        </div>
      </div>
    </div>
  );
};
