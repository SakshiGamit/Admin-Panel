import React from "react";

function RecentActivityItem({ item }) {
    console.log("recent activity : ", item);

    const startIndex = item.content.indexOf(item.highlight) + item.highlight.length;
    const slicedContent = item.content.slice(startIndex, -1);

    return (
        <div className="activity-item d-flex">
            <div className="activity-label">{item.time}</div>
            <i
                className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}
            ></i>
            {item.highlight === "" ? (
                <div className="activity-content">{item.content}</div>
            ) : (
                <div className="activity-content">
                    {item.content.substring(0, item.content.indexOf(item.highlight))}
                    <a href="/" className="fw-bold text-dark">
                        {item.highlight}
                    </a>
                    {/* {item.content.slice(
            item.content.indexOf(item.highlight) + item.highlight.length, -1
          )} */}
                    {slicedContent}
                </div>
            )}
        </div>
    );
}

export default RecentActivityItem;
