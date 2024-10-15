import { GrFavorite } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 
import './index.css';

const CardItem = ({ image, title, id }) => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    const handleCardClick = () => {
        if (isLoggedIn) {
            navigate(`/product/${id}`);
        } else {
            navigate('/login'); 
        }
    };

    return (
        <div className="product-card" onClick={handleCardClick}>
            <div className='image-card'>
                <img src={image} alt={title} className="product-image" />
            </div>
            <h1 className='product-title'>{title.length > 25 ? `${title.slice(0, 25)}...` : title}</h1>
            {!isLoggedIn && (
                <div className="signin-section" onClick={() => navigate('/login')}>
                    <p className='sign-in-msg'>Sign in or Create an account to see pricing</p>
                    <GrFavorite className="fav-icon" />
                </div>
            )}
        </div>
    );
};

export default CardItem;
