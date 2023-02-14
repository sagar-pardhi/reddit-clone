import { Post } from "@/atoms/postAtom";
import { firestore } from "@/firebase/clientApp";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Community } from "../../atoms/communitiesAtom";
import usePosts from "../../hooks/usePosts";

type PostsProps = {
  communityData: Community;
  //   userId?: string;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  const [loading, setLoading] = useState(false);
  const { postStateValue, setPostStateValue } = usePosts();

  const getPosts = async () => {
    try {
      const postsQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );

      const postDocs = await getDocs(postsQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));

      console.log(posts);
    } catch (error: any) {
      console.log("getPostsError error", error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return <div>Posts</div>;
};

export default Posts;
