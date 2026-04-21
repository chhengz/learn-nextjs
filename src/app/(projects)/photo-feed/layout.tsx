"use client";

import { useSelectedLayoutSegment } from 'next/navigation'


export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  
  
  const modalSegment = useSelectedLayoutSegment('modal')

  return (
    <>
      {/* {props.modal} */}
      {props.children}
      {modalSegment && props.modal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          {props.modal}
        </div>
      )}
    </>
  );
}