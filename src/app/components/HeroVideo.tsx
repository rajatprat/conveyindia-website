import React from "react";
import { Pause, Play } from "lucide-react";

export const HeroVideo = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const manuallyPaused = React.useRef(false);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    const start = (event?: Event) => {
      if (event?.target instanceof Element && event.target.closest("[data-video-control]")) return;
      if (manuallyPaused.current || !video.paused) return;
      video.play().catch(() => {
        if (video.paused) setPlaying(false);
      });
    };
    // Retry when media is ready or the page becomes visible. If the browser
    // requires user activation, the first interaction can start playback.
    video.addEventListener("loadedmetadata", start);
    video.addEventListener("loadeddata", start);
    video.addEventListener("canplay", start);
    document.addEventListener("visibilitychange", start);
    window.addEventListener("focus", start);
    document.addEventListener("pointerdown", start);
    document.addEventListener("keydown", start);
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) start();
    });
    observer.observe(video);
    // Set the source only after Safari has received the muted/inline flags.
    if (!video.getAttribute("src")) {
      video.src = "/videos/convey-hero-v1.mp4";
      video.load();
    }
    start();
    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", start);
      video.removeEventListener("loadeddata", start);
      video.removeEventListener("canplay", start);
      document.removeEventListener("visibilitychange", start);
      window.removeEventListener("focus", start);
      document.removeEventListener("pointerdown", start);
      document.removeEventListener("keydown", start);
    };
  }, []);

  const restartVideo = (video: HTMLVideoElement) => {
    video.currentTime = 0;
    video.play().catch(() => setPlaying(false));
  };

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      manuallyPaused.current = false;
      video.play().catch(() => setPlaying(false));
    } else {
      manuallyPaused.current = true;
      video.pause();
    }
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/convey-hero-poster.webp"
        aria-label="CONVEY professional radio communication video"
        onEnded={(event) => restartVideo(event.currentTarget)}
        onTimeUpdate={(event) => {
          const video = event.currentTarget;
          // Some browsers can stall on the final frame instead of looping.
          if (!video.paused && !video.seeking && Number.isFinite(video.duration)
            && video.duration > 0 && video.currentTime >= video.duration - 0.08) {
            restartVideo(video);
          }
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        data-video-control
        onClick={togglePlayback}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
      </button>
    </div>
  );
};
