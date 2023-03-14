import { useEffect, useState } from "react";
import Confetti from "react-confetti";

function MainContent() {
  const [diceList, setDiceList] = useState([]);
  const [allDicePicked, setAllDicePicked] = useState(false);
  const [width, setWindowWidth] = useState(window?.innerWidth);
  const [height, setWindowHeight] = useState(window?.innerHeight);

  const checkAllDicePicked = (dices) => {
    let remainingDiceList = dices.filter((die) => die.isPicked !== true);
    let allSameValue = dices.every(
      (die) => die.diceValue === dices[0]?.diceValue
    );
    if (remainingDiceList?.length === 0 && allSameValue) {
      setAllDicePicked(true);
    } else return setAllDicePicked(false);
  };
  const getRandomDiceFullList = (newDiceList) => {
    const newDice = newDiceList || [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        diceValue: Math.ceil(Math.random() * 6),
        isPicked: false,
      });
    }
    allDicePicked && setAllDicePicked(false);
    setDiceList(newDice);
  };
  const getRandomDiceRemainingList = () => {
    let dices = diceList.slice();
    dices.map((die, i) =>
      die.isPicked === false
        ? (dices[i] = {
            diceValue: Math.ceil(Math.random() * 6),
            isPicked: false,
          })
        : die
    );
    setDiceList(dices);
  };
  const getRandomDiceList = () => {
    allDicePicked ? getRandomDiceFullList() : getRandomDiceRemainingList();
  };
  const pickDice = (dieIndex) => {
    let dices = diceList.slice();
    if (diceList[dieIndex].isPicked === false) {
      dices[dieIndex] = { ...dices[dieIndex], isPicked: true };
      setDiceList(dices);
    } else {
      dices[dieIndex] = { ...dices[dieIndex], isPicked: false };
      setDiceList(dices);
    }
    checkAllDicePicked(dices);
  };

  useEffect(() => {
    getRandomDiceFullList();
  }, []);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window?.innerWidth);
      setWindowHeight(Window?.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      {allDicePicked && <Confetti width={width} height={height}></Confetti>}
      <div className=" relative flex justify-center items-center flex-col gap-5">
        <h1 className="text-gray-800 font-bold text-2xl">Tenzies</h1>
        <p className="text-gray-600 text-sm">
          Roll until all die are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {diceList?.length &&
            diceList.map((die, index) => (
              <button
                key={index}
                onClick={() => pickDice(index)}
                className={`${
                  die.isPicked === true ? "bg-green-400" : "bg-white"
                } rounded-md text-center p-5 py-3 text-lg font-bold text-gray-800 drop-shadow-md`}
              >
                {die?.diceValue}
              </button>
            ))}
        </div>
        <button
          onClick={getRandomDiceList}
          className="rounded-md w-fit bg-sky-500 py-1 px-5 text-base text-white"
        >
          {allDicePicked ? "New game" : "Roll"}
        </button>
      </div>
    </>
  );
}

export default MainContent;
