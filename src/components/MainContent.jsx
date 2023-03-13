import { useEffect, useState } from "react";

function MainContent() {
  const [diceList, setDiceList] = useState([]);
  const [pickedDice, setPickedDice] = useState(null);

  const getRandomDiceFullList = (newDiceList) => {
    const newDice = newDiceList || [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        diceValue: Math.ceil(Math.random() * 6),
        isPicked: false,
      });
    }
    setDiceList(newDice);
  };
  const getRandomDiceRemainingList = () => {
    let remainingDiceList = diceList.filter((dice) => dice?.isPicked !== true);
    if (remainingDiceList?.length === 0) {
      getRandomDiceFullList();
    } else {
      let dices = diceList.slice();
      dices.map((dice, i) =>
        dice?.isPicked === false
          ? (dices[i] = {
              diceValue: Math.ceil(Math.random() * 6),
              isPicked: false,
            })
          : dice
      );
      setDiceList(dices);
    }
  };
  const getRandomDiceList = () => {
    pickedDice ? getRandomDiceRemainingList() : getRandomDiceFullList();
  };
  const pickDice = (diceIndex) => {
    let dices = diceList.slice();
    if (diceList[diceIndex]?.isPicked === false) {
      dices[diceIndex] = { ...dices[diceIndex], isPicked: true };
      setDiceList(dices);
    } else {
      dices[diceIndex] = { ...dices[diceIndex], isPicked: false };
      setDiceList(dices);
    }
    setPickedDice(diceList[diceIndex]);
  };
  useEffect(() => {
    getRandomDiceFullList();
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1 className="text-gray-800 font-bold text-2xl">Tenzies</h1>
      <p className="text-gray-600 text-sm">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {diceList?.length > 0
          ? diceList?.map((item, index) => (
              <button
                key={index}
                onClick={() => pickDice(index)}
                className={`${
                  item?.isPicked === true ? "bg-green-400" : "bg-white"
                } rounded-md text-center p-5 py-3 text-lg font-bold text-gray-800 drop-shadow-md`}
              >
                {item?.diceValue}
              </button>
            ))
          : null}
      </div>
      <button
        onClick={getRandomDiceList}
        className="rounded-md w-fit bg-sky-500 py-1 px-5 text-base text-white"
      >
        Roll
      </button>
    </div>
  );
}

export default MainContent;
