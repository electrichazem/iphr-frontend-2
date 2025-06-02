import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import Link from "next/link";

function ArchivePage() {
    return (
        <main className="bg-[#121116] min-h-screen">
            <Header />

            <div className="max-w-[1300px] mx-auto px-6 py-16">
                <div className="text-center bg-white/5 backdrop-blur-lg p-12 rounded-2xl mb-16 border-2 border-white/20">
                    <h1 className="text-5xl font-bold text-white mb-4">Archive</h1>
                    <p className="text-gray-300 text-xl">History of the International Physics Realm Competition</p>
                </div>

                <div className="space-y-16">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="relative bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#528bf2] mb-6">International Physics Realm 2024</h2>
                            <ul className="space-y-4 text-gray-300 text-lg">
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2024/results" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        Results
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2024/trial-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        Top Ambassador
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2024/trial-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        Trial Round Problems and Solutions
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2024/first-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        1st Round Problems and Solutions
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2024/second-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        2nd Round Problems and Solutions
                                    </Link>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-400 italic text-lg">
                                While the two categories differ in the first and last test questions, making the advanced
                                category's more home focus questions are expected toward an difficulty. This means that
                                the first 30 sessions were in the regular category, the last 90 were in the advanced
                                category, and the next were common in both categories.
                            </p>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border-2 border-white/20 flex flex-col justify-center h-fit my-auto">
                            <h3 className="text-2xl font-semibold text-white mb-6">2024 Competition Growth</h3>
                            <div className="space-y-6 text-gray-300 text-lg">
                                <div className="flex items-center">
                                    <div className="bg-[#528bf2]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-[#528bf2] text-xl">✓</span>
                                    </div>
                                    <span>2,600+ participants worldwide</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-[#528bf2]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-[#528bf2] text-xl">✓</span>
                                    </div>
                                    <span>1,350+ high schools involved</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-[#528bf2]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-[#528bf2] text-xl">✓</span>
                                    </div>
                                    <span>74 participating countries</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#528bf2] mb-6">International Physics Realm 2023</h2>
                            <ul className="space-y-4 text-gray-300 text-lg">
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2023/results" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        Results
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2023/trial-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        Trial Round Problems and Solutions
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2023/first-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        1st Round Problems and Solutions
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#528bf2] mr-3 text-xl">•</span>
                                    <Link href="/archive/2023/second-round" className="hover:text-[#528bf2] transition-colors duration-200 underline">
                                        2nd Round Problems and Solutions
                                    </Link>
                                </li>
                            </ul>
                            <p className="mt-6 text-gray-400 italic text-lg">
                                While the two categories differ in the first and last test questions, making the advanced
                                category's more home focus questions are expected toward an difficulty. This means that
                                the first 30 sessions were in the regular category, the last 90 were in the advanced
                                category, and the next were common in both categories.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border-2 border-white/20 flex flex-col justify-center h-fit my-auto">
                            <h3 className="text-2xl font-semibold text-white mb-6">2023 Inaugural Year</h3>
                            <div className="space-y-6 text-gray-300 text-lg">
                                <div className="flex items-center">
                                    <div className="bg-[#528bf2]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-[#528bf2] text-xl">✓</span>
                                    </div>
                                    <span>750+ pioneering participants</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-[#528bf2]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-[#528bf2] text-xl">✓</span>
                                    </div>
                                    <span>300+ high schools involved</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-[#528bf2]/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                        <span className="text-[#528bf2] text-xl">✓</span>
                                    </div>
                                    <span>40+ participating countries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default ArchivePage;