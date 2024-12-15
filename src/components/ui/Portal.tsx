import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export function Portal({ children, containerId = 'portal-root' }: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let portalRoot = document.getElementById(containerId);
    
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.id = containerId;
      document.body.appendChild(portalRoot);
    }

    return () => {
      if (portalRoot?.childNodes.length === 0) {
        portalRoot.remove();
      }
    };
  }, [containerId]);

  if (!mounted) return null;
  
  const container = document.getElementById(containerId);
  if (!container) return null;

  return createPortal(children, container);
}