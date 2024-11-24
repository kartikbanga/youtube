import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    let seconds = 0;

    if (time.includes(":")) {
        const timeParts = time.split(":").map((part) => parseInt(part, 10));

        if (timeParts.length === 3) {
            seconds =
                timeParts[0] * 3600 +
                timeParts[1] * 60 +
                timeParts[2]; 
        } else if (timeParts.length === 2) {
            seconds =
                timeParts[0] * 60 +
                timeParts[1];
        }
    }

    const videoLengthInSeconds = moment()
        .startOf("day")
        .seconds(seconds || 0)
        .format(seconds >= 3600 ? "H:mm:ss" : "m:ss");

    return (
        <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {videoLengthInSeconds}
        </span>
    );
};

export default VideoLength;