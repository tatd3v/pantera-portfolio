'use client';

import { useState } from 'react';

interface AudioPlayerProps {
  title: string;
  subtitle: string;
  currentTime?: string;
  totalTime?: string;
  progress?: number;
}

export default function AudioPlayer({
  title,
  subtitle,
  currentTime = '2:45',
  totalTime = '8:20',
  progress = 33,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="glass rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-100 mb-2">{title}</h3>
          <p className="text-slate-400">{subtitle}</p>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center justify-center w-16 h-16 bg-primary rounded-full text-background-dark hover:brightness-110 transition-all"
        >
          <span className="material-symbols-outlined text-3xl">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>

      {/* Audio Progress Bar */}
      <div className="mb-4">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>{currentTime}</span>
          <span>{totalTime}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-center gap-6">
        <button className="text-slate-400 hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined">shuffle</span>
        </button>
        <button className="text-slate-400 hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined">skip_previous</span>
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-background-dark hover:brightness-110 transition-all"
        >
          <span className="material-symbols-outlined">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <button className="text-slate-400 hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined">skip_next</span>
        </button>
        <button className="text-slate-400 hover:text-slate-200 transition-colors">
          <span className="material-symbols-outlined">repeat</span>
        </button>
      </div>
    </div>
  );
}
