import React, { useState, useEffect } from 'react';

interface SvgImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  paths: Record<string, string>;
  viewBox: string;
  fill?: string;
  excludeKeys?: string[];
}

export function SvgImage({ paths, viewBox, fill = '#3C5B79', excludeKeys = [], ...props }: SvgImageProps) {
  const [svgSrc, setSvgSrc] = useState<string>('');
  
  // Create a stable string for excludeKeys to avoid unnecessary re-renders
  const excludeKeysStr = excludeKeys.join(',');

  useEffect(() => {
    if (!paths) return;
    
    let objectUrl: string | null = null;
    const currentExcludeKeys = excludeKeysStr ? excludeKeysStr.split(',') : [];
    
    // Defer the heavy string operations so we don't block the main thread
    const timer = setTimeout(() => {
      const pathsHtml = Object.entries(paths)
        .filter(([key]) => !currentExcludeKeys.includes(key))
        .map(([_, d]) => `<path d="${d}" fill="${fill}" />`)
        .join('');
        
      const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${pathsHtml}</svg>`;
      const blob = new Blob([svgStr], { type: 'image/svg+xml' });
      objectUrl = URL.createObjectURL(blob);
      
      setSvgSrc(objectUrl);
    }, 0);
    
    return () => {
      clearTimeout(timer);
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [paths, viewBox, fill, excludeKeysStr]);

  return <img src={svgSrc || undefined} {...props} style={{ ...props.style, opacity: svgSrc ? 1 : 0, transition: 'opacity 0.2s' }} />;
}
