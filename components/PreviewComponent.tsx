import React from "react";
import PdfPreview from "./PdfPreview/PdfPreview";

const PreviewComponent: React.FC = () => {
  const pdfUrl: string = "../Pdf/example.pdf";

  return (
    <div className="container">
      <h1>PDF Preview Example</h1>
      <PdfPreview pdfUrl={pdfUrl} />
    </div>
  );
};

export default PreviewComponent;
