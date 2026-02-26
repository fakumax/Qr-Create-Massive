import { useCallback, useRef, useState } from "react";
import QRCodeStyling, {
  type Options as QROptions,
  type DotType,
  type CornerSquareType,
  type CornerDotType,
} from "qr-code-styling";

const DEFAULT_OPTIONS: QROptions = {
  width: 300,
  height: 300,
  data: "https://example.com",
  dotsOptions: { color: "#8b5cf6", type: "rounded" as DotType },
  cornersSquareOptions: { type: "extra-rounded" as CornerSquareType },
  cornersDotOptions: { type: "dot" as CornerDotType },
  backgroundOptions: { color: "transparent" },
  imageOptions: { crossOrigin: "anonymous", margin: 8 },
};

export type QrConfig = QROptions;

export function useQrGenerator() {
  const [config, setConfig] = useState<QROptions>(DEFAULT_OPTIONS);
  const qrRef = useRef<QRCodeStyling | null>(null);

  const getQr = useCallback(() => {
    if (!qrRef.current) {
      qrRef.current = new QRCodeStyling(config);
    }
    return qrRef.current;
  }, [config]);

  const updateConfig = useCallback(
    (patch: Partial<QROptions>) => {
      const merged = { ...config, ...patch };
      setConfig(merged);
      qrRef.current?.update(merged);
    },
    [config]
  );

  const downloadQr = useCallback(
    async (extension: "png" | "svg" | "webp" = "png") => {
      const qr = getQr();
      await qr.download({ extension, name: "qr-code" });
    },
    [getQr]
  );

  return { config, getQr, updateConfig, downloadQr };
}
