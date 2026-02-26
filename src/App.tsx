import { Header } from "@/components/header";
import { QrPreview } from "@/components/qr-preview";
import { QrConfigPanel } from "@/components/qr-config-panel";
import { QrBulkPanel } from "@/components/qr-bulk-panel";
import { useQrGenerator } from "@/hooks/use-qr-generator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

export default function App() {
  const { config, getQr, updateConfig, downloadQr } = useQrGenerator();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="container mx-auto max-w-5xl flex-1 px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Left: Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Configurar QR</CardTitle>
              <CardDescription>
                Personaliza el estilo y genera códigos QR masivamente.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="single">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="single" className="flex-1">
                    Individual
                  </TabsTrigger>
                  <TabsTrigger value="bulk" className="flex-1">
                    Masivo
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="single">
                  <QrConfigPanel config={config} onUpdate={updateConfig} />
                </TabsContent>

                <TabsContent value="bulk">
                  <QrBulkPanel config={config} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Right: Preview */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Vista previa</CardTitle>
              </CardHeader>
              <CardContent>
                <QrPreview qr={getQr()} />
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadQr("png")}
              >
                <Download className="mr-1 h-4 w-4" /> PNG
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadQr("svg")}
              >
                <Download className="mr-1 h-4 w-4" /> SVG
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => downloadQr("webp")}
              >
                <Download className="mr-1 h-4 w-4" /> WEBP
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-[var(--muted-foreground)]">
        Hecho con <span className="text-red-500">❤️</span> por{" "}
        <a
          href="https://www.fakumax.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[var(--primary)] hover:underline"
        >
          Facundo Vergara
        </a>{" "}
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
