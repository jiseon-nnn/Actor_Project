import { useState } from "react";
import { FirstSelectForm, SecondSelectForm } from "./CastingSelectForm";
import { InputWithTitle } from "./InputWithTitle";
import { StyledInput } from "./StyledInput";

export const CastingJobCreateForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("default");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className="w-[700px] p-10">
      <div className="font-bold text-[1.7rem] ml-3">캐스팅 공고 등록</div>
      <hr className="w-[300px] bg-black h-[3px] mb-[50px]" />

      <section className="flex flex-col gap-[10px] pl-[40px]">
        <div className="flex gap-[10px]">
          <p className="w-[120px]">카테고리</p>
          <FirstSelectForm onSelectCategory={handleCategoryChange} />
          <SecondSelectForm category={selectedCategory} />
        </div>
        <InputWithTitle
          label="공고 타이틀"
          inputProps={{
            size: "md",
          }}
        />
        <InputWithTitle
          label="작품명"
          inputProps={{
            size: "md",
          }}
        />
        <div className="flex gap-[10px] items-center">
          <p className="w-[120px]">모집기간</p>
          <StyledInput size="xsm" type="date" />
          <span>-</span>
          <StyledInput size="xsm" type="date" />
        </div>
        <InputWithTitle
          label="공고 이미지"
          inputProps={{
            size: "md",
          }}
        />
        <div className="flex gap-[10px] items-center">
          <p className="w-[120px]">촬영/공연 일정</p>
          <StyledInput size="xsm" type="date" />
          <span>-</span>
          <StyledInput size="xsm" type="date" />
        </div>
        <InputWithTitle
          label="지원방법"
          inputProps={{
            size: "md",
            type: "textarea",
          }}
        />
        <InputWithTitle
          label="상세내용"
          inputProps={{
            size: "md",
            type: "textarea",
          }}
        />
        <div>
          <p>모집배역</p>
        </div>

        <InputWithTitle
          label="참고사항"
          inputProps={{
            size: "md",
            type: "textarea",
          }}
        />
      </section>
    </main>
  );
};
