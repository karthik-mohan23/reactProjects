type Joke = {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
  handleActiveId: (id: number) => void;
};

function SingleFaqItem({
  id,
  question,
  answer,
  isActive,
  handleActiveId,
}: Joke) {
  return (
    <div className="flex flex-col border border-gray-700 mb-4 py-3 px-5">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg">{question}</p>{" "}
        <button onClick={() => handleActiveId(id)}>
          {isActive ? (
            <span className="text-3xl">-</span>
          ) : (
            <span className="text-3xl">+</span>
          )}
        </button>
      </div>
      {isActive && <p className="py-2">{answer}</p>}
    </div>
  );
}
export default SingleFaqItem;
