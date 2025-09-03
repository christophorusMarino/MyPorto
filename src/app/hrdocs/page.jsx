import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "HR Docs Project",
    description: "Documentation Project HR Docs PT. Central Proteina Prima",
};

export default function HrDocsProject() {
    return (
        <div className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md-py-16 lg:py-0">
            <div className="md:py-20 lg:py-24">
                <Link className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                    Christophorus D. Marino
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Project HR DOCS</h1>
                <div className="my-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-6">
                        <div className="flex-1 bg-slate-800 p-2 rounded-lg text-center overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                            <div className="relative w-full h-full aspect-video rounded overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded"
                                    src="/hrDocs/dashboard.png"
                                    alt="Hr Docs Dashboard"
                                    priority
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="flex flex-col flex-1">
                                <span>Client</span>
                                <span className="font-medium text-slate-200">PT. CENTRAL PROTEINA PRIMA</span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <span>Year</span>
                                <span className="font-medium text-slate-200">
                                    <p>2023/11 - 2024/02 (phase 1)</p>
                                    <p>2024/11 - 2025/02  (phase  2)</p>
                                </span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <span>Type</span>
                                <span className="font-medium text-slate-200">
                                    Web Application
                                </span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <span>Client Location</span>
                                <span className="font-medium text-slate-200">
                                    Jakarta
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}