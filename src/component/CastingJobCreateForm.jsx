import Button from './Button';
import InputBox from './Input';
import { InputWithButton } from './InputWithButton';

export const CastingJobCreateForm = () => {
  return (
    <div className="flex justify-start items-center flex-wrap gap-[10px] text-left p-10 w-[600px]">
      <p className='font-bold text-[1.7rem]'>
        캐스팅 공고 등록
      </p>
      <label>
        카테고리
        <InputBox size={'md'} />
      </label>
      <label>
        공고 타이틀
        <InputBox size={'md'} />
      </label>
    </div>
  );
};
