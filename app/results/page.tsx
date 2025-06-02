import Header from "../components/Header.component";
import Footer from "../components/Footer.component";
import ResultsViewer from "../components/ResultsViewer.component";
import results2024Regular from "./2024-regular.json";
import results2024Advanced from "./2024-advanced.json";
import results2023Regular from "./2023-regular.json";
import results2023Advanced from "./2023-advanced.json";

export default function ResultsPage() {
    const data = {
        2023: {
            regular: results2023Regular,
            advanced: results2023Advanced
        },
        2024: {
            regular: results2024Regular,
            advanced: results2024Advanced
        }
    };

    return (
        <main className="bg-[#121116] min-h-screen relative">
            <Header />
            
            <div className="max-w-[1300px] mx-auto px-6 py-16">
                <div className="text-center bg-white/5 backdrop-blur-lg p-12 rounded-2xl mb-16 border-2 border-white/20">
                    <h1 className="text-5xl font-bold text-white mb-4 my-8">IPhO Results</h1>
                    <p className="text-gray-300">
                        This page displays the rankings of individuals who took part in the second round of the competition.
                        These rankings comprise 10% of the total initial participants.
                    </p>
                </div>

                <ResultsViewer 
                    initialYear={2024}
                    data2023={data[2023]} 
                    data2024={data[2024]} 
                />
            </div>

            <Footer />
        </main>
    );
}