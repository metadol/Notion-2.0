"use client";

import { ChevronsLeft } from "lucide-react";
import { useRef, useState } from "react";

const Navigation = () => {
  const isResizingRef = useRef(false);
  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className="group/sidebar z-[99999 ] relative flex h-full w-60 flex-col overflow-y-auto bg-secondary">
      <button className="absolute right-2 top-3 h-6 w-6 rounded-sm text-muted-foreground opacity-0 transition hover:bg-neutral-300 group-hover/sidebar:opacity-100 dark:hover:bg-neutral-600">
        <ChevronsLeft />
      </button>
      <div>
        <p>Action Items</p>
      </div>
      <div className="mt-4">
        <p>Documents</p>
      </div>
      <div className="transiton absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 group-hover/sidebar:opacity-100" />
    </aside>
  );
};

export default Navigation;
