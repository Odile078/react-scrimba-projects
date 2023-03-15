import _ from "lodash";
import { useEffect, useState } from "react";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const getQuestions = async () => {
    let questionsList = [];
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=29&type=multiple"
      );

      questionsList = await response.json();
    } catch (err) {
      console.log("err", err);
    } finally {
      if (questionsList?.results) {
        let newQuestions = questionsList.results.map((question, index) => {
          let modifiedQuestion = {
            ...question,
            incorrect_answers: _.shuffle([
              ...question?.incorrect_answers,
              question?.correct_answer,
            ]),
            picked_answer: null,
          };

          return modifiedQuestion;
        });

        setQuestions(newQuestions);
      } else return setQuestions(questionsList);
    }
  };

  const pickAnswer = (
    question,
    question_id,
    chosen_answer,
    chosen_answer_id
  ) => {
    let questionsArray = questions.slice().map((question, index) => {
      if (index === question_id) {
        return {
          ...question,
          picked_answer: { answer: chosen_answer, id: chosen_answer_id },
        };
      } else return question;
    });
    setQuestions(questionsArray);
  };
  const calculateMarks = () => {
    let correctAnswers = questions?.filter(
      (question) => question?.correct_answer === question?.picked_answer?.answer
    );
    setCorrectAnswers(correctAnswers?.length);
  };
  const checkAnswers = () => {
    setShowAnswers(true);
    calculateMarks();
  };
  const restartGame = () => {
    setShowAnswers(false);
    getQuestions();
  };
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen justify-center gap-8 py-8 px-6">
      <div className="space-y-6">
        {questions?.length > 0 ? (
          questions?.map((question_item, question_index) => (
            <div key={question_index} className="">
              <h5 className="text-brandBlue-darker text-lg font-bold">
                {question_item?.question}
              </h5>
              <div className="gap-4 flex items-items flex-wrap">
                {question_item?.incorrect_answers?.map(
                  (answer, answer_index) => (
                    <button
                      key={answer_index}
                      onClick={() =>
                        pickAnswer(
                          question_item,
                          question_index,
                          answer,
                          answer_index
                        )
                      }
                      disabled={showAnswers ? true : false}
                      className={`rounded-md px-3 py-1 disabled:cursor-default text-brandBlue-darker border border-brandBlue-darker text-sm ${
                        showAnswers
                          ? question_item?.correct_answer === answer
                            ? "bg-green-400"
                            : question_item?.picked_answer?.id === answer_index
                            ? question_item?.correct_answer !==
                              question_item?.picked_answer?.answer
                              ? "bg-orange-200"
                              : "bg-brandBlue-light"
                            : "bg-transparent"
                          : question_item?.picked_answer
                          ? question_item?.picked_answer?.id === answer_index
                            ? "bg-brandBlue-light"
                            : "bg-transparent"
                          : "bg-transparent"
                      }`}
                    >
                      {answer}
                    </button>
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-base text-brandBlue-darker">
            Questions loading...
          </p>
        )}
      </div>

      {questions?.length !== 0 &&
        (showAnswers ? (
          <div className="flex gap-4 items-center flex-wrap">
            <h5 className="text-brandBlue-darker text-lg font-bold">
              You scored {correctAnswers}/5 correct answers
            </h5>
            <button
              onClick={restartGame}
              className="text-brandGray bg-brandBlue px-5 py-1 rounded-md text-base"
            >
              Play again
            </button>
          </div>
        ) : (
          <button
            onClick={checkAnswers}
            className="text-brandGray bg-brandBlue px-5 py-1 rounded-md text-base"
          >
            Check answers
          </button>
        ))}
    </div>
  );
}

export default Test;
