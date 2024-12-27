const FirstSelectList = [
  { value: "default", name: "필수" },
  { value: "Ad", name: "광고" },
  { value: "drama", name: "드라마" },
  { value: "musical", name: "뮤지컬" },
  { value: "play", name: "연극" },
  { value: "movie", name: "영화" },
  { value: "ect", name: "기타" },
];

export const FirstSelectForm = ({ onSelectCategory }) => {
  return (
    <form>
      <select
        className="w-[193px] p-[10px] text-[0.8rem] bg-[#f4f4f4] rounded-lg"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        {FirstSelectList.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export const SecondSelectForm = ({ category }) => {
  const options = {
    Ad: [
      { value: "ad1", name: "ad1" },
      { value: "ad2", name: "ad2" },
    ],
    drama: [
      { value: "drama1", name: "drama1" },
      { value: "drama2", name: "drama2" },
    ],
    play: [
      { value: "play1", name: "play1" },
      { value: "play2", name: "play2" },
    ],
    musical: [
      { value: "musical1", name: "musical1" },
      { value: "musical2", name: "musical2" },
    ],
    movie: [
      { value: "movie1", name: "movie1" },
      { value: "movie2", name: "movie2" },
    ],
    ect: [
      { value: "ect1", name: "ect1" },
      { value: "ect2", name: "ect2" },
    ],
  };

  const selectedOptions = options[category] || [];

  return (
    <form>
      <select className="w-[193px] p-[10px] text-[0.8rem] bg-[#f4f4f4] rounded-lg">
        {selectedOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </form>
  );
};
