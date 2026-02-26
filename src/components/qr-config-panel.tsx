import { useState } from "react";
import type { DotType, CornerSquareType, CornerDotType } from "qr-code-styling";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { QrConfig } from "@/hooks/use-qr-generator";

const DOT_TYPES: DotType[] = [
  "rounded",
  "dots",
  "classy",
  "classy-rounded",
  "square",
  "extra-rounded",
];

const CORNER_SQUARE_TYPES: CornerSquareType[] = [
  "dot",
  "square",
  "extra-rounded",
];

const CORNER_DOT_TYPES: CornerDotType[] = ["dot", "square"];

interface QrConfigPanelProps {
  config: QrConfig;
  onUpdate: (patch: Partial<QrConfig>) => void;
}

export function QrConfigPanel({ config, onUpdate }: QrConfigPanelProps) {
  const [data, setData] = useState(config.data ?? "");

  return (
    <div className="space-y-6">
      {/* Data input */}
      <div className="space-y-2">
        <Label htmlFor="qr-data">URL / Texto</Label>
        <Input
          id="qr-data"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
            onUpdate({ data: e.target.value });
          }}
          placeholder="https://example.com"
        />
      </div>

      {/* Size controls */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="qr-width">Ancho (px)</Label>
          <Input
            id="qr-width"
            type="number"
            min={100}
            max={2000}
            value={config.width ?? 300}
            onChange={(e) => onUpdate({ width: Number(e.target.value) })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="qr-height">Alto (px)</Label>
          <Input
            id="qr-height"
            type="number"
            min={100}
            max={2000}
            value={config.height ?? 300}
            onChange={(e) => onUpdate({ height: Number(e.target.value) })}
          />
        </div>
      </div>

      <Tabs defaultValue="dots">
        <TabsList className="w-full">
          <TabsTrigger value="dots" className="flex-1">Puntos</TabsTrigger>
          <TabsTrigger value="corners" className="flex-1">Esquinas</TabsTrigger>
          <TabsTrigger value="colors" className="flex-1">Colores</TabsTrigger>
        </TabsList>

        {/* Dots Style */}
        <TabsContent value="dots" className="space-y-4 pt-4">
          <Label>Estilo de puntos</Label>
          <div className="grid grid-cols-3 gap-2">
            {DOT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() =>
                  onUpdate({
                    dotsOptions: { ...config.dotsOptions, type },
                  })
                }
                className={`rounded-md border px-3 py-2 text-xs transition-colors cursor-pointer ${
                  config.dotsOptions?.type === type
                    ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                    : "border-[var(--border)] hover:bg-[var(--accent)]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </TabsContent>

        {/* Corner Style */}
        <TabsContent value="corners" className="space-y-4 pt-4">
          <div className="space-y-3">
            <Label>Esquinas exteriores</Label>
            <div className="grid grid-cols-3 gap-2">
              {CORNER_SQUARE_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    onUpdate({
                      cornersSquareOptions: {
                        ...config.cornersSquareOptions,
                        type,
                      },
                    })
                  }
                  className={`rounded-md border px-3 py-2 text-xs transition-colors cursor-pointer ${
                    config.cornersSquareOptions?.type === type
                      ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "border-[var(--border)] hover:bg-[var(--accent)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Puntos de esquina</Label>
            <div className="grid grid-cols-3 gap-2">
              {CORNER_DOT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    onUpdate({
                      cornersDotOptions: {
                        ...config.cornersDotOptions,
                        type,
                      },
                    })
                  }
                  className={`rounded-md border px-3 py-2 text-xs transition-colors cursor-pointer ${
                    config.cornersDotOptions?.type === type
                      ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "border-[var(--border)] hover:bg-[var(--accent)]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Colors */}
        <TabsContent value="colors" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="dot-color">Color de puntos</Label>
            <div className="flex items-center gap-3">
              <input
                id="dot-color"
                type="color"
                value={config.dotsOptions?.color ?? "#d4a017"}
                onChange={(e) =>
                  onUpdate({
                    dotsOptions: { ...config.dotsOptions, color: e.target.value },
                  })
                }
                className="h-9 w-14 cursor-pointer rounded border border-[var(--border)] bg-transparent p-1"
              />
              <span className="text-sm text-[var(--muted-foreground)]">
                {config.dotsOptions?.color}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bg-color">Color de fondo</Label>
            <div className="flex items-center gap-3">
              <Switch
                id="bg-transparent"
                checked={config.backgroundOptions?.color !== "transparent"}
                onCheckedChange={(checked) =>
                  onUpdate({
                    backgroundOptions: {
                      ...config.backgroundOptions,
                      color: checked ? "#ffffff" : "transparent",
                    },
                  })
                }
              />
              <span className="text-xs text-[var(--muted-foreground)]">
                {config.backgroundOptions?.color === "transparent"
                  ? "Sin fondo"
                  : "Con fondo"}
              </span>
            </div>
            {config.backgroundOptions?.color !== "transparent" && (
              <div className="flex items-center gap-3">
                <input
                  id="bg-color"
                  type="color"
                  value={config.backgroundOptions?.color ?? "#ffffff"}
                  onChange={(e) =>
                    onUpdate({
                      backgroundOptions: {
                        ...config.backgroundOptions,
                        color: e.target.value,
                      },
                    })
                  }
                  className="h-9 w-14 cursor-pointer rounded border border-[var(--border)] bg-transparent p-1"
                />
                <span className="text-sm text-[var(--muted-foreground)]">
                  {config.backgroundOptions?.color}
                </span>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
