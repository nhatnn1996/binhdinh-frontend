import Link from "next/link";
import { useState } from "react";

const videos = [
  {
    id: 1,
    video: "/videos/Fintech_video.mp4",
    image: "https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg",
    title: "Title video 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est cupiditate voluptatibus pariatur, quidem beatae dicta sapiente, ducimus magnam dignissimos, unde minus quos! Suscipit esse hic sequi dolore provident iusto.",
  },
  {
    id: 2,
    video: "/videos/Fintech_video.mp4",
    image: "https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg",
    title: "Title video 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est cupiditate voluptatibus pariatur.",
  },
  {
    id: 3,
    video: "/videos/Fintech_video.mp4",
    image: "https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg",
    title: "Title video 3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est cupiditate voluptatibus pariatur.",
  },
  {
    id: 4,
    video: "/videos/Fintech_video.mp4",
    image: "https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg",
    title: "Title video 4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam est cupiditate voluptatibus pariatur.",
  },
];

const Video = () => {
  const [id, setId] = useState(videos[0].id);
  const mainVideo = videos.find((element) => element.id === id);
  const listVideo = videos.filter((element) => element.id !== id);

  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="">
        <div className="font-bold text-blue-600 text-md">TIN NỔI BẬT</div>
        <div className="flex">
          <div className="w-3/4 pr-3">
            <video className="video-main" src={mainVideo.video} controls />
            <div className="overlay"></div>
            <div className="font-bold mt-4"> {mainVideo.title} </div>
            <div className="mt-2">{mainVideo.description}</div>
          </div>
          <div className="w-1/4">
            {listVideo.map((element) => (
              <div
                className="flex box-image-video"
                onClick={() => {
                  setId(element.id);
                }}
              >
                <img
                  src="https://cdn.yeudulich.com/940x630/media/attraction/attraction/e5/df/47b9-4bea-4849-b339-f8c17c8aecfa.jpg"
                  alt=""
                />
                <div className="overlay pointer"></div>
                <div className="title-video-sub text-white p-2">{element.title}</div>
              </div>
            ))}
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
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 100%);
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
