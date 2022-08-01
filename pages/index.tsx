import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Mint from '../components/Mint';
import Faq from '../components/Faq';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import topImage from '../public/assets/TheDropNFTVIDCARDBG.jpg';
import contractConfig from '../config/contract-config.json';

const Home: NextPage = () => {
  const { nftName } = contractConfig;

  return (
    <Layout>
      <Head>
        <title>{nftName}</title>
      </Head>

 <div className="py-16">

         <Image src={topImage} alt={nftName} layout="fill"
            objectFit="cover"
            quality={100} />
             <Mint />

        <Prose>
        </Prose>
      </div>
      <div className="bg-gray-800 py-16">
        <Prose>
          <h1 className="text-5xl font-bold mb-4">{nftName}</h1>

          <p className="text-xl">
           
          </p>
        </Prose>
      </div>

     

      <div className="bg-gray-800 py-16">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-16">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-gray-800 py-16">
        <Prose>
          <Team />
        </Prose>
      </div>
    </Layout>
  );
};

export default Home;
