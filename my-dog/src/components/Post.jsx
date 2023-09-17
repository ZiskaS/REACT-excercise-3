import React, { useEffect, useState } from 'react';

// Function to calculate the time difference
function calculateTimeDifference(postDate) {
  const currentDate = new Date();
  const postDateTime = new Date(postDate);
  const timeDifference = Math.abs(currentDate - postDateTime);
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  if (minutesDifference < 1) {
    return 'just now';
  } else if (minutesDifference < 60) {
    return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
  } else {
    const hoursDifference = Math.floor(minutesDifference / 60);
    return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
  }
}

function Post({ image, createdAt, likes, author, text, comments , onLikeClick }) {
  const [timeDiff, setTimeDiff] = useState(calculateTimeDifference(createdAt));

  // Calculate and update the time difference every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDiff(calculateTimeDifference(createdAt));
    }, 60000); // Update every minute (60,000 milliseconds)

    // Clear the interval when the component unmounts or when a new post is rendered
    return () => clearInterval(intervalId);
  }, [createdAt]);

  return (
    <div className="card mb-3">
      <img src={require('../assets/images/' + image)} className="card-img-top" alt="A cute dog" />
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text">{timeDiff} </p>
          <button className="btn btn-danger" onClick={onLikeClick}>
            <i className="fa fa-heart text-white"></i> {likes}
          </button>
        </div>
        <p className="card-text">
          <strong>@ {author}</strong>
        </p>
        <p className="card-text">{text}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text">
            <i className="fa fa-comment"></i> Comments ({comments})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
