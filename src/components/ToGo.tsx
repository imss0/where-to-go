import { useSetRecoilState, useRecoilValue } from "recoil";
import { IToGo, toGoSelector, toGoState } from "../atoms";

function ToGo({ text, state, id }: IToGo) {
  const setToGos = useSetRecoilState(toGoState);
  const selectorOutput = useRecoilValue(toGoSelector);
  console.log(selectorOutput);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToGos((currentToGos) => {
      const targetIndex = currentToGos.findIndex((toGo) => toGo.id === id);
      const changedToGo = { text, id, state: name as IToGo["state"] };
      return [
        ...currentToGos.slice(0, targetIndex),
        changedToGo,
        ...currentToGos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {state === "TO_GO" && (
        <button name="VISITED" onClick={onClick}>
          ✅
        </button>
      )}
      {state === "TO_GO" && (
        <button name="DELETE" onClick={onClick}>
          🗑️
        </button>
      )}
      {state === "VISITED" && (
        <button name="LIKE" onClick={onClick}>
          ❤️
        </button>
      )}
      {state === "VISITED" && (
        <button name="TO_GO" onClick={onClick}>
          ❌
        </button>
      )}
      {state === "LIKE" && (
        <button name="VISITED" onClick={onClick}>
          💔
        </button>
      )}
    </li>
  );
}

export default ToGo;

// 남은 작업 : Delete, localStorage, required
