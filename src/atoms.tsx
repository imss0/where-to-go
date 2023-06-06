import { atom, selector } from "recoil";

export interface IToGo {
  id: number;
  text: string;
  state: "TO_GO" | "VISITED" | "LIKE";
}

export const toGoState = atom<IToGo[]>({
  key: "toGo",
  default: [],
});

export const toGoSelector = selector({
  key: "toGoSelector",
  get: ({ get }) => {
    const toGos = get(toGoState);
    return [
      toGos.filter((toGo) => toGo.state === "TO_GO"),
      toGos.filter((toGo) => toGo.state === "VISITED"),
      toGos.filter((toGo) => toGo.state === "LIKE"),
    ];
  },
});
