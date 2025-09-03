import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
    return (
        <>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Project</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-25">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <Link className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="/hrdocs" rel="noreferrer noopener">
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>Digitalize HRD Document · PT Central Proteina Prima</span>
                                </Link>
                                <p className="mt-2 text-sm leading-normal">
                                    Develop internal HR application for manage employee promotions, including appointments/terminations, mutation, and pension.
                                    This application helps HR Team, Supervisor, and Employee to monitor their current employment progress.
                                </p>
                                <ul className="mt-2 flex flex-wrap mb-4 lg:mb-0 md:mb-0">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Laravel
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Vue 3
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            MySql
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Github
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Image
                                className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                src="/hrDocs/dashboard.png"
                                alt="Hr Docs Dashboard"
                                loading="lazy"
                                width={200}
                                height={48}
                                unoptimized
                                decoding="async"
                            />
                        </div>
                    </li>

                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-25">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    Siak Regent Election Tabulation · Candidate No. 3
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Develop web application to collect voting result at each polling station, and calculate to display in graphical form in real time.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Laravel
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Vue 2
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            MySql
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                2021/11 — Present
                            </header>
                        </div>
                    </li>

                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-25">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    Legislative Candidate 2024 Riau Election · Partai Amanat Nasional (PAN)
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    A team of three developed web application to calculate and tabulate the result of legislation election for all legislative candidate in Riau provincial electoral district.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Laravel
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Vue 2
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            MySql
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                2021/11 — Present
                            </header>
                        </div>
                    </li>

                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-25">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    Auto Body Repair Management System · Vins Auto Body Repair
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Design database, develop frontend , and collaborate with backend to covering entire process of body repair workshop from registration vehicle, stock mutation, repairing process, and monthly report.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Laravel
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Github
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                2021/11 — Present
                            </header>
                        </div>
                    </li>

                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-25">
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                            <div className="z-10 sm:order-2 sm:col-span-6">
                                <h3 className="font-medium leading-snug text-slate-200">
                                    Payroll Management System · PT. Central Pertiwi Bahari
                                </h3>
                                <p className="mt-2 text-sm leading-normal">
                                    Develop payroll automatic calculation for outsourcing and contract employee, based on daily target and assigment task of each employee.
                                </p>
                                <ul className="mt-2 flex flex-wrap">
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Laravel
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Vue 2
                                        </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            MySql
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">
                                2021/11 — Present
                            </header>
                        </div>
                    </li>
                </ol>
            </div>
        </>
    )
}