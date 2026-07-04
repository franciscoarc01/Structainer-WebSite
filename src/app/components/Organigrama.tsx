import React from 'react';
import colAlexDel from "@/assets/img/nosotros/colaboradores/Alex-Delgado.webp"
import colArturo from "@/assets/img/nosotros/colaboradores/Arturo.webp"
import colEduNava from "@/assets/img/nosotros/colaboradores/Eduardo-Nava.webp"
import colFlor from "@/assets/img/nosotros/colaboradores/Flor.webp"
import colHilde from "@/assets/img/nosotros/colaboradores/Hilde.webp"
import colJesusEst from "@/assets/img/nosotros/colaboradores/Jesus-Estrada.webp"
import colJulio from "@/assets/img/nosotros/colaboradores/Julio-Cesar.webp"
import colPaula from "@/assets/img/nosotros/colaboradores/Paula.webp"
import colMarcoMen from "@/assets/img/nosotros/colaboradores/Marco-Mendoza.webp"
import colMarioPedroza from "@/assets/img/nosotros/colaboradores/Mario-Pedroza.webp"
import colJaviSainz from "@/assets/img/nosotros/colaboradores/Javier-Sainz.webp"
import colGenaro from "@/assets/img/nosotros/colaboradores/Genaro-Herndz.webp"
import colPaola from "@/assets/img/nosotros/colaboradores/Paola-Herndz.webp"
import colKaren from "@/assets/img/nosotros/colaboradores/Karen-Fuentes.webp"
import colRiHernz from "@/assets/img/nosotros/colaboradores/Ricardo-Herndz.webp"
import colEduLopz from "@/assets/img/nosotros/colaboradores/Eduardo-Lechuga.webp"
import colIvette from "@/assets/img/nosotros/colaboradores/Ivette.webp"
import colJaqueline from "@/assets/img/nosotros/colaboradores/Jaqueline-Parra.webp"
import colMarcoHerndz from "@/assets/img/nosotros/colaboradores/Marco-Herndz.webp"
import colMauricioGtz from "@/assets/img/nosotros/colaboradores/Mauricio-Gutierrez.webp"
import colWilbert from "@/assets/img/nosotros/colaboradores/Wilbert.webp"
import colVictorHugo from "@/assets/img/nosotros/colaboradores/Victor-Hugo.webp"
import colMauricioGzlez from "@/assets/img/nosotros/colaboradores/Mauricio-Gzlez.webp"
import colMaDelCarmen from "@/assets/img/nosotros/colaboradores/Ma-Del-Carmen.webp"
import colSistemas from "@/assets/img/nosotros/colaboradores/ChatGPT-Image-3-jul-2026_04-57-21pm.webp"

