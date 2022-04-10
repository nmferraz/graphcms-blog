import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';

const posts = [
  { title: 'Hello Next.js', excerpt: 'This is my first post using Next.js' },
  { title: 'Hello React.js', excerpt: 'This is my first post using Recat.js' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title}/>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

{/*export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}*/}