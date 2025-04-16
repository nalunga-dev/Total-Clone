export default function KeyFigures() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-4xl font-bold text-stone-800 mb-8">
        Key Figures
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 pb-0">
            <h3 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
              718,900,000
            </h3>
            <p className="text-3xl font-bold text-blue-500 mb-4">USD</p>
            <p className="text-sm text-stone-700 mb-8">
              <span className="text-stone-800">
                Worth of procurements awarded to{" "}
              </span>
              <span className="font-semibold">Ugandan Companies</span>
            </p>
          </div>
          <div className="h-2 bg-blue-500 rounded-b-xl" />
        </div>

      
        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 pb-0">
            <h3 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              400+
            </h3>
            <p className="text-3xl font-bold text-green-600 mb-4">Employees</p>
            <p className="text-sm text-stone-700 mb-8">
              Supporting operations across{" "}
              <span className="font-semibold">Uganda</span> with skill and
              expertise.
            </p>
          </div>
          <div className="h-2 bg-green-600 rounded-b-xl" />
        </div>

        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 pb-0">
            <h3 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
              200+
            </h3>
            <p className="text-3xl font-bold text-red-500 mb-4">
              Fuel Stations
            </p>
            <p className="text-sm text-stone-700 mb-8">
              Located nationwide to ensure{" "}
              <span className="font-semibold">energy accessibility</span>.
            </p>
          </div>
          <div className="h-2 bg-red-500 rounded-b-xl" />
        </div>

        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 pb-0">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
              2.5M+
            </h3>
            <p className="text-3xl font-bold text-yellow-500 mb-4">Customers</p>
            <p className="text-sm text-stone-700 mb-8">
              Trust TotalEnergies for{" "}
              <span className="font-semibold">
                clean, reliable fuel solutions
              </span>
              .
            </p>
          </div>
          <div className="h-2 bg-yellow-500 rounded-b-xl" />
        </div>

        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 pb-0">
            <h3 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              100+
            </h3>
            <p className="text-3xl font-bold text-purple-600 mb-4">
              CSR Projects
            </p>
            <p className="text-sm text-stone-700 mb-8">
              Making an impact in{" "}
              <span className="font-semibold">
                health, education & environment
              </span>
              .
            </p>
          </div>
          <div className="h-2 bg-purple-600 rounded-b-xl" />
        </div>

        <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 pb-0">
            <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
              Net Zero
            </h3>
            <p className="text-3xl font-bold text-indigo-600 mb-4">by 2050</p>
            <p className="text-sm text-stone-700 mb-8">
              TotalEnergies is committed to{" "}
              <span className="font-semibold">
                sustainable energy solutions
              </span>
              .
            </p>
          </div>
          <div className="h-2 bg-indigo-600 rounded-b-xl" />
        </div>
      </div>
    </div>
  );
}
