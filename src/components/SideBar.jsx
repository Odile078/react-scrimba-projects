import React from "react";

function SideBar({
  openSidebar,
  setOpenSideBar,
  notes,
  currentNote,
  setCurrentNoteId,
  newNote,
}) {
  return (
    <div className="sticky top-0 h-screen w-52 bg-gray-300 flex items-center">
      <div className="flex items-center">
        <div className="py-6 bg-white h-[98vh] w-52 rounded-md px-2">
          <div className="flex justify-between items-center">
            <h5 className="font-bold">Notes</h5>
            <button className="bg-gray-800 p-2 text-white rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-4">
            {notes?.length > 0 ? (
              notes?.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentNoteId(item?.id)}
                    className={`${
                      item?.id === currentNote?.id
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800"
                    } text-lg p-2 w-full`}
                  >
                    Note {index + 1}
                  </button>
                </li>
              ))
            ) : (
              <li>
                <p>none found</p>
                <button onClick={newNote}>+</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
