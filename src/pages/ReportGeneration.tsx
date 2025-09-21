import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Share2, Printer, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import StepIndicator from "@/components/StepIndicator";

const ReportGeneration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = () => {
    setReportGenerated(true);
  };

  const reportData = {
    patientName: "John Anderson",
    patientId: "PA-12345",
    studyDate: "2024-01-15",
    studyType: "Chest X-Ray PA/Lateral",
    radiologist: "Dr. Michael Chen, MD",
    reportDate: new Date().toLocaleDateString()
  };

  const findings = [
    "Pulmonary nodule in right upper lobe (8mm, likely benign granuloma)",
    "Mild pleural thickening along left pleural space",
    "Consolidation in right lower lobe consistent with pneumonia"
  ];

  const recommendations = [
    "Immediate antibiotic therapy for pneumonia",
    "Follow-up CT in 3 months for pulmonary nodule",
    "Pulmonology consultation recommended",
    "Occupational exposure history review"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/detailed/${id}`)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Analysis
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Report Generation</h1>
            <p className="text-muted-foreground">Generate and share comprehensive radiology report</p>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={5} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Preview */}
          <Card className="lg:col-span-2 p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Radiology Report</h3>
              {reportGenerated && (
                <Badge variant="default" className="bg-success text-success-foreground">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Generated
                </Badge>
              )}
            </div>

            {reportGenerated ? (
              <div className="bg-white text-black p-8 rounded-lg shadow-inner max-h-96 overflow-y-auto">
                {/* Medical Report Content */}
                <div className="space-y-6">
                  <div className="text-center border-b pb-4">
                    <h2 className="text-xl font-bold">RADIOLOGY REPORT</h2>
                    <p className="text-sm text-gray-600">AI-Assisted Diagnostic Imaging</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Patient:</strong> {reportData.patientName}</p>
                      <p><strong>Patient ID:</strong> {reportData.patientId}</p>
                      <p><strong>Study Date:</strong> {reportData.studyDate}</p>
                    </div>
                    <div>
                      <p><strong>Study Type:</strong> {reportData.studyType}</p>
                      <p><strong>Radiologist:</strong> {reportData.radiologist}</p>
                      <p><strong>Report Date:</strong> {reportData.reportDate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">CLINICAL INDICATION:</h3>
                    <p className="text-sm">Persistent cough, shortness of breath</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">TECHNIQUE:</h3>
                    <p className="text-sm">PA and lateral chest radiographs were obtained.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">FINDINGS:</h3>
                    <ul className="text-sm space-y-1">
                      {findings.map((finding, index) => (
                        <li key={index}>• {finding}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">IMPRESSION:</h3>
                    <p className="text-sm">
                      1. Right lower lobe pneumonia - requires immediate treatment<br/>
                      2. Right upper lobe pulmonary nodule - likely benign, follow-up recommended<br/>
                      3. Mild left pleural thickening - clinical correlation suggested
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">RECOMMENDATIONS:</h3>
                    <ul className="text-sm space-y-1">
                      {recommendations.map((rec, index) => (
                        <li key={index}>• {rec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 text-xs text-gray-500">
                    <p>This report was generated with AI assistance. Clinical correlation is recommended.</p>
                    <p>Electronically signed by {reportData.radiologist}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-muted/30 rounded-lg p-12 text-center">
                <p className="text-muted-foreground mb-4">Report preview will appear here</p>
                <Button 
                  onClick={handleGenerateReport}
                  variant="medical"
                >
                  Generate Report
                </Button>
              </div>
            )}
          </Card>

          {/* Actions Panel */}
          <div className="space-y-6">
            <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Report Actions</h3>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={!reportGenerated}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={!reportGenerated}
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Print Report
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={!reportGenerated}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share with Clinician
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  disabled={!reportGenerated}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy to Clipboard
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-glass-card backdrop-blur-md border-glass-border shadow-glass">
              <h3 className="text-lg font-semibold text-foreground mb-4">Report Summary</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Findings</span>
                  <span className="font-semibold text-foreground">3</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">High Priority</span>
                  <Badge variant="critical" className="text-xs">1</Badge>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Report Length</span>
                  <span className="font-semibold text-foreground">2 pages</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Generation Time</span>
                  <span className="font-semibold text-foreground">0.8s</span>
                </div>
              </div>
            </Card>

            <Button 
              onClick={() => navigate("/")}
              variant="outline"
              className="w-full"
            >
              Return to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGeneration;