// pages/blog/index.tsx
import { GetStaticProps } from 'next';
import { db } from '@/firebase'; // assuming you have this set up from previous steps
import { collection, getDocs } from 'firebase/firestore';

export const getStaticProps: GetStaticProps = async () => {
  const blogPostCollection = collection(db, 'blogPosts');
  const blogSnapshot = await getDocs(blogPostCollection);
  const blogPosts = blogSnapshot.docs.map((doc) => doc.data());

  return {
    props: {
      blogPosts
    },
    revalidate: 60 // In seconds (optional, for Incremental Static Regeneration)
  };
};

const BlogPage = ({ blogPosts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
