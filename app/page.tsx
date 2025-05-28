import Services from "@/components/services";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <section id="about-harscode" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-2">Tentang Harscode</h2>
            <p className="text-gray-700">
              Harscode adalah tempat belajar coding yang aman dan menyenangkan.
              Dibuat oleh developer, untuk developer yang pengen ngerti security
              — tanpa harus jadi hacker duluan.
            </p>
            <p className="text-gray-700">
              Kami percaya, developer bukan nggak peduli keamanan. Cuma belum
              dapet gaya belajar yang cocok.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              className="object-contain w-64 h-64 rounded"
              alt="Tentang Harscode"
              src="https://www.harscode.dev/images/about-harscode.png"
            />
          </div>
        </div>
      </section>
      <section id="about-harscode" className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <img
              className="object-contain w-64 h-64 rounded"
              alt="Tentang Harscode"
              src="https://www.harscode.dev/images/about-harscode.png"
            />
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-2">Tentang Harscode</h2>
            <p className="text-gray-700">
              Harscode adalah tempat belajar coding yang aman dan menyenangkan.
              Dibuat oleh developer, untuk developer yang pengen ngerti security
              — tanpa harus jadi hacker duluan.
            </p>
            <p className="text-gray-700">
              Kami percaya, developer bukan nggak peduli keamanan. Cuma belum
              dapet gaya belajar yang cocok.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
}
