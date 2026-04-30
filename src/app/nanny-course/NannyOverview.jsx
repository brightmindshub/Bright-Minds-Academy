import { motion } from 'framer-motion';
import { BookOpen, Award, Heart, Globe, ShieldCheck, Users } from 'lucide-react';

const NannyOverview = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-[#f0c44c]" />,
      title: "Comprehensive Curriculum",
      description: "Covers infant care, nutrition, hygiene, and developmental milestones based on international standards."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#f0c44c]" />,
      title: "First Aid & CPR",
      description: "Hands-on emergency response training to ensure the safety of children in your care."
    },
    {
      icon: <Award className="w-8 h-8 text-[#f0c44c]" />,
      title: "Global Certification",
      description: "Get an INA-certified diploma recognized in Canada, UK, Australia, and Middle East countries."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#f0c44c]" />,
      title: "Child Psychology",
      description: "Understand behavioral patterns and learn positive reinforcement techniques for healthy growth."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#f0c44c]" />,
      title: "Visa Guidance",
      description: "Dedicated support for documentation and interview preparation for work permits abroad."
    },
    {
      icon: <Users className="w-8 h-8 text-[#f0c44c]" />,
      title: "1:1 Mentorship",
      description: "Learn from experienced educators who provide personalized feedback on your progress."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#19125e]"
          >
            Why Choose Our <span className="text-[#f0c44c]">Nanny Training</span>?
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#f0c44c] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Our program is designed to transform passionate individuals into professional caregivers 
            equipped with the skills needed for high-paying roles globally.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#f7f8fc] rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#19125e] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NannyOverview;