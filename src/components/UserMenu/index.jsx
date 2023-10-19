import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { userNameSelector } from 'redux/auth/selectors';

const UserMenu = () => {
  const userName = useSelector(userNameSelector);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome {userName}</p>
      <button type="submit" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
