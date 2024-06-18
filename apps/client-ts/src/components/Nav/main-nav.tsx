'use client'

import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export function MainNav({
  onLinkClick,
  className,
  ...props
}: {
  onLinkClick: (name: string) => void;
  className: string;
}) {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    setSelectedItem(pathname.substring(1))
  }, [pathname])

  const navItemClassName = (itemName: string) =>
    `group flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer ${selectedItem === itemName ? 'bg-accent' : 'transparent'
    } transition-colors`;

  function click(e: MouseEvent, name: string) {
    e.preventDefault();
    onLinkClick(name);
  }

  return (
    <nav
      className={`grid items-start gap-2 ${className}`}
      {...props}
    >
      <a
        className={navItemClassName('connections')}
        onClick={(e) => click(e, 'connections')}
      >
        Connections
      </a>
      <a
        className={navItemClassName('events')}
        onClick={(e) => click(e, 'events')}
      >
        Events
      </a>
      <a
        className={navItemClassName('configuration')}
        onClick={(e) => click(e, 'configuration')}
      >
        Configuration
      </a>
      <a
        className={navItemClassName('api-keys')}
        onClick={(e) => click(e, 'api-keys')}
      >
        API Keys
      </a>
      <a
        className={`${navItemClassName('docs')} flex items-center`}
        href="https://docs.panora.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex gap-1 justify-center items-center">
          <p>Docs{" "}</p>
          <ExternalLink className="w-4 h-4" />
        </div>
      </a>
    </nav>
  );
}