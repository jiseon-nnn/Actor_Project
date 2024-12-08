import axios from "axios";

const fetchJobPostings = async () => {
  const response = await axios.get("/src/data/jobPosting.JSON");
  return response.data;
};

const CastingJoblistItem = ({ cast }) => {
  <div>
    <img src="https://media.istockphoto.com/id/931643150/vector/picture-icon.jpg?s=612x612&w=0&k=20&c=St-gpRn58eIa8EDAHpn_yO4CZZAnGD6wKpln9l3Z3Ok=" />
    <h3>{cast.title}</h3>
  </div>;
};

const CastingJobList = () => {};
