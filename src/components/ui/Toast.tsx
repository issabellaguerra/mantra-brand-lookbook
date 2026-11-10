import React from 'react';
import { Check, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#231C16] text-[#F5F2E6] text-sm rounded-lg shadow-xl border border-stone-700/40 animate-in fade-in slide-in-from-bottom-2 duration-200"
    >
      {type === 'success' ? (
        <Check className="w-4 h-4 text-[#7398C1] shrink-0" />
      ) : (
        <Info className="w-4 h-4 text-[#7398C1] shrink-0" />
      )}
      <span className="font-medium whitespace-nowrap">{message}</span>
    </div>
  );
};
