"use client";

import { useState } from "react";
import { Room, RoomEvent } from "livekit-client";
import { RoomAudioRenderer, RoomContext } from "@livekit/components-react";
import "@livekit/components-styles";
import { motion } from "framer-motion";

export default function EmbedVoiceAgent() {
  const [room] = useState(
    () =>
      new Room({
        adaptiveStream: true,
        dynacast: true,
      })
  );
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const handleClick = async () => {
    if (connected) {
      room.disconnect();
      setConnected(false);
      return;
    }

    setConnecting(true);

    try {
      const res = await fetch("/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: "room-" + Math.random().toString(36).substring(2, 8),
          participantName: "user-" + Math.floor(Math.random() * 10000),
        }),
      });

      const { token } = await res.json();
      const serverUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

      if (!serverUrl) throw new Error("Missing NEXT_PUBLIC_LIVEKIT_URL");

      await room.connect(serverUrl, token, { autoSubscribe: true });
      await room.localParticipant.setMicrophoneEnabled(true);

      setConnected(true);

      room.on(RoomEvent.Disconnected, () => {
        setConnected(false);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setConnecting(false);
    }
  };

  return (
    <RoomContext.Provider value={room}>
      <div className="flex items-center justify-center min-h-screen bg-transparent">
        <motion.div
          onClick={handleClick}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          className={`relative flex items-center justify-center w-28 h-28 rounded-full cursor-pointer shadow-lg transition-all duration-300`}
          style={{
            background: connected
              ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          {connected && (
            <>
              <span className="absolute w-full h-full rounded-full border-2 border-white/60 animate-ping-slow"></span>
              <span className="absolute w-full h-full rounded-full border-2 border-white/40 animate-ping-slow delay-700"></span>
            </>
          )}

          {connecting ? (
            <span className="text-white text-sm">Connecting...</span>
          ) : connected ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="none"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6.75 6.75 0 0 0 6.75-6.75V9a6.75 6.75 0 1 0-13.5 0v3a6.75 6.75 0 0 0 6.75 6.75zM12 18.75v3.375m0-3.375a6.75 6.75 0 0 1-6.75-6.75"
              />
            </svg>
          )}

          <RoomAudioRenderer />
        </motion.div>
      </div>

      <style jsx>{`
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </RoomContext.Provider>
  );
}
