import {Html, } from '@react-three/drei' 

const Portfolio = () => {

    return  <Html
        transform 
        wrapperClass='htmlScreen'
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
    >
        {/* <iframe src="https://bruno-simon.com/html/" /> */}
        <div className='main'> 
        <div className="container">
            <header>
                <h1>Laura Aviñó</h1>
                <p> Theoretical Biologist | Developer | User Experience and Interaction Designer</p>
            </header>

            <section className="contact-info">
                <h2>Contact</h2>
                <p>Email: <span className="email"><a href="mailto:lauraavinyoesteban@gmail.com">lauraavinyoesteban@gmail.com</a></span></p>
                <p>Mobile: +34 697 40 22 88</p>
            </section>


            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <strong>Predoctoral Fellow</strong> - EMBL, Barcelona, Spain (Sep 2022 - Present)
                        Data Analysis and Limb Development Modeling
                    </li>
                    <li>
                        <strong>Intern Researcher</strong> - EMBL, Barcelona, Spain (Feb 2022 - Jul 2020)
                        Web App Design for Limb Development
                    </li>
                    <li>
                        <strong>Software Developer</strong> - Amalfi Analytics, Barcelona, Spain (Jul 2019 - Dec 2021)
                        Software Development and Data Science for Hospital Management
                    </li>
                </ul>
            </section>

            <section className="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>Master's Degree in User Experience and Interaction Design</strong>
                        Universitat Oberta de Catalunya, Catalonia, Spain (2020 - 2022)
                    </li>
                    <li>
                        <strong>Master's Degree in Physics of Complex Systems</strong>
                        IFISC - UIB, Palma de Mallorca, Spain; GPA: 3.26 (2019 - 2020)
                    </li>
                    <li>
                        <strong>Bachelor's Degree in Bioinformatics</strong>
                        ESCI-UPF (UPC, UPF and UB), Barcelona, Spain; GPA: 3.73 (2016 - 2019)
                    </li>
                </ul>
            </section>



            <section className="publications">
                <h2>Publications</h2>
                <ul>
                    <li>
                        <strong>HypercubeME: two hundred million combinatorially complete datasets from a single experiment</strong>
                        <em>Bioinformatics, November 2019</em> - <span className="publication-link"><a href="https://doi.org/10.1093/bioinformatics/btz841" target="_blank">Read more</a></span>
                    </li>
                    <li>
                        <strong>Generating Synthetic but Plausible Healthcare Record Datasets</strong>
                        <em>In Proceedings of 2018 KDD workshop on Machine Learning for Medicine and Healthcare, London, UK, August 2018</em> - <span className="publication-link"><a href="https://arxiv.org/abs/1807.01514" target="_blank">Read more</a></span>
                    </li>
                </ul>
            </section>

            <section className="conferences">
                <h2>Conferences</h2>
                <ul>
                    <li>
                        <strong>European Evo Devo</strong>, Helsinki, Finland (June 2024)
                        Invited speaker
                    </li>
                    <li>
                        <strong>Limb Conference</strong>, Harvard University, Boston, USA (August 2022)
                    </li>
                    <li>
                        <strong>Machine Learning for Medicine and Healthcare</strong>, London, UK (August 2018)
                        Poster Presentation at KDD Workshop
                    </li>
                </ul>
            </section>

            <section className="teaching">
                <h2>Teaching Experience</h2>
                <ul>
                    <li>
                        <strong>Project Leader</strong> - School of Molecular and Theoretical Biology, Yerevan, Armenia (August 2023)
                        Lab Head and Teacher in User Experience Design
                    </li>
                    <li>
                        <strong>Teacher</strong> - EBMO course: Computational Modelling of Multicellular Systems, Barcelona, Spain (June 2023)
                        Module Instructor for 3D Objects Visualization and Analysis
                    </li>
                    <li>
                        <strong>Lab Faculty</strong> - School of Molecular and Theoretical Biology, Various Locations (2017 - 2019)
                        Various roles including Teaching Assistant and Instructor in Bioinformatics
                    </li>
                </ul>
            </section> 
        </div>


        </div>
    </Html>
}

export default Portfolio