import { useSelector } from "react-redux";
import Image from "./Image";

const Card = ({ children }) => {

    const { userName, userSurname, userImage } = useSelector((state) => state.userForm);

    return (
        <div className="gap-2 flex flex-col items-center">
            <span>User Name: {userName ? userName : 'not provided'}</span>
            <span>User Surname: {userSurname ? userSurname : 'not provided'}</span>
            <span>User Image</span>
            <Image userImage={userImage} />
        </div>
    )
};

export default Card;