// components/PhoneVideo.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function PhoneVideo() {
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoSrc =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Автовоспроизведение заблокировано:", error);
          setIsPlaying(false);
        }
      };

      playVideo();

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      const updateProgress = () => {
        if (!isDragging && video.duration) {
          setProgress((video.currentTime / video.duration) * 100);
          setCurrentTime(video.currentTime);
        }
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", updateProgress);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, [isDragging]);

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    };

    if (isPlaying) {
      resetTimer();
    }

    return () => clearTimeout(timeout);
  }, [isPlaying, currentTime]);

  const handleVideoClick = () => {
    setShowControls(true);
    if (isPlaying) {
      const timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowControls(true);
      } else {
        videoRef.current.play();
        setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setShowControls(true);
      setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    }
  };

  // Универсальная функция для установки времени
  const setVideoTime = (clientX) => {
    if (progressBarRef.current && videoRef.current && duration) {
      const rect = progressBarRef.current.getBoundingClientRect();
      let clickX = clientX - rect.left;

      // Ограничиваем значения
      clickX = Math.max(0, Math.min(clickX, rect.width));
      const clickPercentage = clickX / rect.width;
      const newTime = clickPercentage * duration;

      videoRef.current.currentTime = newTime;
      setProgress(clickPercentage * 100);
      setCurrentTime(newTime);
    }
  };

  // Обработка клика мыши
  const handleProgressClick = (e) => {
    e.stopPropagation();
    setVideoTime(e.clientX);
    setShowControls(true);
    setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Обработка начала перетаскивания (мышь)
  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setVideoTime(e.clientX);
  };

  // Обработка движения мыши
  const handleDragMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      setVideoTime(e.clientX);
    }
  };

  // Обработка окончания перетаскивания (мышь)
  const handleDragEnd = () => {
    setIsDragging(false);
    setShowControls(true);
    setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Обработка touch событий для мобильных
  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const touch = e.touches[0];
    setVideoTime(touch.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      const touch = e.touches[0];
      setVideoTime(touch.clientX);
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setShowControls(true);
    setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Добавляем глобальные обработчики
  useEffect(() => {
    if (isDragging) {
      // Для мыши
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      // Для touch
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleDragMove);
        window.removeEventListener("mouseup", handleDragEnd);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isDragging]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
      <div className="flex items-center justify-center min-h-[calc(100vh-2rem)]">
        {/* Стилизованный телефон - адаптивный */}
        <div className="relative group w-full max-w-[340px] mx-auto mb-14">
          {/* Внешняя тень */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

          {/* Корпус телефона */}
          <div className="relative bg-black rounded-[3rem] shadow-2xl border border-gray-700 aspect-[9/19.5] max-h-[680px] w-full">
            {/* Динамик */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 sm:w-36 h-4 sm:h-5 bg-gray-900 rounded-full z-10">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-2 sm:h-3 bg-gray-800 rounded-full"></div>
            </div>

            {/* Фронтальная камера */}
            <div className="absolute top-4 right-6 sm:right-8 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-700 rounded-full"></div>

            {/* Экран */}
            <div
              className="absolute inset-0 m-1.5 sm:m-2 rounded-[2.5rem] overflow-hidden bg-black cursor-pointer"
              onClick={handleVideoClick}
            >
              {/* Видео контейнер */}
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  loop
                  muted={isMuted}
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Оверлей с контролами */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
                  transition-opacity duration-300
                  ${showControls ? "opacity-100" : "opacity-0 sm:opacity-0 sm:hover:opacity-100"}
                `}
                >
                  {/* Центральная кнопка play/pause */}
                  <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                               w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md 
                               flex items-center justify-center text-white
                               hover:bg-white/30 active:scale-95 transform transition-all
                               border border-white/30"
                  >
                    {isPlaying ? (
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Нижняя панель с контролами */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    {/* Время и кнопка звука */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-xs sm:text-sm font-mono bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                      <button
                        onClick={toggleMute}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm
                                   flex items-center justify-center text-white text-base sm:text-xl
                                   hover:bg-black/70 active:scale-95 transform transition-all"
                      >
                        {isMuted ? "🔇" : "🔊"}
                      </button>
                    </div>

                    {/* Прогресс бар с возможностью перемотки */}
                    <div
                      ref={progressBarRef}
                      className="relative w-full h-2 sm:h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer touch-manipulation"
                      onClick={handleProgressClick}
                      onMouseDown={handleDragStart}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full relative"
                        style={{ width: `${progress}%` }}
                      >
                        {/* Круглый ползунок */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Постоянная информация (видна всегда) */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs sm:text-sm font-medium">
                      Live
                    </span>
                  </div>
                </div>

           
              </div>
            </div>

            {/* Кнопка домой */}
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-0.5 sm:h-1 bg-gray-700 rounded-full"></div>
          </div>

          {/* Боковые кнопки */}
          <div className="absolute left-[-3px] sm:left-[-4px] top-20 sm:top-28 w-1 sm:w-1.5 h-10 sm:h-14 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute left-[-3px] sm:left-[-4px] top-36 sm:top-48 w-1 sm:w-1.5 h-10 sm:h-14 bg-gray-700 rounded-l-lg"></div>
          <div className="absolute right-[-3px] sm:right-[-4px] top-28 sm:top-36 w-1 sm:w-1.5 h-16 sm:h-24 bg-gray-700 rounded-r-lg"></div>
        </div>
      </div>
  );
}
