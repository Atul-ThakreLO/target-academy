import { Wifi, WifiOff } from "lucide-react";
import React, { useEffect, useState } from "react";

const NetworkConnBar = () => {
  const [bar, setBar] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setBar(true);
      setTimeout(() => {
        setBar(false);
      }, 2000);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setBar(true);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline]);

  if (!bar) return null;

  return (
    <div className="absolute bottom-0 w-full h-8 z-50">
      {isOnline ? (
        <div className="w-full h-full text-center flex justify-center items-center gap-3 bg-green-500">
          <Wifi />
          <span>Back Online</span>
        </div>
      ) : (
        <div className="w-full h-full text-center flex justify-center items-center gap-3 bg-red-500">
          <WifiOff />
          <span>Offline!! No connection</span>
        </div>
      )}
    </div>
  );
};

export default NetworkConnBar;
