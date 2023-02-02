import React from "react";
import { useParams } from "react-router-dom";

const Video:React.FC = () => {

    const { id } = useParams();

    return(
        <p>Video {id}</p>
    )
}

export default Video;