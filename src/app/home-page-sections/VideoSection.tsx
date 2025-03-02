interface VideoSectionProps {
    video1: string;
    video2: string;
  }
  
  const VideoSection = ({ video1, video2 }: VideoSectionProps) => {
    return (
      <section className="relative mt-1 h-auto py-10 tablet:py-14 laptop:py-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/home-screen-images/secondary-2.png')",
          }}
        />
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="text-center text-white w-full max-w-screen-lg">
            <h1 className="text-xl tablet:text-3xl laptop:text-4xl font-bold mb-4">
              Designed by Siri
            </h1>
            <p className="text-sm tablet:text-base laptop:text-lg mb-6">
              Exclusive fashion collections, now in motion.
            </p>
  
            {/* Video Section */}
            <div className="flex justify-center gap-4 laptop:gap-6 w-full">
              {/* Video 1 */}
              <div className="w-1/2 max-w-[200px] tablet:max-w-[250px] laptop:max-w-[300px] relative z-10">
                <video
                  className="w-full aspect-[9/16] object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
  
              {/* Video 2 */}
              <div className="w-1/2 max-w-[200px] tablet:max-w-[250px] laptop:max-w-[300px] relative z-10">
                <video
                  className="w-full aspect-[9/16] object-cover rounded-lg shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default VideoSection;