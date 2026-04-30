import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const NannyCourseUses = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#19125e] mb-6 leading-tight">
              About the <span className="text-[#f0c44c]">Nanny Training</span> Program
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Nanny Training Program is a specialized vocational course designed to bridge the gap between 
                casual childcare and professional caregiving. Whether you are looking to start a career locally 
                or seeking opportunities in countries like Canada, UK, or Australia, this course provides 
                the theoretical and practical foundation required.
              </p>
              <p>
                The curriculum is meticulously crafted to cover every aspect of a child's life—from their 
                physical safety and nutritional needs to their emotional and psychological development. 
                You will learn to manage daily routines, handle emergencies, and foster an environment 
                where children can thrive.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-[#f7f8fc] rounded-2xl border-l-4 border-[#f0c44c]">
              <p className="text-[#19125e] font-medium italic">
                "We don't just train nannies; we build professional caregivers who become an 
                essential part of a child's success story."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-[#19125e] p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0c44c]/10 rounded-full -mr-10 -mt-10 blur-2xl" />
              
              <h3 className="text-2xl font-bold text-white mb-8">
                Why Enrolling is a Smart Move:
              </h3>
              
              <ul className="space-y-6">
                {[
                  { title: "Legal & Visa Compliance", desc: "Many countries require formal training certificates to approve caregiver work permits." },
                  { title: "Immediate Skill Recognition", desc: "A diploma instantly validates your expertise to high-profile agencies and parents." },
                  { title: "Higher Earning Bracket", desc: "Certified professionals earn 40-60% more than untrained childcare workers." },
                  { title: "Crisis Management", desc: "Gain the confidence to handle medical emergencies, ensuring child safety at all times." },
                  { title: "Holistic Development", desc: "Learn to move beyond 'babysitting' by providing structured educational and social activities." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#f0c44c] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NannyCourseUses;