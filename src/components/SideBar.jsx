import React from "react";

function SideBar({
  openSidebar,
  setOpenSideBar,
  notes,
  currentNote,
  setCurrentNoteId,
  newNote,
  deleteNote,
}) {
  return (
    <div className="sticky top-0 h-screen w-52 bg-gray-300 flex items-center">
      <div className="flex items-center">
        <div className="py-6 bg-white h-[98vh] w-52 rounded-md px-2">
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-3xl">Notes</h5>
            <button
              onClick={newNote}
              className="bg-gray-800 p-2 text-white rounded-lg"
            >
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
                <li
                  key={index}
                  className={`${
                    item?.id === currentNote?.id
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800"
                  } text-lg text-start p-2 w-full flex justify-between items-center`}
                >
                  <button
                    onClick={() => setCurrentNoteId(item?.id)}
                    className="text-base text-start p-2  w-4/5"
                  >
                    {item?.body?.split("\n")?.[0]}
                    {/* {index + 1} */}
                  </button>
                  <button onClick={(event) => deleteNote(item?.id)}>
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
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
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
