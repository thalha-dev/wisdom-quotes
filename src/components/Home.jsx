import { useGetAllQuotesQuery } from "../state/slice/api/quotesApi";
import { GiRoundStar } from "react-icons/gi";
import { addQuote } from "../state/slice/favouriteSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, isError, isSuccess } = useGetAllQuotesQuery();
  let quotes;
  if (isSuccess) {
    quotes = data.map((quote) => (
      <div key={quote._id} className="quote-card">
        <div className="quote-content">" {quote.content} "</div>
        <div className="quote-info">
          <div className="quote-author">{quote.author}</div>
          <button
            className="quote-button"
            onClick={() => {
              dispatch(addQuote(quote));
            }}
            type="button"
          >
            <GiRoundStar />
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div>
      {isLoading ? (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      ) : isError ? (
        <div>{error}</div>
      ) : (
        <div className="quote-container">{quotes}</div>
      )}
    </div>
  );
};

export default Home;
