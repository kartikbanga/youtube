import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
        fetchSearchResults()
    }, [searchQuery]);

    const test ={
        "data": [
          {
            "type": "video",
            "videoId": "12345",
            "title": "Sample Video",
            "thumbnail": [{ "url": "thumbnail_url.jpg" }],
            "lengthText": "5:32",
            "description": "Sample description",
            "channelThumbnail": [{ "url": "channel_thumbnail_url.jpg" }],
            "channelTitle": "Sample Channel",
            "viewCount": 12345,
            "publishedTimeText": "2 hours ago",
            "badges": ["Verified"]
          }
        ]
      }
      

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi(`search?query=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(test);
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type === "video"){;
                        let video = item;
                        return (
                            <SearchResultVideoCard
                                key={item.videoId}
                                video={video}
                            />
                        );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
