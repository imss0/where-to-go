import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toGoState } from "../atoms";

interface IForm {
  toGo: string;
}

function CreateToGo() {
  const setToGos = useSetRecoilState(toGoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
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
      <input
        {...register("toGo", { required: "😡 Required!" })}
        placeholder="Name of the country"
      />
      <button>Let's go!</button>
    </form>
  );
}

export default CreateToGo;
