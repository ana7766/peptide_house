import React from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import Card from "./components/card";
import EnrollmentForm from "./components/enrollmentForm";
import EnrollNowBanner from "./components/enrollNowBanner";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <div
          className="center"
          style={{ backgroundImage: 'url("/layer1.png")' }}
        >
          <div className="container mx-auto flex justify-between items-center p-4 max-w-5xl w-full">
            <div className="center-text partition">
              The best Peptides{" "}
              <div>
                {" "}
                for{" "}
                <span className="text-blue-300 font-bold">Muscle Growth</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage: 'url("/muscle1.2.png")',
                maxWidth: "389px",
                width: "100%",
                height: "384px",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container mx-auto flex justify-between items-center p-4 max-w-5xl w-full">
            <div className="border-solid border-b border-blue-300 border-2 w-10"></div>
          </div>
          <div className="container mx-auto flex justify-between p-4 max-w-5xl w-full">
            <div className="text-gray-900 text-xl">
              Find out what are best peptides for muscle grow.
            </div>
          </div>
        </div>
      </div>
      <div>
        <EnrollNowBanner />
      </div>
      <div className="container mx-auto items-center p-4 max-w-5xl w-full">
        <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
          What are Peptides?
        </div>
      </div>
      <div className="container mx-auto p-4 max-w-5xl w-full flex justify-center">
        <div className="border-solid border-b border-blue-300 border-2 w-10"></div>
      </div>
      <div className="container mx-auto items-center p-4 max-w-5xl w-full">
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
        <div className="container mx-auto md:flex md:justify-between items-center p-4 max-w-5xl w-full">
          <div
            style={{
              backgroundImage: 'url("/bottle1.png")',
              maxWidth: "609px",
              width: "100%",
              height: "598px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="partition small-text text-gray-900 ml-10">
            Understanding peptides is like unveiling the building blocks of
            life:
            <br></br>
            <br></br>
            <ul className="list-none">
              <li className="flex items-center">
                <span className="dot h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Amino acids stand alone as individual molecules.</span>
              </li>
              <br></br>
              <li className="flex items-center">
                <span className="dot h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span>
                  Peptides, on the other hand, are usually short chains, ranging
                  from 2 to 50 amino acids.
                </span>
              </li>
              <br></br>
              <li className="flex items-center">
                <span className="dot h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                <span>Proteins, the heavyweight champions, are generally long
                  chains, packing in 50 or more amino acids.
                </span>
              </li>
            </ul>
            <br></br>
            <br></br>
            Now, here&apos;s a surprising fact: while some may see peptides as
            uncharted territory in alternative medicine, they&apos;ve been
            life-saving heroes for over a century. Think about insulin and
            penicillin – both peptides that have brought invaluable benefits to
            modern society.
          </div>
        </div>
      </div>
      <div className="h-24"></div>        
      <div className="container mx-auto items-center p-4 max-w-5xl w-full">
          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
          Peptides for Muscle Growth
          </div>
          
          <div className="container mx-auto p-4 max-w-5xl w-full flex justify-center">
            <div className="border-solid border-b border-blue-300 border-2 w-10"></div>
          </div>
        </div>
      <div className="product-sections">
        <div className="container mx-auto md:flex md:justify-between items-center p-4 max-w-5xl w-full">
          <div className="partition small-text text-gray-900 ml-10">
            <div className="text-gray-900 small-text-title font-bold">
              CJC 1295
            </div>
            <br></br>
            CJC 1295 which is also known as drug affinity complex: growth
            hormone-releasing factor (DAC:GRF), is a synthetic analogue of
            growth hormone releasing hormone (GHRH). It also happens to be a
            growth hormone secretagogue, meaning that it acts as a secretion
            inducer for growth hormone. This particular peptide was developed by
            ConjuChem Biotechnologies, a medical biotech company that is based
            out of Quebec, Canada.
            <br></br>
            <br></br>
            CJC 1295 is known to increase plasma growth hormone as well as
            insulin like growth factor one within animals. The peptide is known
            to have a half-life of roughly six to eight hours and through the
            administration of multiple doses insulin like growth factor one, or
            IGF-1 for short, was found to remain elevated for up to twenty eight
            days. The initial research and trials into CJC 1295 were to
            investigate it as a treatment for lipodystrophy and growth hormone
            deficiency.
          </div>
          <div
            style={{
              backgroundImage: 'url("/bottle2.png")',
              maxWidth: "609px",
              width: "100%",
              height: "598px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="h-24"></div>
      <div className="product-sections">
        <div className="container mx-auto md:flex md:justify-between items-center p-4 max-w-5xl w-full">
          <div
            style={{
              backgroundImage: 'url("/bottle3.png")',
              maxWidth: "609px",
              width: "100%",
              height: "598px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="partition small-text text-gray-900 ml-10">
            <div className="text-gray-900 small-text-title font-bold">
              Ipamorelin
            </div>
            <br></br>
            Ipamorelin, whose developmental code name is NNC26-0161, is a
            peptide selective agonist of the ghrelin or growth hormone
            secretagogue receptor and is considered to be a growth hormone
            secret agogue. This means that it binds to the ghrelin or growth
            hormone secretion receptors and produces more growth hormone through
            a biological response
            <br></br>
            <br></br>
            Like CJC 1295, Ipamorelin has been proven to increase plasma growth
            hormone (GH) levels as well as stimulate weight gain. Ipamorelin
            does not affect prolactin, follicle stimulating hormone, thyroid
            stimulating hormone, or luteinizing hormone.
          </div>
        </div>
      </div>
      <div className="h-24"></div>
      <div className="product-sections">
        <div className="container mx-auto md:flex md:justify-between items-center p-4 max-w-5xl w-full">
          <div className="partition small-text text-gray-900 ml-10">
            <div className="text-gray-900 small-text-title font-bold">
              Tesamorelin
            </div>
            <br></br>
            Tesamorelin is a remarkable analog of growth hormone-releasing
            hormone (GHRH) that has demonstrated significant clinical efficacy
            in the treatment of HIV-associated lipodystrophy. This condition is
            characterized by abnormal fat distribution, and Tesamorelin offers
            hope to individuals affected by addressing dysfunctional fat
            deposition.
            <br></br>
            <br></br>
            Furthermore, scientists are actively exploring Tesamorelin&apos;s
            potential to enhance the health of peripheral nerves, a crucial
            component of our body&apos;s communication network. Additionally,
            ongoing research suggests that Tesamorelin may have the ability to
            slow the progression of mild cognitive impairment, highlighting its
            potential in diverse areas of health and wellness.
          </div>
          <div
            style={{
              backgroundImage: 'url("/bottle4.png")',
              maxWidth: "609px",
              width: "100%",
              height: "598px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div className="h-24"></div>
      <div className="product-sections">
        <div className="container mx-auto md:flex md:justify-between items-center p-4 max-w-5xl w-full">
          <div
            style={{
              backgroundImage: 'url("/bottle5.png")',
              maxWidth: "609px",
              width: "100%",
              height: "598px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="partition small-text text-gray-900 ml-10">
            <div className="text-gray-900 small-text-title font-bold">
              Sermorelin
            </div>
            <br></br>
            Unlocking growth hormone potential, Sermorelin emerges as a
            groundbreaking growth hormone-releasing hormone (GHRH) analog. While
            traditionally used to assess growth hormone secretion, Sermorelin
            has captivated researchers with its remarkable range of
            capabilities.
            <br></br>
            <br></br>
            Sermorelin has shown promise in various medical fields, including
            bolstering bone density and reducing scarring.
          </div>
        </div>

      </div>
      <div className="h-24"></div>
      <div className="bg-blue-50">
        <div className="h-16"></div>
        <div className="container mx-auto items-center p-4 max-w-5xl w-full">
          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
            Muscle Growth
          </div>
        </div>
        <div className="container mx-auto p-4 max-w-5xl w-full flex justify-center">
          <div className="border-solid border-b border-blue-300 border-2 w-10"></div>
        </div>
        <div className="container mx-auto flex justify-between items-center p-4 max-w-5xl w-full">
          <div className="small-text text-gray-900">
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
        <div className="container mx-auto items-center p-4 max-w-5xl w-full">
          <div className="h-16"></div>
          <div className="text-gray-600 items-center w-full text-center text-2xl font-bold">
            Benefits of Muscle Growth
          </div>
        </div>

        <div>
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4 max-w-5xl w-full">
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

            <div className="partition small-text text-gray-900 ml-10 lg:w-1/2 space-y-4 lg:space-y-0 lg:space-x-4">
              <ul className="list-none">
                <li className="flex items-center">
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
      <div className="container mx-auto items-center p-4 max-w-5xl w-full">
        <div className="h-16"></div>
        <div className="h-96">

          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold">
            FAQ&apos;s
          </div>

          <div className="container mx-auto p-4 max-w-5xl w-full flex justify-center">
            <div className="border-solid border-b border-blue-300 border-2 w-10"></div>
          </div>
          <Card
            mainText="Types"
            additionalText="Additional text that will be shown when the + button is clicked."
          />
          <Card
            mainText="SARMs"
            additionalText="Additional text that will be shown when the + button is clicked."
          />
          <Card
            mainText="Peptides"
            additionalText="Additional text that will be shown when the + button is clicked."
          />
          <Card
            mainText="Peptide Therapy"
            additionalText="Additional text that will be shown when the + button is clicked."
          /></div>
      </div>
      <div className="md:pb-32">
        <div className="container mx-auto items-center p-4 max-w-5xl w-full">
          <div className="text-gray-600 items-center w-full text-center mid-size-text font-bold" id="enrollPartition">
            Enroll now
          </div>
        </div>
        <div className="container mx-auto p-4 max-w-5xl w-full flex justify-center">
          <div className="border-solid border-b border-blue-300 border-2 w-10"></div>
        </div>
      </div>
      <div className="relative bg-neutral-100 p-7">
        <div className="md:h-96"></div>
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 border border-solid border-gray-300 rounded-lg text-black bg-white p-5 md:bottom-60">
          <EnrollmentForm />
        </div>
        <div className="md:absolute bottom-0 left-0 right-0 p-4 w-full">
        <div className="flex flex-wrap justify-between items-start container mx-auto p-4 max-w-5xl w-full">
  <div className="w-full md:w-2/6 text-left">
    <Image src="/logo.png" alt="Logo" width={263} height={31} />
  </div>
  <div className="w-full md:w-2/6 text-left md:mt-0 mt-4">
    <div className="small-text text-gray-900">
      <div className="text-gray-900 small-text-title font-bold">
        About us
      </div>               
      We&apos;re dedicated to educating and informing, providing concise insights into the benefits of peptides. Empower your well-being through knowledge with us.
    </div>
  </div>
  <div className="w-full md:w-2/6 text-left mt-4">
    <div className="small-text text-gray-900 md:float-end">
      <div className="text-gray-900 small-text-title font-bold">
        Links
      </div>
      Telephone
      <div className="h-1"></div>
      Email
    </div>
  </div>
</div>

        </div>
      </div>
    </main>
  );
}
