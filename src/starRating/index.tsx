import StarComponent from "./StarComponent";

function StarRating() {
  return (
    <div>
      <h1 className="text-center text-3xl">Star Rating</h1>
      <div className="py-5 mx-auto max-w-96 flex items-center">
        <StarComponent numOfStars={5} />
      </div>
    </div>
  );
}
export default StarRating;
