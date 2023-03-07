import React, { useEffect, useState } from "react";

function MainContent() {
  const [memeData, setMemeData] = useState([]);
  const [randomMeme, setRandomMeme] = useState({
    topText: "Shut up",
    bottomText: "take my money",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getRandomMeme = () => {
    // let response =await fetch("https://api.imgflip.com/get_memes")
    const memesArray = memeData;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setRandomMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    console.log("event:", event.target);
    setRandomMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const fetchMeme = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    console.log("data:", data);
    setMemeData(data?.data?.memes);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="p-5 sm:p-9 space-y-9">
      <div className="p-0 m-0 h-fit leading-[0] space-y-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 h-fit">
          <input
            type="text"
            placeholder={randomMeme.topText ?? "topText"}
            value={randomMeme.topText}
            onChange={handleChange}
            name="topText"
            className="w-full bg-transparent border p-3 rounded-sm border-purple-800 outline-none focus:outline-none text-gray-800 placeholder:text-gray-800"
          />
          <input
            type="text"
            placeholder={randomMeme.bottomText ?? "bottom text"}
            value={randomMeme.bottomText}
            onChange={handleChange}
            name="bottomText"
            className="w-full rounded-sm border p-3 border-purple-800 outline-none focus:outline-none text-gray-800 placeholder:text-gray-800"
          />
        </div>
        <button
          type="button"
          onClick={getRandomMeme}
          className="bg-purple-800 py-3 px-5 text-white w-full text-center text-lg rounded-md"
        >
          Get a new meme 🖼
        </button>
      </div>
      <div className="relative w-[477px] h-64 bg-yellow-400">
        <img
          src={randomMeme.randomImage ?? "http://i.imgflip.com/1bij.jpg"}
          alt="meme"
          className="object-cover object-center w-[477px] h-64"
        />
        <p className="text-white text-4xl font-bold absolute top-3  w-full text-center">
          {randomMeme.topText ?? ""}
        </p>
        <p className="text-white text-4xl font-bold absolute bottom-3 w-full text-center">
          {randomMeme.bottomText ?? ""}
        </p>
      </div>
    </div>
  );
}

export default MainContent;
