const Image = ({ userImage }) => {
    
    return (
        <img 
            className="rounded-md h-48 mx-auto"
            src={userImage ? userImage : null} 
            alt="topic" 
        />
    );

};

export default Image;