"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

type DialogContentProps = {
  children: React.ReactNode;
  className?: string;
};

type DialogHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

type DialogTitleProps = {
  children: React.ReactNode;
  className?: string;
};
type DialogTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export function CustomDialog({
  open,
  onClose,
  children,
  className,
}: DialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div
        className={cn(
          "relative bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto",
          className,
        )}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

export function CustomDialogContent({
  children,
  className,
}: DialogContentProps) {
  return <div className={cn("p-6 ", className)}>{children}</div>;
}

export function CustomDialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CustomDialogTitle({ children, className }: DialogTitleProps) {
  return (
    <h2 className={cn("text-lg font-semibold text-gray-900 pr-6", className)}>
      {children}
    </h2>
  );
}
export function CustomDialogTrigger({
  children,
  onClick,
  className,
}: DialogTriggerProps) {
  return (
    <div onClick={onClick} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  );
}
