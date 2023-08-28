import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfPreviewProps {
  pdfUrl: string;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ pdfUrl }) => {
  return (
    <div className="pdf-preview">
      <Document file={pdfUrl} loading="Loading PDF...">
        <Page pageNumber={1} />
      </Document>
      <style jsx>{`
        .pdf-preview {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

{
  /* .react-pdf__Page__textContent {
          display: none; 
   } */
}

export default PdfPreview;
