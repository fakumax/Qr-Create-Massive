import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Download } from "lucide-react";
import QRCodeStyling, { type Options as QROptions } from "qr-code-styling";
import JSZip from "jszip";

interface BulkEntry {
  id: string;
  data: string;
}

interface QrBulkPanelProps {
  config: QROptions;
}

export function QrBulkPanel({ config }: QrBulkPanelProps) {
  const [entries, setEntries] = useState<BulkEntry[]>([
    { id: crypto.randomUUID(), data: "" },
  ]);
  const [generating, setGenerating] = useState(false);

  const addEntry = useCallback(() => {
    setEntries((prev) => [
      ...prev,
      { id: crypto.randomUUID(), data: "" },
    ]);
  }, []);

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const updateEntry = useCallback((id: string, data: string) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, data } : e))
    );
  }, []);

  const handlePaste = useCallback((text: string) => {
    const lines = text
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length > 1) {
      setEntries(
        lines.map((data) => ({ id: crypto.randomUUID(), data }))
      );
    }
  }, []);

  const generateAll = useCallback(async () => {
    const valid = entries.filter((e) => e.data.trim());
    if (valid.length === 0) return;
    setGenerating(true);

    try {
      if (typeof JSZip === "undefined") {
        // Download individually if JSZip not available
        for (let i = 0; i < valid.length; i++) {
          const entry = valid[i]!;
          const qr = new QRCodeStyling({ ...config, data: entry.data });
          await qr.download({ extension: "png", name: `qr-${i + 1}` });
        }
      } else {
        const zip = new JSZip();
        for (let i = 0; i < valid.length; i++) {
          const entry = valid[i]!;
          const qr = new QRCodeStyling({ ...config, data: entry.data });
          const blob = await qr.getRawData("png");
          if (blob) zip.file(`qr-${i + 1}.png`, blob);
        }
        const content = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(content);
        const a = document.createElement("a");
        a.href = url;
        a.download = "qr-codes.zip";
        a.click();
        URL.revokeObjectURL(url);
      }
    } finally {
      setGenerating(false);
    }
  }, [entries, config]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>URLs / Textos (uno por línea o campo)</Label>
        <Button variant="outline" size="sm" onClick={addEntry}>
          <Plus className="mr-1 h-4 w-4" /> Agregar
        </Button>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
        {entries.map((entry, idx) => (
          <div key={entry.id} className="flex items-center gap-2">
            <span className="w-6 text-xs text-[var(--muted-foreground)] text-right">
              {idx + 1}
            </span>
            <Input
              value={entry.data}
              onChange={(e) => updateEntry(entry.id, e.target.value)}
              onPaste={(e) => {
                const text = e.clipboardData.getData("text");
                if (text.includes("\n")) {
                  e.preventDefault();
                  handlePaste(text);
                }
              }}
              placeholder="https://..."
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeEntry(entry.id)}
              disabled={entries.length <= 1}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      <Button
        className="w-full"
        onClick={generateAll}
        disabled={generating || entries.every((e) => !e.data.trim())}
      >
        <Download className="mr-2 h-4 w-4" />
        {generating
          ? "Generando..."
          : `Descargar ${entries.filter((e) => e.data.trim()).length} QR(s)`}
      </Button>
    </div>
  );
}
