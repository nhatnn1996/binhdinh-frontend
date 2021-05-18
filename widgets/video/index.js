import Link from "next/link";
import { useState } from "react";
import { url_api, url_base } from "@/shared/container/index";

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

const WrapVideo = () => {
  const [videos, setVideos] = useState();
  if (!videos) {
    fetch(url_api + "/videos?_limit=4")
      .then((response) => response.json())
      .then((data) => setVideos(data));
    return <div className="post-main py-5 mt-5 flex w-full h-100 bg-gray-100" />;
  } else return <Video videos={videos} />;
};

const Video = ({ videos }) => {
  const [id, setId] = useState(videos[0]._id);
  const mainVideo = videos.find((element) => element._id === id);
  const listVideo = videos.filter((element) => element._id !== id);
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="">
        <div className="font-bold text-blue-600 text-md mb-3">VIDEO NỔI BẬT</div>
        <div className="flex">
          <div className="w-3/4 pr-3">
            <video className="video-main" src={url_base + mainVideo.video?.url} controls />
            <div className="overlay"></div>
            <div className="font-bold mt-4"> {mainVideo.name} </div>
            <div className="mt-2">{mainVideo.description}</div>
          </div>
          <div className="w-1/4">
            {listVideo.map((element) => (
              <div
                className="flex box-image-video"
                key={element._id}
                onClick={() => {
                  setId(element._id);
                }}
              >
                <img src={url_base + element.image?.url} alt="" />
                <div className="overlay pointer"></div>
                <div className="title-video-sub text-white p-2">{element.name}</div>
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

export default WrapVideo;
