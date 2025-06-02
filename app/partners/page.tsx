import Image from "next/image";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";

export default function PartnersPage() {
    return (
        <main className="bg-[#121116] min-h-screen relative">
            {/* Background image with reduced opacity */}
            <div 
                className="absolute inset-0 bg-[url('/bg_img_line.png')] bg-cover bg-center bg-no-repeat opacity-20"
                style={{ zIndex: 0 }}
            />
            
            {/* Content with higher z-index */}
            <div className="relative" style={{ zIndex: 1 }}>
                <Header />

                <div className="max-w-[1300px] mx-auto px-6 py-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h3 className="font-semibold text-[#4380eb] mb-2">OUR PARTNERS</h3>
                        <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-[39px] mx-auto max-w-[950px] mb-4">
                            Partners Who Propel Us Forward
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            We are proud to collaborate with a diverse group of academic institutions,
                            industry leaders, and research organizations.
                        </p>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Wolfram Card */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-[#528bf2]/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Image
                                        src="/wolfram.png"
                                        alt="Wolfram"
                                        width={160}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-white mb-2">Wolfram</h3>
                                    <p className="text-gray-300">
                                        Wolfram Research is one of the world's most respected computer, web, and cloud software companies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* AoPS Card */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-[#528bf2]/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Image
                                        src="/Aops.png"
                                        alt="Art of Problem Solving"
                                        width={160}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-white mb-2">AoPS</h3>
                                    <p className="text-gray-300">
                                        Art of Problem Solving offers math, science, and language arts courses, focusing on problem-solving and active learning to prepare students for top-tier colleges and competitive careers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Wasmer Card */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-[#528bf2]/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Image
                                        src="/wasmer.png"
                                        alt="Wasmer"
                                        width={160}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-white mb-2">Wasmer</h3>
                                    <p className="text-gray-300">
                                        Wasmer has generously offered to provide free limitless WordPress hosting for this website, making it easier to focus on delivering valuable content and resources to visitors.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Relay Card */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-[#528bf2]/30 transition-all duration-300">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="w-full md:w-1/3 flex justify-center">
                                    <Image
                                        src="/relay.png"
                                        alt="Relay"
                                        width={160}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-xl font-bold text-white mb-2">Relay</h3>
                                    <p className="text-gray-300">
                                        Relay brings real-time collaboration to Obsidian, enhancing our team's productivity and knowledge sharing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
}