"use client";

import ARViewer from "@/components/ARViewer";

export default function ARPage() {
    return (
        <section className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">AR-примерка</h1>
            <ARViewer />
        </section>
    );
}
