import Image from 'next/image';
import AboutPhoto from '../public/about.png';

export default function About() {
  return (
    <section id="about-harscode" className="py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center">
          <Image
            className="object-contain w-64 h-64 rounded"
            alt="Tentang Harscode"
            src={AboutPhoto.src}
            width={512}
            height={512}
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-2">About ki.dev</h2>
          <p className='justify-between'>
            Welcome to my portfolio website! Here, I showcase my projects, skills, and experiences as a web developer passionate about building modern, user-friendly applications.
          </p>
          <p>
            Explore my work, learn more about my background, and feel free to get in touch if you like to collaborate or discuss new opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
