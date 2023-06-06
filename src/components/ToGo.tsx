import styled from "styled-components";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { IToGo, toGoState } from "../atoms";

const Btn = styled.button`
  margin: 5px;
  padding: 5px;
  width: 40px;
  height: 40px;
`;

function ToGo({ text, state, id }: IToGo) {
  const setToGos = useSetRecoilState(toGoState);
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

  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToGos((currentToGos) => {
      const targetIndex = currentToGos.findIndex((toGo) => toGo.id === id);
      return [
        ...currentToGos.slice(0, targetIndex),
        ...currentToGos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {state === "TO_GO" && (
        <Btn name="VISITED" onClick={onClick}>
          ✅
        </Btn>
      )}
      {state === "TO_GO" && <Btn onClick={onDelete}>🗑️</Btn>}
      {state === "VISITED" && (
        <Btn name="LIKE" onClick={onClick}>
          ❤️
        </Btn>
      )}
      {state === "VISITED" && (
        <Btn name="TO_GO" onClick={onClick}>
          ❌
        </Btn>
      )}
      {state === "LIKE" && (
        <Btn name="VISITED" onClick={onClick}>
          💔
        </Btn>
      )}
    </li>
  );
}

export default ToGo;
