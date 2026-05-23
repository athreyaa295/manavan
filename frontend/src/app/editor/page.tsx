"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditorRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a specific "new" editor instance or dashboard
    router.push("/editor/new");
  }, [router]);

  return <div className="h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-400 font-medium">Initializing AI Editor...</p>
    </div>
  </div>;
}
