import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Card from "./components/card";
import EnrollmentForm from "./components/enrollmentForm";
import EnrollNowBanner from "./components/enrollNowBanner";
import Header from "./components/header";
import { CardProvider } from "./components/cardController";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div
          className="min-h-[435px] mid-size-text overflow-hidden center md:max-h flex items-center justify-center border-b-[10px] border-t-[5px] border-solid border-light-blue2 sm:py-[40px] md:py-[40px] lg:max-h-[420px] lg:py-[97px] xl:max-h-[420px] xl:py-[62px]"
          style={{ backgroundImage: 'url("/layer1.png")' }}>
          <div className="container mx-auto flex justify-between items-center max-w-[1200px] w-full">
            <div className="center-text">
              The best Peptides for
              <span className="text-blue-400 font-bold"> Muscle Growth</span>
              <div className="my-[16px] underline"></div>
              <div className="container mx-auto flex justify-between max-w-[1200px] w-full">
                <div className="text-gray-900 text-xl pl-0">
                  Find out what are best peptides for muscle grow.
                </div>
              </div>
            </div>
            <div className="relative md:mb-[65px] h-full items w-full select-none sm:max-h-[207px] sm:max-w-[262px] md:max-h-[260px] md:max-w-[328px] lg:max-h-[311px] lg:max-w-[302px] xl:max-h-[311px] xl:max-w-[389px]">
              <Image
                alt="Muscle"
                src="/muscle1.2.png"
                width={389}
                height={384}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <EnrollNowBanner />
      </div>
      <div className="container mx-auto items-center pt-16 max-w-[1200px] w-full">
        <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
          What are Peptides?
        </div>
      </div>
      <div className="my-[16px] underline m-auto"></div>
      <div className="container mx-auto items-center max-w-[1200px] w-full">
        <div className="small-text text-gray-900">
          Peptides are small biological molecules that act as messengers in the
          body, facilitating communication between different parts. Typically
          composed of just 2-3 amino acids connected by peptide bonds, they play
          a crucial role in telling our cells what to do.
          <br></br>
          <br></br>
          These sign aling molecules are essential for various critical
          functions, such as repairing tissues and regulating hormones.
          Additionally, they release anti-inflammatory compounds for healing. In
          simpler terms, peptides are like tiny communicators that help our body
          perform important tasks
        </div>
      </div>
      <div className="product-sections">
        <div className="container mx-auto gap-[48px] md:flex md:justify-between items-center p-4 max-w-[1200px] w-full">
          <div className="image-container w-full md:w-[609px]">
            <Image
              alt="Muscle"
              src="/bottle1.png"
              width={609}
              height={598}
              layout="responsive"
            />
          </div>
          <div className="partition small-text text-gray-900 ml-10">
            <p>
              Understanding peptides is like unveiling the building blocks of life:
            </p>
            <br />
            <ul className="list-none">
              <li className="flex items-center">
                <span className="dot h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Amino acids stand alone as individual molecules.</span>
              </li>
              <br />
              <li className="flex items-center">
                <span className="dot h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span>
                  Peptides, on the other hand, are usually short chains, ranging from
                  2 to 50 amino acids.
                </span>
              </li>
              <br />
              <li className="flex items-center">
                <span className="dot h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span>
                  Proteins, the heavyweight champions, are generally long chains,
                  packing in 50 or more amino acids.
                </span>
              </li>
            </ul>
            <br />
            <br />
            <p>
              Now, here&apos;s a surprising fact: while some may see peptides as
              uncharted territory in alternative medicine, they&apos;ve been life-saving
              heroes for over a century. Think about insulin and penicillin – both
              peptides that have brought invaluable benefits to modern society.
            </p>
          </div>
        </div>
      </div>

      <div className="h-24"></div>
      <div className="container mx-auto items-center p-2 max-w-[1200px] w-full">
        <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
          Peptides for Muscle Growth
        </div>
        <div className="my-[16px] underline m-auto"></div>
      </div>
      <div className="product-sections">
        <div className="container mx-auto gap-[48px] md:flex md:justify-between items-center p-4 max-w-[1200px] w-full">

          <div className="partition small-text text-gray-900 md:ml-10 flex flex-col">
            <div className="text-gray-900 small-text-title font-bold">
              CJC 1295
            </div>
            <br />
            <p>
              CJC 1295, also known as drug affinity complex: growth hormone-releasing factor (DAC:GRF), is a synthetic analogue of growth hormone-releasing hormone (GHRH). It acts as a growth hormone secretagogue, inducing the secretion of growth hormone. Developed by ConjuChem Biotechnologies, this peptide was initially investigated for lipodystrophy and growth hormone deficiency treatment.
            </p>
            <br />
            <p>
              CJC 1295 increases plasma growth hormone and insulin-like growth factor one levels in animals. It has a half-life of approximately six to eight hours, with multiple doses sustaining elevated insulin-like growth factor one levels for up to twenty-eight days.
            </p>
          </div>
          <div className="image-container w-full md:w-[609px]">
            <Image
              alt="Muscle"
              src="/bottle2.png"
              width={609}
              height={598}
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-24"></div>

      <div className="product-sections">
        <div className="container mx-auto md:flex gap-[48px] md:justify-between items-center p-4 max-w-[1200px] w-full">
          <div className="image-container w-full md:w-[609px]">
            <Image
              alt="bottle3"
              src="/bottle3.png"
              width={609}
              height={598}
              layout="responsive"
              className="object-cover"
            />
          </div>
          <div className="partition small-text text-gray-900 md:ml-10 flex flex-col">
            <div className="text-gray-900 small-text-title font-bold">
              Ipamorelin
            </div>
            <br />
            <p>
              Ipamorelin, also known as NNC26-0161 during development, is a peptide selective agonist of the growth hormone secretagogue receptor. It binds to these receptors, stimulating the secretion of growth hormone.
            </p>
            <br />
            <p>
              Like CJC 1295, Ipamorelin increases plasma growth hormone levels and stimulates weight gain without affecting other hormones like prolactin, follicle-stimulating hormone, thyroid-stimulating hormone, or luteinizing hormone.
            </p>
          </div>
        </div>
      </div>

      <div className="h-24"></div>

      <div className="product-sections">
        <div className="container mx-auto md:flex md:justify-between gap-[48px] items-center p-4 max-w-[1200px] w-full">
          <div className="partition small-text text-gray-900 md:ml-10 flex flex-col">
            <div className="text-gray-900 small-text-title font-bold">
              Tesamorelin
            </div>
            <br />
            <p>
              Tesamorelin, an analog of growth hormone-releasing hormone (GHRH), has shown significant clinical efficacy in treating HIV-associated lipodystrophy. It addresses abnormal fat distribution in affected individuals.
            </p>
            <br />
            <p>
              Researchers are exploring Tesamorelin&apos;s potential to enhance peripheral nerve health and potentially slow the progression of mild cognitive impairment, showcasing its versatility in healthcare.
            </p>
          </div>
          <div className="image-container w-full md:w-[609px]">
            <Image
              alt="bottle 4"
              src="/bottle4.png"
              width={609}
              height={598}
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-24"></div>

      <div className="product-sections last-product">
        <div className="container mx-auto gap-[48px] md:flex md:justify-between items-center p-4 max-w-[1200px] w-full">
          <div className="image-container w-full md:w-[609px]">
            <Image
              alt="bottle5"
              src="/bottle5.png"
              width={609}
              height={598}
              layout="responsive"
              className="object-cover"
            />
          </div>
          <div className="partition small-text text-gray-900 md:ml-10 flex flex-col">
            <div className="text-gray-900 small-text-title font-bold">
              Sermorelin
            </div>
            <br></br>
            <p>
              Unlocking growth hormone potential, Sermorelin emerges as a
              groundbreaking growth hormone-releasing hormone (GHRH) analog. While
              traditionally used to assess growth hormone secretion, Sermorelin has
              captivated researchers with its remarkable range of capabilities.
            </p>
            <br></br>
            <p>
              Sermorelin has shown promise in various medical fields, including
              bolstering bone density and reducing scarring.
            </p>
          </div>
        </div>
      </div>

      <div className="h-24"></div>
      <div className="bg-blue-50 lg:h-[775px] h-auto">
        <div className="h-16"></div>
        <div className="container mx-auto items-center max-w-[1200px] w-full">
          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
            Muscle Growth
          </div>
        </div>
        <div className="my-[16px] underline m-auto"></div>
        <div className="container mx-auto flex justify-between items-center max-w-[1200px] w-full">
          <div className="small-text text-gray-900 mb-[48px]">
            Peptides play a pivotal role in enhancing muscle growth and overall
            well-being. The thoughtful integration of innovative peptides, such
            as CJC 1295, Ipamorelin, Tesamorelin, and Sermorelin, offers a
            comprehensive approach to promoting a more robust release of Human
            Growth Hormone (HGH). This heightened HGH release contributes to
            enhanced muscle mass, and improved metabolism, and boosts overall
            physical performance, making them valuable tools for a healthier
            physique.
          </div>
        </div>
        <div className="container mx-auto items-center p-4 max-w-[1200px] w-full">
          <div className="text-gray-600 items-center w-full text-center text-2xl font-bold">
            Benefits of Muscle Growth
          </div>
        </div>
        <div>
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center max-w-[1200px] w-full">
            <div className="partition small-text text-gray-900 ml-10 lg:w-1/2">
              <ul className="list-none">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Promotion of lean muscle growth</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Enhanced sleep quality </span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Improved sex drive.</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Increased bone density and regeneration</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Diminished muscle discomfort</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Improved skin elasticity</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Significant elevation of IGF-1 levels</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Accelerated wound healing</span>
                </li>
              </ul>
            </div>
            <div className="partition small-text text-gray-900 ml-10 lg:w-1/2 space-y-4 lg:space-y-0 lg:space-x-4 lg:mt-a">
              <ul className="list-none">
                <li className="flex items-center ">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span>Elevated strength and stamina</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Quicker workout recovery </span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Reduction in body fat</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Heightened mental focus and clarity</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Reinforced immune system function</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Alleviated joint pain</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Reduced cholesterol levels</span>
                </li>
                <br></br>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                  <span> Healthier hair and nails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-16"></div>
      </div>
      <div className="container mx-auto items-center p-2 max-w-[1200px] w-full">
        <div className="h-16"></div>
        <div className="h-[343px]">
          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
            FAQ&apos;s
          </div>
          <div className="my-[16px] underline m-auto"></div>
          <div className="mb-9"></div>
          <CardProvider>
            <div className="items-center">
              <Card
                mainText="Types"
                additionalText="Additional text that will be shown when the + button is clicked."
                index={0}
              />
              <Card
                mainText="SARMs"
                additionalText="Additional text that will be shown when the + button is clicked."
                index={1}
              />
              <Card
                mainText="Peptides"
                additionalText="Additional text that will be shown when the + button is clicked."
                index={2}
              />
              <Card
                mainText="Peptide Therapy"
                additionalText="Additional text that will be shown when the + button is clicked."
                index={3}
              />
            </div>
          </CardProvider>
        </div>
      </div>
      <div className="h-16"></div>
      <div className="lg:pb-32">
        <div className="container mx-auto items-center p-2 max-w-[1200px] w-full">
          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold" id="enrollPartition">
            Enroll now
          </div>
        </div>
        <div className="my-[16px] underline m-auto"></div>
      </div>
      <div className="bg-neutral-100 p-7">
        <div className="mx-auto p-4 max-w-[1200px] min-h-[150px] w-full">
          <div className="relative max-w-[998px] w-full min-h-[150px] h-full mx-auto items-center">
            <div className="lg:absolute bottom-n20 shadow-md shadow-enrollBox border rounded-lg text-black bg-white p-5 max-w-full lg:h-[299px] h-auto">
              <EnrollmentForm />
            </div>
          </div>
        </div>
        <div className="p-4 w-full">
          <div className="flex flex-wrap justify-between items-start container mx-auto p-4 max-w-[1200px] w-full">
            <div className="w-full md:w-1/4 text-left float-start">
              <Image src="/logo.png" alt="Logo" width={263} height={31} />
            </div>
            <div className="w-full md:w-1/2 text-left md:mt-0 mt-4">
              <div className="small-text text-gray-900 md:ml-12">
                <div className="text-gray-900 small-text-title font-bold">
                  About us
                </div>
                We&apos;re dedicated to educating and informing, providing concise insights into the benefits of peptides. Empower your well-being through knowledge with us.
              </div>
            </div>
            <div className="w-full md:w-1/5 md:mt-0 mt-4">
              <div className="small-text text-gray-900">
                <div className="h-2/4 text-left md:float-end">
                  <div className="text-gray-900 small-text-title font-bold">
                    Links
                  </div>
                  Telephone <div className="mt-4">Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
