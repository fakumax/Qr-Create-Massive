import { useEffect, useRef } from "react";
import type QRCodeStyling from "qr-code-styling";

interface QrPreviewProps {
  qr: QRCodeStyling;
}

export function QrPreview({ qr }: QrPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML = "";
    qr.append(el);
  }, [qr]);

  return (
    <div className="flex items-center justify-center rounded-lg bg-white p-6">
      <div ref={containerRef} />
    </div>
  );
}
