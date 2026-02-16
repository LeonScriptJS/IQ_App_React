const QuizQuestionPage = () => {
  return (
    <>
      <div className="background min-h-screen bg-gray-50 text-gray-100">
        <div className="priQuizContainer bg-slate-700 m-0.5 p-4 rounded-4xl h-[60vh] flex items-center justify-center">
          <p className="questionText"> This is Question Number 1</p>
        </div>

        <div className="optionsContainer m-6 flex flex-col items-center gap-4">
          <button className=" optionA p-2 w-[90vw] bg-slate-700 rounded-2xl ">
            OPTION A
          </button>
          <button className=" optionB p-2 w-[90vw] bg-slate-700 rounded-2xl">
            OPTION B
          </button>
          <button className=" optionC p-2 w-[90vw] bg-slate-700 rounded-2xl">
            OPTION C
          </button>
          <button className=" optionAD p-2 w-[90vw] bg-slate-700 rounded-2xl">
            OPTION D
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizQuestionPage;
