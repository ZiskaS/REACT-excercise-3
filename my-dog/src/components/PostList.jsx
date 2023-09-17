import React, { useState, useEffect } from 'react';
import Post from './Post';

function PostList({ searchValue }) {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const posts = [
      {
        author: 'Elisa',
        createdAt: new Date(),
        text: 'I love my dog - so cute!',
        image: 'dog-1.jpg',
        comments: 22,
        likes: 99,
      },
      {
        author: 'Lucia',
        createdAt: new Date(),
        text: 'She is so sweet!',
        image: 'dog-2.jpg',
        comments: 5,
        likes: 10,
      },
      {
        author: 'Ana',
        createdAt: new Date(),
        text: 'I adore my furry friend!',
        image: 'dog-3.jpg',
        comments: 15,
        likes: 233,
      },
    ];

    const filterPosts = (query) => {
      const lowercasedQuery = query.toLowerCase();
      return posts.filter((post) => {
        const lowercasedAuthor = post.author.toLowerCase();
        const lowercasedText = post.text.toLowerCase();
        return (
          lowercasedAuthor.includes(lowercasedQuery) ||
          lowercasedText.includes(lowercasedQuery)
        );
      });
    };

    const timer = setTimeout(() => {
      const filtered = filterPosts(searchValue);
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleLikeClick = (postIndex) => {
    // Create a copy of the filteredPosts array
    const updatedPosts = [...filteredPosts];
    // Increment the like count for the specific post
    updatedPosts[postIndex].likes += 1;
    // Update the state with the new array
    setFilteredPosts(updatedPosts);
  };

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredPosts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            createdAt={post.createdAt}
            text={post.text}
            image={post.image}
            comments={post.comments}
            likes={post.likes}
            onLikeClick={() => handleLikeClick(index)} // Pass the function to the Post component
          />
        ))
      )}
    </div>
  );
}

export default PostList;
