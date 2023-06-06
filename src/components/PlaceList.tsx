import { useRecoilValue } from "recoil";
import { toGoSelector } from "../atoms";
import CreateToGo from "./CreateToGo";
import ToGo from "./ToGo";

function PlaceList() {
  const [toGos, visited, like] = useRecoilValue(toGoSelector);
  return (
    <div>
      <h2>Countries I wanna go to🛫</h2>
      <CreateToGo />
      <ul>
        {toGos.map((country) => (
          <ToGo key={country.id} {...country} />
        ))}
      </ul>
      <h2>Countries I have been to 👣</h2>
      <ul>
        {visited.map((country) => (
          <ToGo key={country.id} {...country} />
        ))}
      </ul>
      <h2>Countries I like💕</h2>
      <ul>
        {like.map((country) => (
          <ToGo key={country.id} {...country} />
        ))}
      </ul>
    </div>
  );
}

export default PlaceList;
