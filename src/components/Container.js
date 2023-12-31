import { Link } from "react-router-dom";

const Container = ({ children, linkPrev }) => {
    return (
        <div className="container mx-auto my-10">
            {linkPrev ? (
                <Link to={linkPrev} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Prev
                </Link>
            ) : null}

            <div className="border rounded-sm p-5 w-2/4 mx-auto">
                { children }
            </div>
        </div>
    )
};

export default Container;