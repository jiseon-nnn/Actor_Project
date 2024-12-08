import Button from "./Button";

export const CastingJobList = ({ cast }) => {
  return (
    <div className="h-[300px] w-[300px]">
      <img
        src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok="
        className="w-[200px] h-[200px]"
      />
      <h3>{cast.title}</h3>
      <button>북마크</button>
      <p>{cast.closing_date}</p>
      <Button label={"마감"} />
      <Button label={cast.category} />
      <Button label={cast.category_sub} />
    </div>
  );
};
