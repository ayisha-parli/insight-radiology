import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, Scan, ZoomIn, RotateCcw } from "lucide-react";
import { useState } from "react";
import StepIndicator from "@/components/StepIndicator";

const ImageAnalysis = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = () => {
    setImageUploaded(true);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate(`/findings/${id}`);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/patient/${id}`)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Patient
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Image Analysis</h1>
            <p className="text-muted-foreground">Upload and analyze medical images</p>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={2} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upload Panel */}
          <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
            <h3 className="text-xl font-semibold text-foreground mb-4">Upload Images</h3>
            
            {!imageUploaded ? (
              <div 
                className="border-2 border-dashed border-glass-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                onClick={handleImageUpload}
              >
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">Click to upload medical images</p>
                <p className="text-sm text-muted-foreground">
                  Supports DICOM, PNG, JPG formats
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-success-light border border-success/20 rounded-lg p-4">
                  <p className="text-success font-medium">✓ Chest X-Ray uploaded successfully</p>
                  <p className="text-sm text-success/80">chest_xray_001.dcm</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4 mr-2" />
                    Zoom
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Rotate
                  </Button>
                </div>
              </div>
            )}
          </Card>

          {/* Image Viewer */}
          <Card className="lg:col-span-2 p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
            <h3 className="text-xl font-semibold text-foreground mb-4">Image Viewer</h3>
            
            {imageUploaded ? (
              <div className="relative bg-black/90 rounded-lg aspect-square flex items-center justify-center">
                {isAnalyzing && (
                  <div className="absolute inset-0 bg-primary/20 rounded-lg">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary animate-scan-line opacity-70"></div>
                  </div>
                )}
                
                {/* Mock chest x-ray visualization */}
                <div className="text-white/60 text-center">
                  <div className="w-64 h-64 border-2 border-white/30 rounded-lg mb-4 relative">
                    <div className="absolute inset-4 border border-white/20 rounded-lg"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs">
                      Chest X-Ray View
                    </div>
                  </div>
                  
                  {isAnalyzing && (
                    <div className="text-primary animate-pulse">
                      <Scan className="h-8 w-8 mx-auto mb-2" />
                      AI Analysis in Progress...
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-lg aspect-square flex items-center justify-center">
                <p className="text-muted-foreground">No image uploaded</p>
              </div>
            )}
          </Card>
        </div>

        {/* Analysis Controls */}
        {imageUploaded && (
          <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass mt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">AI Analysis Ready</h3>
                <p className="text-muted-foreground">
                  Image successfully uploaded and verified. Ready for AI-powered analysis.
                </p>
              </div>
              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                size="lg"
                variant="medical"
              >
                {isAnalyzing ? (
                  <>
                    <Scan className="h-4 w-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Scan className="h-4 w-4 mr-2" />
                    Start AI Analysis
                  </>
                )}
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ImageAnalysis;