import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toGoState } from "../atoms";

const StyledInput = styled.input`
  width: 360px;
  box-sizing: border-box;
`;

const SubmitBtn = styled.button`
  width: 360px;
`;
interface IForm {
  toGo: string;
}

function CreateToGo() {
  const setToGos = useSetRecoilState(toGoState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ toGo }: IForm) => {
    setToGos((currentList) => [
      {
        id: Date.now(),
        text: toGo,
        state: "TO_GO",
      },
      ...currentList,
    ]);
    setValue("toGo", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <StyledInput
        {...register("toGo", { required: "😡 Required!" })}
        placeholder="Name of the country"
      />
      <p>{errors.toGo?.message}</p>
      <SubmitBtn>Let's go!</SubmitBtn>
    </form>
  );
}

export default CreateToGo;
