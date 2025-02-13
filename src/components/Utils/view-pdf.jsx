import React, { useState } from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./maths chapter-5-c.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ViewPdf = ({ mobile, width }) => {
  const [pages, setPages] = useState(1);

  function loadSuccess({ numPages }) {
    setPages(numPages);
  }

  return (
    <div>
      <Document file={pdf} onLoadSuccess={loadSuccess}>
        {Array.from({ length: pages }, (_, i) => {
          return (
            <div className="w-full" key={i}>
              <div className="relative w-min mx-auto">
                <Page
                  pageNumber={i + 1}
                  width={width}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className="border my-3 shadow-xl page-no"
                />{" "}
                <p className="absolute bottom-0 right-0 translate-x-[100%] bg-gray-300 rounded-sm px-2 py-1">{i + 1}/{pages}</p>
              </div>
            </div>
          );
        })}
      </Document>
    </div>
  );
};

export default ViewPdf;
