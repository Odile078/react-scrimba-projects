import React from "react";

function MainContent() {
  const journalList = [
    {
      image:
        "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mount Fuji",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis vitae neque sodales ullamcorper maximus in ex. Nullam feugiat iaculis tortor, a posuere massa tincidunt et. Duis venenatis sagittis ex ut tempor. Donec vel magna lorem.",
      country: "Japan",
      date: "12 Jan,2024 - 24 Jan,2021",
    },
    {
      image:
        "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sydney Opera House",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis vitae neque sodales ullamcorper maximus in ex. Nullam feugiat iaculis tortor, a posuere massa tincidunt et. Duis venenatis sagittis ex ut tempor. Donec vel magna lorem.",
      country: "Australia",
      date: "12 Jan,2024 - 24 Jan,2021",
    },
    {
      image:
        "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mount Fuji",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis vitae neque sodales ullamcorper maximus in ex. Nullam feugiat iaculis tortor, a posuere massa tincidunt et. Duis venenatis sagittis ex ut tempor. Donec vel magna lorem.",
      country: "Japan",
      date: "12 Jan,2024 - 24 Jan,2021",
    },
    {
      image:
        "https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sydney Opera House",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis vitae neque sodales ullamcorper maximus in ex. Nullam feugiat iaculis tortor, a posuere massa tincidunt et. Duis venenatis sagittis ex ut tempor. Donec vel magna lorem.",
      country: "Australia",
      date: "12 Jan,2024 - 24 Jan,2021",
    },
  ];
  return (
    <div className="p-4 sm:p-12 space-y-10 bg-white">
      {journalList.map((e, i) => (
        <div key={i} className="flex h-80 gap-6 text-gray-800">
          <img
            src={e.image}
            alt="place"
            className="h-full max-w-xs rounded-xl"
          />
          <div className="py-4 space-y-8 flex-1 self-center">
            <div className="space-y-4">
              <div className="flex gap-6 items-center">
                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p>{e.country}</p>
                </div>
                <button className="text-gray-500 underline">
                  view on google mas
                </button>
              </div>
              <h2 className="font-bold text-xl">{e.title}</h2>
            </div>
            <div className="space-y-4">
              <p className="text-base font-bold ">{e.date}</p>
              <p className="text-base ">{e.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
