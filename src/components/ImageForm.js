import { useSelector } from "react-redux";
import Image from "./Image";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";


const ImageForm = () => {

    const { loading, userTopic, userImage } = useSelector((state) => state.userForm);
    const { searchImage } = useActions();
    const navigate = useNavigate();

    const acceptImage = () => {
        navigate("/card");
    };

    const fetchImage = async () => {
        searchImage(userTopic);
    };

    return (
        <>
         {loading ? (
                <p>Loading...</p>
            ) :
            (
                <Image userImage={userImage} />
            )
         }
        
         <div className="flex my-5 justify-center gap-5">
            <button
             className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
             onClick={acceptImage}>
                Accept
            </button>
            <button
             className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
             onClick={fetchImage}>
                Reject
            </button>
         </div>
        </>
    )
};

export default ImageForm;