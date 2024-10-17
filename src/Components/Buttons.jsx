import { useRecoilState } from "recoil";
import { colorA } from "./atoms";
export function Buttons() {
  const [colorAom, setColorAtom] = useRecoilState(colorA);
  return (
    <>
      <div className="flex flex-col h-screen">

        <div className="mt-auto p-4">
          <div className="grid grid-cols-6 gap-2 border p-4 bg-white rounded-2xl">
            <button
              onClick={() => setColorAtom("white")}
              className="bg-white p-2 border rounded-2xl "
            >
              White
            </button>

            <button
              onClick={() => setColorAtom("blue")}
              className="bg-blue-500 text-white p-2 border rounded-2xl shadow-xl"
            >
              Blue
            </button>
            <button
              onClick={() => setColorAtom("yellow")}
              className="bg-yellow-500 p-2 border rounded-2xl shadow-xl"
            >
              Yellow
            </button>
            <button
              onClick={() => setColorAtom("black")}
              className="bg-black text-white p-2 border rounded-2xl shadow-xl"
            >
              Black
            </button>
            <button
              onClick={() => setColorAtom("green")}
              className="bg-green-500 text-white p-2 border rounded-2xl shadow-xl"
            >
              Green
            </button>
            <button
              onClick={() => setColorAtom("red")}
              className="bg-red-500 text-white p-2 border rounded-2xl shadow-xl"
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
