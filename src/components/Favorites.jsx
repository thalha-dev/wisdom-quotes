import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { getAllFavourites, removeQuote } from "../state/slice/favouriteSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(getAllFavourites);
  console.log(favourites);
  const quotes = favourites.map((quote) => (
    <div key={quote._id} className="quote-card">
      <div className="quote-content">" {quote.content} "</div>
      <div className="quote-info">
        <div className="quote-author">{quote.author}</div>
        <button
          className="quote-button delete-button"
          onClick={() => {
            dispatch(removeQuote(quote._id));
          }}
          type="button"
        >
          <RiDeleteBin6Fill />
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      {favourites == false ? (
        <div className="favourite-empty">
          <div>You don't have any favourite quote</div>
        </div>
      ) : (
        <div className="quote-container">{quotes}</div>
      )}
    </div>
  );
};

export default Favorites;
