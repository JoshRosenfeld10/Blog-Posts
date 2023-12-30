import { PostData } from "../components/Form/Form";

const url = 'http://localhost:3000/posts'

export const fetchPosts = async () => {
    // Get Request
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log((error as Error).message);
    }
    
}

export const createPost = async (createdPost: PostData) => {
    // Post Request
    try {
        const config = {
            method: "POST",
            headers: {
              Application: "application/json",
              "Content-Type": "application/json",
            },
            // Expected Payload (The request body)
            body: JSON.stringify({
              author: createdPost.author,
              title: createdPost.title,
              message: createdPost.message,
              tags: createdPost.tags,
              selectedFile: createdPost.selectedFile
            }),
          };
    
          const response = await fetch(url, config);
          const data = await response.json();
          return data;
    } catch (error) {
        console.log((error as Error).message);
    }
}