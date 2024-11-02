import Image from "next/image";

export default function Whychooseus() {
  return (
    <section className="py-24 bg-[#282b30] rounded-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse  items-start gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2 mt-3">
            <div className="lg:max-w-xl flex flex-col ">
              <div className="border-y-[1px] border-zinc-500 flex justify-center items-center gap-[10%] py-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#f1ca4b]">
                  01
                </h1>
                <div className="flex flex-col space-y-3">
                  <h1 className="text-2xl md:text-3xl font-semibold text-white">
                    Professional Staff
                  </h1>
                  <p className="text-md text-gray-100 font-semibold">
                    Our team is composed of certified, experienced, and highly
                    skilled electricians. They approach each job with
                    dedication, ensuring both safety and quality in every
                    project.
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-zinc-500 flex justify-center items-center gap-[10%] py-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#f1ca4b]">
                  02
                </h1>
                <div className="flex flex-col space-y-3">
                  <h1 className="text-2xl md:text-3xl font-semibold text-white">
                    Commitment to Safety
                  </h1>
                  <p className="text-md text-gray-100 font-semibold">
                    We prioritize safety in every project. All work is done
                    following strict safety protocols, providing peace of mind
                    to our customers
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-zinc-500 flex justify-center items-center gap-[10%] py-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#f1ca4b]">
                  03
                </h1>
                <div className="flex flex-col space-y-3">
                  <h1 className="text-2xl md:text-3xl font-semibold text-white">
                    Competitive Pricing
                  </h1>
                  <p className="text-md text-gray-100 font-semibold">
                    We offer transparent pricing with no hidden fees, providing
                    top-quality services that fit your budget.
                  </p>
                </div>
              </div>
              <div className="border-b-[1px] border-zinc-500 flex justify-center items-center gap-[10%] py-10">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#f1ca4b]">
                  04
                </h1>
                <div className="flex flex-col space-y-3">
                  <h1 className="text-2xl md:text-3xl font-semibold text-white">
                    Innovative Solutions
                  </h1>
                  <p className="text-md text-gray-100 font-semibold">
                    We offer smart systems and energy-efficient options to
                    enhance your home and reduce costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-md px-4 py-1 border-[1px] border-gray-200 text-white w-fit my-3 font-semibold rounded-full">
              Why Choose Us
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-medium xl:leading-[1.2] my-8">
              Quality Service, The Positive Way
            </h1>
            <Image
              src="/human.png"
              width={500}
              height={500}
              alt="FAQ section"
              className="aspect-[1/1] rounded-xl object-cover mb-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
