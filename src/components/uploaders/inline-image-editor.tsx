import { useRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import { Button } from "@/components/ui/button";
import "cropperjs/dist/cropper.css";

interface InlineImageEditorProps {
  imageUrl: string;
  onSave: (croppedBlob: Blob) => void;
  onCancel: () => void;
}

export const InlineImageEditor = ({
  imageUrl,
  onSave,
  onCancel,
}: InlineImageEditorProps) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSave = async () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    setIsProcessing(true);
    try {
      const canvas = cropper.getCroppedCanvas();
      canvas.toBlob(
        (blob) => {
          if (blob) {
            onSave(blob);
          }
          setIsProcessing(false);
        },
        "image/jpeg",
        0.9
      );
    } catch (error) {
      console.error("Error cropping image:", error);
      setIsProcessing(false);
    }
  };

  const handleRotate = () => {
    cropperRef.current?.cropper.rotate(90);
  };

  const handleFlip = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      const scaleX = cropper.getData().scaleX || 1;
      cropper.scaleX(scaleX * -1);
    }
  };

  const handleZoomIn = () => {
    cropperRef.current?.cropper.zoom(0.1);
  };

  const handleZoomOut = () => {
    cropperRef.current?.cropper.zoom(-0.1);
  };

  const handleReset = () => {
    cropperRef.current?.cropper.reset();
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 min-h-0 relative">
        <Cropper
          ref={cropperRef}
          src={imageUrl}
          style={{ height: "100%", width: "100%" }}
          viewMode={1}
          guides={true}
          minCropBoxHeight={70}
          minCropBoxWidth={70}
          background={false}
          responsive={true}
          autoCropArea={0.8}
          checkOrientation={false}
          dragMode="crop"
        />
      </div>

      <div className="flex flex-wrap gap-2 p-4 bg-white border-t">
        <Button onClick={handleRotate} variant="outline" size="sm">
          Obróć 90°
        </Button>
        <Button onClick={handleFlip} variant="outline" size="sm">
          Odbij
        </Button>
        <Button onClick={handleZoomIn} variant="outline" size="sm">
          Powiększ
        </Button>
        <Button onClick={handleZoomOut} variant="outline" size="sm">
          Pomniejsz
        </Button>
        <Button onClick={handleReset} variant="outline" size="sm">
          Reset
        </Button>
        <div className="flex-1" />
        <Button onClick={onCancel} variant="outline" size="sm">
          Anuluj
        </Button>
        <Button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700"
          size="sm"
          disabled={isProcessing}
        >
          {isProcessing ? "Zapisywanie..." : "Zapisz"}
        </Button>
      </div>
    </div>
  );
};
