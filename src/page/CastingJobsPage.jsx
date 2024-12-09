<<<<<<< Updated upstream
import { useEffect, useState } from "react";
import axios from "axios";
import { CastingJobCard } from "../component/CastingJobCard";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
=======
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CastingJobCard } from '../component/CastingJobCard';
>>>>>>> Stashed changes

export const CastingJobsPage = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const loadCastData = async () => {
      try {
        const response = await axios.get('/mockup_data/castPosting.JSON');
        setCast(response.data);
<<<<<<< Updated upstream
=======
        console.log('Fetched Data:', response.data);
>>>>>>> Stashed changes
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadCastData();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (error) {
    return <p>에러가 발생했습니다: {error.message}</p>;
  }

  return (
<<<<<<< Updated upstream
    <div className="h-full  gap-5">
      <div className="flex justify-end gap-5">
        <Button
          label={"새로운 공고 등록"} size={"xl"}
        onClick={()=>navigate('/create_casting_job')}
        />
      </div>
      <div className=" flex flex-wrap gap-10 h-7 w-[1000px]">
        {cast.reverse().map((data) => (
          <CastingJobCard key={data.content_id} cast={data} />
        ))}
      </div>
=======
    <div className="flex flex-wrap gap-10  w-[1000px]">
      {cast.map((data) => (
        <CastingJobCard key={data.content_id} cast={data} />
      ))}
>>>>>>> Stashed changes
    </div>
  );
};
