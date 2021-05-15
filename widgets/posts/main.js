import Link from "next/link";
import { url_base } from "@/shared/container/index";

const PostMain = ({ post }) => {
  return (
    <div className="post-main pb-5 mt-2">
      <div className="font-bold text-md text-blue-600 text-md">TIN TỨC CHÍNH</div>
      <Link href="/about">
        <div className="post-content w-12/12">
          <img className="post-main-image mt-2" src={url_base + post?.file?.url} layout="fill" />
          <div className="text-base font-bold text-gray-700	mt-2 hover:text-blue-700">{post.name}</div>
          <div className="text-base text-gray-700 hover:text-blue-700">{post.description}</div>
        </div>
      </Link>
      <style jsx>{`
        .post-content {
          cursor: pointer;
        }
        .post-main {
          border-bottom: 1px solid hsla(0, 0%, 0%, 0.3);
        }
        .post-main-image {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default PostMain;
