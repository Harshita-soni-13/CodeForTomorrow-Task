import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeCard } from "../Redux/CardSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Card = ({ post, onRemove }) => {
    const dispatch = useDispatch();

    const handleRemoveCard = () => {
        dispatch(removeCard(post.id));
        onRemove(); // Optional: Notify parent component if needed
    };

    return (
        <div className="w-full md:w-1/3 lg:w-1/4 p-2 flex">
            <div className="relative bg-white rounded-lg shadow-lg w-full flex flex-col h-full">
                <div className="absolute top-0 right-0 p-2">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500 cursor-pointer text-4xl" onClick={handleRemoveCard} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h2 className="font-bold mb-2 text-2xl text-purple-800 line-clamp-2">{post.title}</h2>
                    <p className="text-purple-700 mb-2 line-clamp-2 flex-grow">{post.body}</p>
                </div>
                <img
                    src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1719388382~exp=1719391982~hmac=9473aa96a1fb16d605e66a30260d4da9d4e164b38ec92de060c69bfb4701dbba&w=1380"
                    alt=""
                    className="p-4 h-52 object-cover rounded-t-lg"
                />
            </div>
        </div>
    );
};

Card.propTypes = {
    post: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default Card;
