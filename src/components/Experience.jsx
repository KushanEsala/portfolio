import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Tech Solutions Inc.',
        period: '2023 - Present',
        description: 'Developing scalable web applications using React and Node.js. Optimized database queries improving performance by 30%.',
    },
    {
        id: 2,
        title: 'Junior Developer',
        company: 'Digital Creative Agency',
        period: '2021 - 2023',
        description: 'Collaborated with the design team to implement responsive UIs. Built RESTful APIs for client projects.',
    },
    {
        id: 3,
        title: 'Intern',
        company: 'StartUp Hub',
        period: '2020 - 2021',
        description: 'Assisted in frontend development and bug fixing. Learned agile methodologies and version control.',
    },
]

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    Professional Experience
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/50"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                } items-center w-full`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full z-10 hidden md:block"></div>

                            {/* Content */}
                            <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                                <div className={`p-6 glass rounded-xl shadow-lg hover:shadow-primary/10 transition-shadow duration-300 ${index % 2 === 1 ? 'md:ml-12 md:text-left' : 'md:mr-12'}`}>
                                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <Briefcase className="w-5 h-5 text-primary" />
                                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                                    </div>
                                    <h4 className="text-lg font-semibold text-secondary mb-3">{exp.company}</h4>
                                    <div className={`flex items-center gap-2 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Placeholder for the other side (empty) */}
                            <div className="w-full md:w-1/2"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
