function Home({ setStartTest }) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-6">
      <h1 className="text-base text-brandBlue-darker  font-bold">Quizzical</h1>
      <p className="text-brandBlue-darker text-base">
        Some description if needed
      </p>
      <button
        onClick={() => setStartTest(true)}
        className="text-brandGray bg-brandBlue px-5 py-1 rounded-md text-base"
      >
        Start quiz
      </button>
    </div>
  );
}

export default Home;
