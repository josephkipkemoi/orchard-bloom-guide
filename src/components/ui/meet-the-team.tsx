import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: 'Susan Rodrigues',
    role: 'MD/Founder',
    bio: 'Passionate about empowering women through sustainable agriculture and community-led innovation.',
    image: 'https://i.ibb.co/Ld0bq9jP/IMG-20240824-WA0023.jpg',
  },
  {
    name: 'Richie Fernandez',
    role: 'Operations Director',
    bio: 'Expert in regenerative farming and green technologies tailored for rural communities.',
    image: 'https://i.ibb.co/tTg9T8t1/Whats-App-Image-2024-12-11-at-12-34-52-PM.jpg',
  },
  {
    name: 'Kevin Kariuki',
    role: 'Logistics Manager',
    bio: 'Bridge between local voices and strategic planning, ensuring every woman is heard.',
    image: 'https://i.ibb.co/GQ9fNj6k/Kevin.jpg',
  },
];

const MeetTheTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section style={{ borderTopRightRadius: "72px", borderBottomLeftRadius: "72px" }} className="bg-green-700 py-12 px-12 max-w-7xl mx-auto mb-6 mt-6">
      <h2 style={{ color: "white" }} className="text-3xl font-bold text-center mb-10 font-bold" data-aos="fade-down">
        Meet the Team
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{ borderRadius: "72px" }}
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
            <hr style={{ color: "gray", marginTop: "18px", marginBottom: "24px" }} />
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
