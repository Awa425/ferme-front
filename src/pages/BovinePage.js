import React from 'react'
import { Footer, Navbar, Submenu, Sidebar, Hero2, Scroll } from '../components';
import img10 from "../assets/10.png";

const BovinePage = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Hero2 title="Description de la maladie" />
            <Submenu />
            <Scroll showBelow={250} />
            <section >
                <div class="disease-center">
                    <article class="disease-title">
                        <h2>Information sur la maladie</h2>
                    </article>
                    <article class="disease-desc">
                        <p>Le syndrome dysgénésique et respiratoire porcin (SDRP) est une maladie virale
                            spécifique des porcins qui se caractérise par des troubles de la reproduction chez les
                            truies gestantes ainsi que des problèmes respiratoires et des retards de croissance chez
                            les porcs charcutiers. La sévérité des symptômes peut varier considérablement selon la
                            virulence de la souche de virus du SDRP (SDRPV) : souches faiblement pathogènes
                            présentes notamment en France ou au contraire souches hautement pathogènes
                            retrouvées en Asie. Le SDRPV, dont les principales cellules cibles sont les macrophages
                            alvéolaires, a la capacité de manipuler le système immunitaire de son hôte ce qui
                            conduit à une infection persistante et prédispose les animaux infectés par le SDRPV aux
                            co-infections virales et bactériennes.</p>
                    </article>
                    <article class="disease-img">
                        <img src={img10} alt="" class="img" />
                    </article>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BovinePage