export const Organigrama: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const imgCol = {
        colAlexDel,
        colArturo,
        colEduNava,
        colFlor,
        colHilde,
        colJesusEst,
        colJulio,
        colPaula,
        colMarcoMen,
        colMarioPedroza,
        colJaviSainz,
        colGenaro,
        colPaola,
        colKaren,
        colRiHernz,
        colEduLopz,
        colIvette,
        colJaqueline,
        colMarcoHerndz,
        colMauricioGtz,
        colWilbert,
        colVictorHugo,
        colMauricioGzlez,
        colMaDelCarmen,
        colSistemas
    }

    React.useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = (containerRef.current.scrollWidth - 0.7 * containerRef.current.scrollWidth) / 2;
            containerRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, []);

    return (
        <section>
            <h2 className='text-center pb-[2vmin]'>Organigrama</h2>
            <section className='bg-gray-200 py-[4%]'>
                <section className='bg-[var(--brand-gold-light)] rounded-lg border-2 border-gray-400 p-[1rem] h-fit w-fit mx-auto relative'>
                    <h2 className="text-[17pt] font-medium text-gray-600 text-center mb-[2vmin] sticky top-10 z-30">Construcción</h2>
                    <section className='flex flex-row gap-[1rem]'>
                        <div className='flex flex-col items-center relative'>
                            <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit sticky top-20'>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                    <h4 className='mx-[0.5rem] p-[0.5rem]'>Superintendente de Obra</h4>
                                    <img src={imgCol.colArturo} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Arturo Martínez</h3>
                                </div>
                            </div>
                        </div>
                        <section>
                            <section className='flex flex-row gap-[1rem] mb-[1rem]'>
                                <div className='flex flex-col items-center relative'>
                                    <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit w-[17em] sticky top-20'>
                                        <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                            <h4 className='mx-[0.5rem] p-[0.5rem]'>Residente de obra</h4>
                                            <img src={imgCol.colEduNava} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                            <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Eduardo Nava</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full bg-[var(--brand-blue-corporate)] rounded-md p-[1rem]">
                                    <h4 className='text-[var(--brand-gold-technical)] text-center mb-[1vmin]'>Supervisores</h4>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm mb-[1rem]'>
                                        <img src={imgCol.colEduLopz} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Arq. J. Eduardo López</h3>
                                    </div>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm mb-[1rem]'>
                                        <img src={imgCol.colAlexDel} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Ing. Alejandro Delgado</h3>
                                    </div>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm mb-[1rem]'>
                                        <img src={imgCol.colWilbert} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Ing. Wilbert Roldán</h3>
                                    </div>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm h-stretch'>
                                        <img src={imgCol.colMauricioGtz} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Ing. Mauricio Gutiérrez</h3>
                                    </div>
                                </div>
                            </section>
                            <section className='flex flex-row gap-[1rem] mb-[1rem]'>
                                <div className='flex flex-col items-center relative'>
                                    <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit w-[17em] sticky top-20'>
                                        <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                            <h4 className='mx-[0.5rem] p-[0.5rem]'>Diseño</h4>
                                            <img src={imgCol.colGenaro} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                            <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Genaro Hernández</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-auto bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] w-stretch flex flex-col ">
                                    <h4 className='text-[var(--brand-gold-technical)] text-center mb-[1vmin]'>Auxiliar de Diseño</h4>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm h-stretch flex items-center justify-center flex-col'>
                                        <img src={imgCol.colJulio} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Ing. Julio Sánchez</h3>
                                    </div>
                                </div>
                            </section>
                            <section className='flex flex-row gap-[1rem] mb-[1rem]'>
                                <div className='flex flex-col items-center relative'>
                                    <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit w-[17em] sticky top-20'>
                                        <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                            <h4 className='mx-[0.5rem] p-[0.5rem]'>Líder de calidad</h4>
                                            <img src={imgCol.colMarcoMen} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                            <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Marco Mendoza</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] w-stretch">
                                    <h4 className='text-[var(--brand-gold-technical)] text-center mb-[1vmin]'>Supervisores de calidad</h4>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm h-stretch mb-[1rem]'>
                                        <img src={imgCol.colPaola} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Ing. Paola Hernández</h3>
                                    </div>
                                    <div className='text-center py-[2vmin] bg-[var(--brand-gray-neutral)] rounded-sm h-stretch'>
                                        <img src={imgCol.colKaren} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                        <h3>Lic. Karen L. Fuentes</h3>
                                    </div>
                                </div>
                            </section>
                            <section className='flex flex-row gap-[1rem] mb-[1rem]'>
                                <div className='flex flex-col items-center relative'>
                                    <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit w-[17em] sticky top-20'>
                                        <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                            <h4 className='mx-[0.5rem] p-[0.5rem]'>Taller</h4>
                                            <img src={imgCol.colMarcoHerndz} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                            <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Marco A. Hernández</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] w-stretch flex flex-col justify-center">
                                    <div className='text-center pb-[2vmin] bg-[var(--brand-blue-corporate)] rounded-md p-[1rem]'>
                                        <h4 className='text-[var(--brand-gold-technical)]'>Operativos</h4>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
                <section className='bg-[var(--brand-gold-light)] rounded-lg border-2 border-gray-400 p-[1rem] h-fit w-fit mx-auto mt-[2rem]'>
                    <h2 className="text-[17pt] font-medium text-gray-600 text-center mb-[2vmin]">Seguridad</h2>
                    <section className='flex flex-row gap-[1rem]'>
                        <div className='flex flex-col items-center relative'>
                            <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit sticky top-20 w-[327px]'>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                    <h4 className='mx-[0.5rem] p-[0.5rem]'>Gerente de Seguridad</h4>
                                    <img src={imgCol.colRiHernz} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Ricardo J. Hernández</h3>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center relative'>
                            <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit sticky top-20 w-[17em]'>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                    <h4 className='mx-[0.5rem] p-[0.5rem]'>Coordinador de Seguridad</h4>
                                    <img src={imgCol.colVictorHugo} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Víctor H. Martínez</h3>
                                </div>
                            </div>
                        </div>
                        <div className='w-[14.4em]'>
                            <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit mb-[1rem]'>
                                <h4 className='text-[var(--brand-gold-technical)] text-center mb-[1vmin]'>Supervisores</h4>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm mb-[1rem]'>
                                    <img src={imgCol.colMaDelCarmen} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Maria del Carmen Guzmán</h3>
                                </div>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm mb-[1rem]'>
                                    <img src={imgCol.colJesusEst} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Jesús González</h3>
                                </div>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                    <img src={imgCol.colMauricioGzlez} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Mauricio González</h3>
                                </div>
                            </div>
                            <div className='bg-[var(--brand-blue-corporate)] rounded-md p-[1rem] h-fit'>
                                <h4 className='text-[var(--brand-gold-technical)] text-center mb-[1vmin]'>Control Documental</h4>
                                <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                    <img src={imgCol.colPaula} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                    <h3 className='mx-[0.5rem] p-[0.5rem]'>Ing. Paula A. Castillo</h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className='bg-[var(--brand-gold-light)] rounded-lg border-2 border-gray-400 p-[1rem] h-fit w-[53.7em] mx-auto mt-[2rem]'>
                    <h2 className="text-[17pt] font-medium text-gray-600 text-center mb-[2vmin]">Equipo Administrativo</h2>
                    <section className='grid grid-cols-2 grid-rows-3 gap-[1rem]'>
                        <div className="flex flex-col items-center bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 h-fit p-[1rem]">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[17pt] font-medium text-[var(--brand-gold-light)] text-center mb-[2vmin]">Recursos Humanos</h2>
                            </div>
                            <div className="flex flex-col items-center bg-[var(--brand-gray-neutral)] p-[10pt] rounded-sm">
                                <div className='text-center'>
                                    <img src={imgCol.colFlor} alt="" className='w-[5rem] block mx-auto rounded-full mb-[10%]' />
                                    <h3 className='mx-[0.5rem] rounded-sm'>Lic. Flor Romero</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 h-fit p-[1rem]">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[17pt] font-medium text-[var(--brand-gold-light)] text-center mb-[2vmin]">Ventas y Cotizaciones</h2>
                            </div>
                            <div className="flex flex-col items-center bg-[var(--brand-gray-neutral)] p-[10pt] rounded-sm">
                                <div className='text-center'>
                                    <img src={imgCol.colJaviSainz} alt="" className='w-[5rem] block mx-auto rounded-full mb-[10%]' />
                                    <h3 className='bg-[var(--brand-gray-neutral)] mx-[0.5rem] rounded-sm'>Arq. Javier Sainz</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 h-fit p-[1rem]">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[17pt] font-medium text-[var(--brand-gold-light)] text-center mb-[2vmin]">Marketing</h2>
                            </div>
                            <div className='text-center bg-[var(--brand-gray-neutral)] p-[10pt] rounded-sm'>
                                <img src={imgCol.colJaqueline} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                <h3 className='mx-[0.5rem]'>Lic. Jacqueline Parra</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 h-fit p-[1rem]">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[17pt] font-medium text-[var(--brand-gold-light)] text-center mb-[2vmin]">Contabilidad</h2>
                            </div>
                            <div className='text-center bg-[var(--brand-gray-neutral)] p-[10pt] rounded-sm'>
                                <img src={imgCol.colIvette} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                <h3 className='mx-[0.5rem]'>Ing. Ivette Vázquez</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 h-fit p-[1rem]">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[17pt] font-medium text-[var(--brand-gold-light)] text-center mb-[2vmin]">Compras</h2>
                            </div>
                            <div className='text-center bg-[var(--brand-gray-neutral)] p-[10pt] rounded-sm'>
                                <img src={imgCol.colMarioPedroza} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                <h3 className='mx-[0.5rem]'>Lic. Mario Pedroza</h3>
                            </div>
                        </div>
                        <div className="flex flex-col items-center bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 h-fit p-[1rem]">
                            <div className="flex flex-col items-center">
                                <h2 className="text-[17pt] font-medium text-[var(--brand-gold-light)] text-center mb-[2vmin]">Administración y Control de Obra</h2>
                            </div>
                            <div className='text-center bg-[var(--brand-gray-neutral)] p-[10pt] rounded-sm'>
                                <img src={imgCol.colHilde} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                <h3 className='mx-[0.5rem]'>Ing. Hildebrand Solís</h3>
                            </div>
                        </div>
                    </section>
                </section>

                <div className="flex flex-col items-center bg-[var(--brand-gold-light)] rounded-lg border-2 border-gray-400 h-fit w-[53.7em] p-[1rem] mx-auto mt-[2rem]">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[17pt] font-medium text-gray-600 text-center mb-[2vmin]">Sistemas</h2>
                    </div>
                    <div className='flex flex-row items-center gap-[2vmin] w-stretch'>
                        <div className='bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 p-[1rem]'>
                            <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                <h3 className='mx-[0.5rem]'>Ing. Alan</h3>
                            </div>
                        </div>
                        <div className='bg-[var(--brand-blue-corporate)] rounded-lg border-2 border-gray-400 p-[1rem] w-full'>
                            <div className='text-center pb-[2vmin] bg-[var(--brand-gray-neutral)] mx-[0.5rem] p-[0.5rem] rounded-sm'>
                                <img src={imgCol.colSistemas} alt="" className='w-[5rem] block mx-auto rounded-full mb-[5%]' />
                                <h3 className='mx-[0.5rem]'>Ing. Francisco Árciga</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};