import Image from "next/image";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";

export default function AmbassadorsPage() {
    return (
        <main className="bg-[#121116] min-h-screen">
            <Header />

            <div className="max-w-[1300px] mx-auto px-6 py-16">
                <h3 className="font-semibold text-[#4380eb] text-center mb-2">AMBASSADORS OF CHANGE</h3>
                <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-[39px] mx-auto text-center max-w-[950px] mb-12">
                    IPhR TOP AMBASSADORS
                </h1>

                {/* Ambassador Card */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-[1000px] mx-auto">
                    <div className="relative w-full md:w-1/2 aspect-[3/4] rounded-xl overflow-hidden">
                        <Image
                            src="/yassin.jpeg"
                            alt="Yassin Saad - Top Ambassador"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2"> Yaseen Mohamed-Abdelal</h2>
                            <span className="text-[#528bf2] font-medium text-lg">2024 TOP AMBASSADOR</span>
                        </div>
                        
                        <p className="text-gray-300 text-lg">
                            Yaseen Mohamed-Abdelal, a dedicated student from STEM High School for boys, a passionate physics enthusiast, and a top ambassador for the IPhR program. His commitment to promoting physics education and inspiring fellow students has made him a standout figure in the community. Yassin's efforts have significantly contributed to the success of the IPhR program, reaching over 300 students and fostering a love for physics among his peers.
                        </p>
                        
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <span className="bg-[#528bf2]/10 text-[#528bf2] px-4 py-2 rounded-full text-sm font-medium">
                                +108 Students Reached
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}