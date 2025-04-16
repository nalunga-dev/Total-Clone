export default function Hero() {
  return (
    <section className="relative experienceSection max-w-9xl h-[677px] md:h-[735px] mb-0 mx-auto py-2 px-8 md:px-8 md:mb-0 overflow-hidden">
      <div className="absolute h-auto inset-0 z-0">
        <div className="w-full h-full bg-[url('https://img.freepik.com/premium-photo/high-angle-view-electric-lamp-table_1048944-12411815.jpg?ga=GA1.1.1231290701.1738956793&semt=ais_hybrid&w=740')] bg-cover bg-center" />
      </div>

      <div className="relative z-30 flex flex-col lg:flex-row items-center gap-8">
        <div className="content w-full mt-0 sm:mt-28 lg:w-1/2">
          <div className="flex flex-col gap-5">
            <div className="flex gap-8 items-start mb-4">
              <div>
                <h2 className="font-script text-3xl pt-6 leading-tight">
                  Powering Progress, Every Day
                </h2>
                <h1 className="text-5xl font-bold pt-6 leading-none">
                  TotalEnergies at the <br /> heart of innovation <br /> and
                  sustainability
                </h1>
                <p className="text-2xl font-bold pt-6 leading-none">
                  Delivering reliable energy solutions that drive your world
                  forward.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="text-white font-medium px-5 py-3 rounded-full text-center bg-[#FF0000]"
              >
                View all our services
              </a>
              <a
                href="#"
                className="text-white font-medium px-8 py-3 rounded-full text-center bg-[#FDB813] hover:bg-opacity-90 transition-colors"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
