"use client";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div className="w-4 h-4 border-l-2 border-b-2 border-greenwood-deep-green rotate-45 animate-bounce-slow" />
      <span className="text-xs text-gray-500 mt-1">Scroll</span>
    </div>
  );
}
