import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SharedJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-green-50 py-12 px-6 max-w-5xl mx-auto rounded-xl shadow-md mb-3">
      <h2
        className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8"
        data-aos="fade-down"
      >
        Shared Journey of Growth
      </h2>

      <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
        <p data-aos="fade-up">
          In a quiet village, nestled under the sun’s watchful gaze, a woman kneels in the soil.
          Her hands—strong from years of perseverance—cradle a young sapling. This isn’t just a tree;
          it’s a symbol of hope for her family and her community.
        </p>

        <p data-aos="fade-up" data-aos-delay="100">
          Through the simple act of planting, she is rewriting her story. The sapling will grow into
          a fruit tree, providing sustenance for her children and an income to secure their
          education. Medicinal plants will flourish nearby, bringing health and healing, while cash
          crops promise a pathway to financial independence.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          This transformation begins with partnership—yours and ours.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          When you join our mission, you become part of her story, offering the resources she needs
          to build a sustainable livelihood. It’s not just about trees; it’s about empowering women
          to rise with dignity and resilience, to nurture both the earth and their communities.
        </p>

        <p data-aos="fade-up" data-aos-delay="400">
          Your support makes this possible. It allows a mother to send her children to school, a
          daughter to dream bigger, and a village to thrive!
        </p>
      </div>
    </section>
  );
};

export default SharedJourney;
