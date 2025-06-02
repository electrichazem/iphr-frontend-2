import Image from "next/image";
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";

export default function SyllabusPage() {
    return (
        <main className="bg-[#121116] min-h-screen relative">
            <Header />
            
            <div className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center bg-white/5 backdrop-blur-lg p-12 rounded-2xl mb-16 border-2 border-white/20">
                    <h1 className="text-5xl font-bold text-white mb-4 my-8">IPhR Syllabus</h1>
                </div>

                {/* Syllabus Table */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 overflow-x-auto">
                    <table className="w-full text-white border-collapse">
                        <thead>
                            <tr className="border-b border-white/20">
                                <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">Topic</th>
                                <th className="text-left py-4 px-4 font-semibold text-[#4380eb]">Concepts</th>
                                <th className="text-center py-4 px-4 font-semibold text-[#4380eb]">Round 1</th>
                                <th className="text-center py-4 px-4 font-semibold text-[#4380eb]">Round 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mechanics Row */}
                            <tr className="border-b border-white/10 hover:bg-white/5">
                                <td className="py-4 px-4 font-medium">Mechanics</td>
                                <td className="py-4 px-4 text-gray-300">
                                    Angular Momentum, Angular Motion, Dimensional Analysis, Elasticity, Fluid Mechanics, Error Propagation, Forces, Linear Momentum, Newtonian Gravitation, Power, Rotation, Translational Motion, Work, and Energy
                                </td>
                                <td className="py-4 px-4 text-center">10 Questions</td>
                                <td className="py-4 px-4 text-center">13 Questions</td>
                            </tr>
                            
                            {/* Electromagnetism Row */}
                            <tr className="border-b border-white/10 hover:bg-white/5">
                                <td className="py-4 px-4 font-medium">Electromagnetism</td>
                                <td className="py-4 px-4 text-gray-300">
                                    Capacitance, Circuits, Current, Electric Fields, Electric Potential, Electromagnetic Induction, Electromagnetic Waves, Generators, Magnetic Fields, Motors, and Resistance
                                </td>
                                <td className="py-4 px-4 text-center">8 Questions</td>
                                <td className="py-4 px-4 text-center">10 Questions</td>
                            </tr>
                            
                            {/* Waves and Oscillations Row */}
                            <tr className="border-b border-white/10 hover:bg-white/5">
                                <td className="py-4 px-4 font-medium">Waves and Oscillations</td>
                                <td className="py-4 px-4 text-gray-300">
                                    Doppler Effect, Harmonic Motion, Pendulum Motion, Resonance, Standing Waves, and Wave Motion
                                </td>
                                <td className="py-4 px-4 text-center">5 Questions</td>
                                <td className="py-4 px-4 text-center">6 Questions</td>
                            </tr>
                            
                            {/* Thermodynamics Row */}
                            <tr className="border-b border-white/10 hover:bg-white/5">
                                <td className="py-4 px-4 font-medium">Thermodynamics</td>
                                <td className="py-4 px-4 text-gray-300">
                                    Entropy, Heat, Kinetic Theory of Gases, Laws of Thermodynamics, Temperature, Thermodynamic Processes, and Work
                                </td>
                                <td className="py-4 px-4 text-center">4 Questions</td>
                                <td className="py-4 px-4 text-center">5 Questions</td>
                            </tr>
                            
                            {/* Optics Row */}
                            <tr className="border-b border-white/10 hover:bg-white/5">
                                <td className="py-4 px-4 font-medium">Optics</td>
                                <td className="py-4 px-4 text-gray-300">
                                    Diffraction, Lenses, Light's Nature, Mirrors, Reflection, and Refraction
                                </td>
                                <td className="py-4 px-4 text-center">2 Questions</td>
                                <td className="py-4 px-4 text-center">4 Questions</td>
                            </tr>
                            
                            {/* Modern Physics Row */}
                            <tr className="hover:bg-white/5">
                                <td className="py-4 px-4 font-medium">Modern Physics</td>
                                <td className="py-4 px-4 text-gray-300">
                                    Cosmology, General & Special Relativity, Nuclear Physics, Particle Physics, Quantum Physics
                                </td>
                                <td className="py-4 px-4 text-center">1 Question</td>
                                <td className="py-4 px-4 text-center">2 Questions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </main>
    );
}