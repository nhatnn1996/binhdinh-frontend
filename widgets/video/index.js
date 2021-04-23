import Link from "next/link";

const Video = () => {
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="">
        <div className="font-bold text-blue-600 text-md">TIN NỔI BẬT</div>
        <div className="flex">
          <div className="w-3/4 pr-3">
            <video className="video-main" src="/videos/Fintech_video.mp4" controls />
            <div className="overlay"></div>
            <div className="font-bold mt-6">Title Video nè </div>
          </div>
          <div className="w-1/4">
            <div className="flex box-image-video">
              <img src="https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg" alt="" />
              <div className="overlay"></div>
              <div className="title-video-sub text-white p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div className="flex box-image-video">
              <img src="https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg" alt="" />
              <div className="overlay"></div>
              <div className="title-video-sub text-white p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
            <div className="flex box-image-video">
              <img src="https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg" alt="" />
              <div className="overlay"></div>
              <div className="title-video-sub text-white p-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>{`
        .video-main:focus {
          outline: none;
        }
        .box-image-video {
          padding-top: calc(2 / 3 * 100%);
          position: relative;
        }

        .box-image-video img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .box-image-video .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(59, 130, 246, 0), rgba(59, 130, 246, 1));
        }
        .title-video-sub {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default Video;
