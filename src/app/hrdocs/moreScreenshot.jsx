"use client";

import { useState } from "react";
import Image from "next/image";

export default function MoreScreenshots({ screenshots }) {
    const [selected, setSelected] = useState(null)

    return (
        <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">
                More Screenshots
            </h2>

            {/* Grid Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {screenshots.map((shot, idx) => (
                    <div key={idx} className="flex-1 bg-slate-800 p-2 rounded-lg text-center overflow-hidden transition-shadow duration-300 hover:shadow-xl" onClick={() => setSelected(shot)}>
                        <div
                            className="relative group rounded overflow-hidden shadow-lg bg-slate-800 cursor-pointer"
                        >
                            <Image
                                src={shot.src}
                                alt={shot.alt}
                                width={600}
                                height={400}
                                className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center">
                                <p className="text-white text-sm font-medium p-4">{shot.alt}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Lightbox */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelected(null)}
                >
                    <div className="relative max-w-4xl w-full">
                        <Image
                            src={selected.src}
                            alt={selected.alt}
                            width={1200}
                            height={800}
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                        <button
                            className="absolute top-2 right-2 bg-white/80 text-black px-3 py-1 rounded hover:bg-white"
                            onClick={() => setSelected(null)}
                        >
                            ✕ Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}