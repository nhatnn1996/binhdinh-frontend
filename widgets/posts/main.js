import Link from "next/link";
import { url_base } from "@/shared/container/index";
import Slider from "react-slick";

const PostMain = ({ posts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="post-main pb-5 mt-2">
      <div className="font-bold text-md text-blue-600 text-md">TIN TỨC CHÍNH</div>
      <Slider {...settings}>
        {posts.map((post) => (
          <div className="post-content w-12/12" key={post._id}>
            <img className="post-main-image mt-2" src={url_base + post?.image?.url} layout="fill" />
            <Link href={"/bai-viet/" + post.slug}>
              <div>
                <div className="text-base font-bold text-gray-700	mt-2 hover:text-blue-700">{post.name}</div>
                <div className="text-base text-gray-700 hover:text-blue-700 line-clamp-2">{post.description}</div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
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
