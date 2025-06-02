import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";
import FAQItem from "./components/FAQItem.component";
import Footer from "./components/Footer.component";
import Header from "./components/Header.component";

export default function Home() {


  return (
    <main className="bg-[#121116] min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="max-w-[850px] flex flex-col justify-center mx-auto px-6 gap-6 h-full">
          <div className="space-y-4">
            <h1 className="text-white text-5xl md:text-6xl lg:text-[69px] font-bold leading-tight">
              International Physics <span className="text-[#528bf2]">Realm</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              The 2024 IPhR Results are out; check IPhR's details and wait for 2025!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1WKiLAAHbfXT1qnDtHR0Y-8RTXA4Oj6o5D615D_zhaEA/edit?usp=sharing"
              className="flex items-center justify-center py-4 px-6 rounded-md border-2 border-white text-white hover:bg-white/10 hover:border-[#528bf2] hover:text-[#528bf2] transition-all duration-300 font-medium text-lg w-full sm:max-w-[350px]"
            >
              Details
            </a>
            <a
              target="_blank" rel="noopener noreferrer"
              href="/"
              className="flex items-center justify-center py-4 px-6 rounded-md bg-gradient-to-r from-[#0042bf] to-[#0066ff] text-white hover:from-[#0066ff] hover:to-[#0042bf] transition-all duration-300 font-medium text-lg w-full sm:max-w-[350px] shadow-lg hover:shadow-xl"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats*/}
      <section className="py-8 px-4">
        <div className={`${styles.counterParent} max-w-6xl mx-auto px-6 flex items-center rounded-2xl`}>
          {/* First Stat */}
          <div className="flex flex-col gap-2 items-center text-center group">
            <span className="text-[#528bf2] font-bold text-5xl group-hover:text-6xl transition-all duration-300">2,600+</span>
            <span className="text-white font-medium text-lg">Total Participants</span>
            <div className="w-16 h-1 bg-[#528bf2] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* First Separator */}
          <div className={styles.separator}></div>

          {/* Second Stat */}
          <div className="flex flex-col gap-2 items-center text-center group">
            <span className="text-[#528bf2] font-bold text-5xl group-hover:text-6xl transition-all duration-300">74</span>
            <span className="text-white font-medium text-lg">Countries</span>
            <div className="w-16 h-1 bg-[#528bf2] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Second Separator */}
          <div className={styles.separator}></div>

          {/* Third Stat */}
          <div className="flex flex-col gap-2 items-center text-center group">
            <span className="text-[#528bf2] font-bold text-5xl group-hover:text-6xl transition-all duration-300">1,350+</span>
            <span className="text-white font-medium text-lg">Schools Involved</span>
            <div className="w-16 h-1 bg-[#528bf2] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4  max-w-[1300px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="bg-[#1a1a20] rounded-xl p-6 md:p-8 shadow-xl border border-[#ffffff10] flex gap-8 flex-wrap">
          <div className="flex-1">
            <FAQItem
              question="What is IPhR?"
              answer={<p>IPhR is a competition that tests your knowledge in general physics.</p>}
            />

            <FAQItem
              question="What are the Syllabus and Rules for the Competition?"
              answer={
                <>
                  <p>The competition tests six main areas, which are as follows (listed in order of frequency):</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Classical Mechanics</li>
                    <li>Electromagnetism</li>
                    <li>Waves and Oscillations</li>
                    <li>Thermodynamics</li>
                    <li>Optics</li>
                    <li>Modern Physics</li>
                  </ul>
                  <p className="mt-3">For detailed competition regulations, please refer to the official rules document.</p>
                </>
              }
            />

            <FAQItem
              question="What is the format of the competition?"
              answer={
                <>
                  <p>The IPhR competition is an individual-based international physics competition for high school students in grades 9-12.</p>
                  <p className="mt-2 font-medium text-white">Competition Structure:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li><span className="font-medium">1st Round:</span> 30 MCQs within 45 minutes</li>
                    <li><span className="font-medium">2nd Round:</span> 40 MCQs within 45 minutes</li>
                  </ul>
                  <p className="mt-3">All MCQs carry the same weight (1 point each) with no penalty for incorrect answers.</p>
                  <p className="mt-2">Note: The trial round may include fill-in-the-gap questions for IPhR 2024.</p>
                </>
              }
            />
            <FAQItem
              question="What is the participation eligibility?"
              answer={
                <>
                  <p>The IPhR competition is open to all international high school students with no country restrictions.</p>
                  <p className="mt-3 font-medium text-white">Eligibility Requirements:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Must be in grades 9-12 during competition period</li>
                    <li>Must not have enrolled in college before the 2nd round</li>
                    <li>Grade 9 equivalent varies by country but doesn't affect eligibility</li>
                  </ul>
                  <p className="mt-3">Contact us if you need clarification about your eligibility status.</p>
                </>
              }
            />

          </div>

          <div className="flex-1">

            <FAQItem
              question="What are the categories for participants in the IPhR competition?"
              answer={
                <>
                  <p>Participants are divided into two categories based on grade level:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-[#252531] p-3 rounded-lg">
                      <h4 className="font-bold text-[#528bf2]">Regular Category</h4>
                      <p>Grades 9-10</p>
                    </div>
                    <div className="bg-[#252531] p-3 rounded-lg">
                      <h4 className="font-bold text-[#528bf2]">Advanced Category</h4>
                      <p>Grades 11-12</p>
                    </div>
                  </div>
                </>
              }
            />

            <FAQItem
              question="What happens to the participants who become finalists?"
              answer={
                <>
                  <p>The top 0.1-10% of each category will:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Advance to the 2nd round</li>
                    <li>Receive medals based on performance</li>
                    <li>Get special recognition certificates</li>
                  </ul>
                  <p className="mt-3">See the awards section for complete details about certificates and prizes.</p>
                </>
              }
            />

            <FAQItem
              question="Rounds and Timeline"
              answer={
                <>
                  <p className="font-medium text-white">Competition Timeline:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li><span className="font-medium">Registration closes:</span> July 31st</li>
                    <li><span className="font-medium">Trial round (optional):</span> August 2nd</li>
                    <li><span className="font-medium">1st Round:</span> August 8th</li>
                    <li><span className="font-medium">2nd Round:</span> August 22nd</li>
                    <li><span className="font-medium">Results announced:</span> August 31st</li>
                  </ul>

                  <p className="mt-4 font-medium text-white">Competition Format:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>All rounds occur between 2:00–3:00 PM (GMT+0)</li>
                    <li>Participants must start between 2:00–2:20 PM (GMT+0)</li>
                    <li>Submissions can be manual or automatic when time expires</li>
                  </ul>

                  <p className="mt-4 bg-[#252531] p-3 rounded-lg border-l-4 border-[#528bf2]">
                    <span className="font-bold">Note:</span> The trial round simulates the exact conditions of the first competitive round.
                  </p>
                </>
              }
            />
          </div>

        </div>
      </section>

      {/* Why Participate */}
      <section className="py-8 px-4 max-w-[1300px] mx-auto">
        <h3 className="font-semibold text-[#4380eb] text-center">WHY PARTICIPATE</h3>
        <p className="font-bold text-white text-[39px] mx-auto text-center  max-w-[950px]">IPhR competition provides an excellent experience to put your knowledge to the test.</p>
        <div className="grid md:grid-cols-2 gap-12 mt-4">
          <div className="bg-[#1a1a20] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10]">
            <h2 className="text-2xl font-bold text-[#4380eb] mb-4">Engage and Share Ideas with Peers Worldwide</h2>
            <p className="text-gray-300">
              The IPhR competition is a great place to meet, engage, and share ideas with peers from all around the world. This is particularly helpful for those pursuing physics-related studies. The competition offers a fun and supportive community with an opportunity to learn and grow.            </p>
          </div>
          <div className="bg-[#1a1a20] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10]">
            <h2 className="text-2xl font-bold text-[#4380eb] mb-4">Accredited by STEM Egypt</h2>
            <p className="text-gray-300">
              All participants in the IPhR competition will receive a participation certificate, accredited by STEM High School for Boys - 6th of October. This certificate is an official recognition of your participation in the competition.            </p>
          </div>
          <div className="bg-[#1a1a20] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10]">
            <h2 className="text-2xl font-bold text-[#4380eb] mb-4">Compete with Brilliant Minds from Around the Globe
            </h2>
            <p className="text-gray-300">We offer an excellent opportunity for students to put their knowledge to the test by competing with similar-minded peers globally. You will be challenged with physics problems that will stretch your intellectual capabilities and enhance critical and analytical thinking.

            </p>
          </div>
          <div className="bg-[#1a1a20] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10]">
            <h2 className="text-2xl font-bold text-[#4380eb] mb-4">Multiple Medals & Awards for Finalists
            </h2>
            <p className="text-gray-300">The IPhR competition rewards top performers with medals based on their placement in the final round. Gold, silver, and bronze medals are given according to a 1:2:3 ratio. Furthermore, top contestants receive awards from our partners, including research software and Olympiad training! This provides a great incentive to push yourself to your limits in the competition.

            </p>
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-8 px-4 max-w-[1300px] mx-auto text-center">
        <h3 className="font-semibold text-[#4380eb] text-center my-4">HELP OTHERS</h3>
        <span className="font-bold text-white text-[39px] mx-auto text-center my-4  max-w-[950px]">Ambassador Program</span>
        <p className="text-white my-4 text-[25px]">The Ambassador Program provides an excellent experience to put your leadership skills to the test.</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center py-4 px-6 rounded-md border-2 border-white text-white hover:bg-white/10 hover:border-[#528bf2] hover:text-[#528bf2] transition-all duration-300 font-medium text-lg w-full sm:max-w-[350px]"
          >
            View Details
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center py-4 px-6 rounded-md bg-gradient-to-r from-[#0042bf] to-[#0066ff] text-white hover:from-[#0066ff] hover:to-[#0042bf] transition-all duration-300 font-medium text-lg w-full sm:max-w-[350px] shadow-lg hover:shadow-xl"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Example Problems */}
      <section className="py-12 px-6 max-w-[1300px] mx-auto">
        <div className="mb-12">
          <h3 className="font-semibold text-[#4380eb] text-lg mb-4">EXAMPLE PROBLEMS</h3>
          <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-[39px] mx-auto  leading-tight">
            IPhR provides a diverse range of problem sets with varying levels of difficulty that cater to students of all levels.
          </h2>
          <p className="text-white mt-6 text-lg">
            Check out <Link href="/" className="text-[#4380eb] hover:underline font-medium">IPhR Question Archive</Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem 1 */}
          <div className="bg-[#1a1a20] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10] group">
            <div className="flex items-start mb-4">
              <div className="bg-[#4380eb] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
              <h3 className="text-xl text-white font-medium">Linear Momentum Units</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Which of the following is a valid measuring unit of linear momentum?
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">A</span>
                <span className="text-gray-300">kg·m·s⁻¹</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">B</span>
                <span className="text-gray-300">kg·m·s⁻²</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">C</span>
                <span className="text-gray-300">kg·m²·s⁻²</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">D</span>
                <span className="text-gray-300">kg·m²·s⁻³</span>
              </div>
            </div>

          </div>

          {/* Problem 2 */}
          <div className="bg-[#1a1a20] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10] group">
            <div className="flex items-start mb-4">
              <div className="bg-[#4380eb] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
              <h3 className="text-xl text-white font-medium">Electromagnetic Induction</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Imagine having a non-uniform magnetic field source near a coil. Which of the following would induce current in the coil?
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">A</span>
                <span className="text-gray-300">Moving the coil</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">B</span>
                <span className="text-gray-300">Increasing the magnetic field intensity</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">C</span>
                <span className="text-gray-300">Moving the magnetic field source</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">D</span>
                <span className="text-gray-300">All of the above</span>
              </div>
            </div>

          </div>

          {/* Problem 3 */}
          <div className="bg-[#1a1a20] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10] group">
            <div className="flex items-start mb-4">
              <div className="bg-[#4380eb] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
              <h3 className="text-xl text-white font-medium">Circular Motion</h3>
            </div>
            <p className="text-gray-300 mb-6">
              What force would you need to pull in a 100 g Yoyo with a 2 meter string in order to make it revolve once per second? Approximate your answer to the nearest decimal. Assume that gravity's effect vanished so that the Yoyo does not fall.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">A</span>
                <span className="text-gray-300">2.0 N</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">B</span>
                <span className="text-gray-300">3.9 N</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">C</span>
                <span className="text-gray-300">7.9 N</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">D</span>
                <span className="text-gray-300">18.8 N</span>
              </div>
            </div>

          </div>

          {/* Problem 4 */}
          <div className="bg-[#1a1a20] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-[#ffffff10] group">
            <div className="flex items-start mb-4">
              <div className="bg-[#4380eb] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">4</div>
              <h3 className="text-xl text-white font-medium">Energy Conversion</h3>
            </div>
            <p className="text-gray-300 mb-6">
              <span>
                {`A spring with a spring constant of \( k = 1000 \, \text{N / m} \) is connected to an object and is compressed by \( \Delta x = 0.1 \, \text{m} \). The object is let go, falling in a 1 L tank of \( 25^\circ \text{C} \) water and coming to rest. Assuming that the object doesn't lose any energy before falling in the tank, what is the final temperature of the water? (density of water = 1 kg/L, specific heat capacity of water = \( 4186 \, \text{J / kg}^\circ\text{C} \))`}
              </span>
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">A</span>
                <span className="text-gray-300">24.999°C</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">B</span>
                <span className="text-gray-300">25.001°C</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">C</span>
                <span className="text-gray-300">25.002°C</span>
              </div>
              <div className="flex items-start">
                <span className="bg-[#252531] text-white rounded-md w-6 h-6 flex items-center justify-center mr-3 mt-1">D</span>
                <span className="text-gray-300">26.000°C</span>
              </div>
            </div>

          </div>
        </div>
      </section>



      <Footer />
    </main>
  );
}