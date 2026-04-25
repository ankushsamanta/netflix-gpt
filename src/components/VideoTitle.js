// const VideoTitle = ({title, overview}) => {
//   return (
//     <div className="w-screen aspect-video pt-60 px-24 absolute text-white bg-gradient-to-r from-black">
//       <h1 className="text-3xl font-semibold">{title}</h1>
//       <p className="py-6 text-lg w-1/3">{overview}</p>
//       <div className="">
//         <button className="bg-white text-black p-3 px-12  rounded-lg hover:bg-opacity-70">▶︎ Play</button>
//         <button className="bg-gray-500 text-white p-3 px-12 bg-opacity-50 rounded-lg mx-3">ⓘ More Info</button>
//       </div>
//     </div>
//   )
// }

// export default VideoTitle;

const VideoTitle = ({ title, overview }) => {
  return (
    // Added z-10 to ensure it stays on top of the video
    <div className="w-screen aspect-video pt-60 px-24 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-3xl font-bold -mt-10">{title}</h1>
      <p className="py-6 text-base w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white text-black p-3 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;