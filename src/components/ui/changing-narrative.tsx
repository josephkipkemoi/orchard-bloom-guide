 

const ChangingNarrative = () => {
  return (
   <section className="max-w-5xl mx-auto bg-green-50 rounded-xl shadow-md p-6 md:flex md:gap-8">
      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center rounded-lg"
        role="img"
        aria-label="Woman planting seedling with assistance"
      ></div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Changing the Narrative</h2>
        <p className="text-gray-800 mb-3">
          From time immemorial, women in every societal setting have shared a common struggle—
          living in a patriarchal society that favors the superiority/inferiority complex—denying
          them the very right of ownership, opportunities and equity of resource distribution.
        </p>
        <p className="text-gray-800 mb-3">
          This has led them to seek alternative ways of surviving in a rather ‘cruel’ world, some
          of which have taken their very dignity.
        </p>
        <p className="text-gray-900 font-medium">
          <span className="font-bold text-green-800">Revitalize</span> aims to provide such women
          with green, sustainable agricultural solutions, that will generate income and provide
          financial independence to nurture themselves and their families.
        </p>
      </div>
    </section>
  );
};

export default ChangingNarrative;
