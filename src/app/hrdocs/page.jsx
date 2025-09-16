import Image from "next/image";
import Link from "next/link";
import MoreScreenshots from "./moreScreenshot";

export const metadata = {
    title: "HR Docs Project",
    description: "Documentation Project HR Docs PT. Central Proteina Prima",
};

export default function HrDocsProject() {
    const screenshots = [
        { src: "/hrDocs/evaluasiList.png", alt: "Evaluation List" },
        { src: "/hrDocs/evaluasiForm1.png", alt: "Evaluation Form 1" },
        { src: "/hrDocs/evaluasiForm2.png", alt: "Evaluation Form 2" },
        { src: "/hrDocs/mutasiList.png", alt: "Mutaion List" },
        { src: "/hrDocs/mutasiForm.png", alt: "Mutaion Form" },
        { src: "/hrDocs/mutasiProgress.png", alt: "Mutaion Progress" },
    ];

    return (
        <div className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md-py-16 lg:py-0">
            <div className="md:py-20 lg:py-24">
                <Link className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                    Christophorus D. Marino
                </Link>
                <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl md:text-5xl lg:text-5xl">Project HR DOCS</h1>
                <div className="my-6 mt-10">
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

                <div className="my-6 mt-14">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-6">
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-col flex-1">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-200">Project Details</h1>
                                <p className="mb-4">
                                    An end-to-end HR workflow solution that replaces paperwork with a seamless digital process. From employee transfers and retirements to new appointments, requests move through automated approval chains with instant notifications. Final approvals generate official HR decrees and update records in real time—delivering faster, smarter, and more transparent HR operations.
                                </p>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-200">Main Feature</h1>
                                <ul className="list-disc ml-6 mt-2 text-slate-300 space-y-1">
                                    <li>
                                        <strong>Automated Workflows</strong> – Digitalized HR processes for transfers, retirements, and new appointments.
                                    </li>
                                    <li>
                                        <strong>Tiered Approval Chains</strong> – Requests follow structured authorization levels with real-time notifications.
                                    </li>
                                    <li>
                                        <strong>Seamless Integration</strong> – Automatically generates official HR decrees and updates employee records.
                                    </li>
                                    <li>
                                        <strong>Improved Efficiency</strong> – Eliminates manual paperwork, reduces delays, and speeds up decision-making.
                                    </li>
                                    <li>
                                        <strong>Enhanced Transparency</strong> – Clear tracking of approval status for all stakeholders.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-800 p-2 rounded-lg text-center overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                            <div className="relative w-full h-full aspect-video rounded overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded"
                                    src="/hrDocs/mutasiProgress.png"
                                    alt="Hr Docs Mutation Progress"
                                    priority
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-6 mt-14">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-6">
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-col flex-1">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-200">Tech Stack</h1>
                                <ul className="list-disc ml-6 mt-2 text-slate-300 space-y-1">
                                    <li>
                                        <strong>Backend:</strong> Laravel 11 (SSO
                                        Authentication)
                                    </li>
                                    <li>
                                        <strong>Frontend:</strong> Vue.js + TailwindCSS
                                    </li>
                                    <li>
                                        <strong>Database:</strong> MySQL
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-200">Impact & Results</h1>
                                <ul className="list-disc ml-6 mt-2 text-slate-300 space-y-1">
                                    <li>Reduced HR document processing time by ~60%</li>
                                    <li>
                                        Improved approval transparency across multiple departments
                                    </li>
                                    <li>Eliminated paper-based workflows, saving 100+ hours/month</li>
                                </ul>
                            </div>
                            <div className="flex flex-col flex-1">
                                <h1 className="text-2xl font-bold tracking-tight text-slate-200">Role & Contribution</h1>
                                <p className="mt-2 text-slate-300 leading-relaxed">
                                    As the <strong>Full-stack Developer</strong>, I designed the
                                    database structure, developed backend APIs, implemented
                                    frontend UI/UX, and deployed the system for production use.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 bg-slate-800 p-2 rounded-lg text-center overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                            <div className="relative w-full h-full aspect-video rounded overflow-hidden">
                                <Image
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 rounded"
                                    src="/hrDocs/evaluasiProgresspng.png"
                                    alt="Hr Docs Evaluation Progress"
                                    priority
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <MoreScreenshots screenshots={screenshots} />
            </div>
        </div >
    )
}