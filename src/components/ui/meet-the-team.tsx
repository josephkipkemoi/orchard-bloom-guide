import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: 'Susan Rodrigues',
    role: 'MD/Founder',
    bio: 'Passionate about empowering women through sustainable agriculture and community-led innovation.',
    image: '/images/amina.jpg',
  },
  {
    name: 'Richie Fernandez',
    role: 'Operations Director',
    bio: 'Expert in regenerative farming and green technologies tailored for rural communities.',
    image: '/images/david.jpg',
  },
  {
    name: 'Kevin Kariuki',
    role: 'Logistics Manager',
    bio: 'Bridge between local voices and strategic planning, ensuring every woman is heard.',
    image: '/images/fatuma.jpg',
  },
];

const MeetTheTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10" data-aos="fade-down">
        Meet the Team
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg shadow-md p-6 text-center"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
