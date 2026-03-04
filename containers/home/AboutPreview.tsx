import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const AboutPreview = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full bg-white">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">

                {/* Left — Text */}
                <FadeIn direction="left" className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-10">
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-black leading-[1.1] mb-6 tracking-tight">
                        We Are Engineering<br />
                        Future Leader.
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                        Dibentuk pada tahun 2015, INDOCOR ITS Student Chapter hadir
                        sebagai perpanjangan tangan organisasi di lingkungan
                        akademis Institut Teknologi Sepuluh Nopember. Wadah ini
                        didedikasikan bagi mahasiswa untuk mengembangkan
                        diri, menjunjung nilai profesionalisme, dan membangun
                        kompetensi teknis.
                    </p>
                    <Link
                        href="/about"
                        className="inline-block bg-[#9D0808] hover:bg-red-800 text-white font-medium py-3.5 px-8 rounded-[20px] transition-colors"
                    >
                        More About Us
                    </Link>
                </FadeIn>

                {/* Right — Images */}
                <FadeIn direction="right" delay={0.15} className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] flex justify-center items-center mt-10 lg:mt-0">
                    <div className="absolute top-0 right-[20%] w-[60%] sm:w-[50%] h-[70%] overflow-hidden shadow-lg">
                        <Image
                            src="/images/landing-page/about.png"
                            alt="INDOCOR ITS Activities 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-[60%] w-[60%] sm:w-[50%] h-[70%] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/landing-page/about.png"
                            alt="INDOCOR ITS Activities 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
