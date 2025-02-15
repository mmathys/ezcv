import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Marquee from 'react-fast-marquee';
import {
  MdNavigateNext,
  MdFreeBreakfast,
  MdPrint,
  MdFormatPaint,
} from 'react-icons/md';
import { HiCursorClick, HiLightningBolt } from 'react-icons/hi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Button, Content, Textbox, Footer } from '../components';
import { COLORS, TRIGGERS } from '../constants';
import splash from '../public/splash_image.gif';
import logo from '../public/logo.png';
import { parseIntoContent } from '../utils';

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  button: {
    padding: '0 75px 0 80px',
    background: COLORS.darkBrown,
    color: COLORS.background,
    marginRight: 20,
    transition:
      'border-radius 0.2s ease-in-out, box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
  },
  hoverButton: {
    borderRadius: 10,
    boxShadow: `5px 5px ${COLORS.red}, 5px 5px 0 2px ${COLORS.darkBrown}, 12px 12px ${COLORS.yellowGreen}, 12px 12px 0 2px ${COLORS.darkBrown}`,
    transform: 'translate(-5px, -5px)',
  },
  marquee: {
    background: COLORS.darkBrown,
    color: 'white',
    marginTop: -50,
    zIndex: 1,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
  },
  embed: {
    position: 'fixed',
    zIndex: 2,
    top: 20,
    right: 20,
  },
};

const SplashImage = styled.div`
  border: 2px solid ${COLORS.darkBrown};
  box-shadow: 20px 40px ${COLORS.red}, 20px 40px 0 2px ${COLORS.darkBrown};
  min-width: 400px;
  max-width: 400px;
  min-height: 500px;
  max-height: 500px;
  margin-left: 100px;
  margin-bottom: -50px;

  @media only screen and (max-width: ${TRIGGERS.mobileBreakpoint}) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 0.95;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${COLORS.darkBrown};
  position: fixed;
  background: ${COLORS.background};
  top: 0;
  z-index: 1;
`;

const Splash = styled.div`
  width: 100%;
  display: flex;
  max-width: 1000px;
  padding: 110px 0px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 2px solid ${COLORS.darkBrown};
  padding: 40px 0;
  z-index: 1;
`;

const Body = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 15px;
`;

const Child = styled.p`
  font-size: 50px;
  margin: 15px;
`;

const Modules = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const Module = styled.div`
  background: ${COLORS.background};
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid ${COLORS.darkBrown};
  border-radius: 10px;
  height: 200px;
  transition: box-shadow 0.2s ease-in-out;

  h2,
  p {
    margin: 0;
    padding: 0;
  }

  &:hover {
    box-shadow: 5px 5px ${COLORS.darkBrown};
  }
`;

const TextContainer = styled.div`
  width: 50%;
  margin-right: 20px;

  @media only screen and (max-width: ${TRIGGERS.mobileBreakpoint}) {
    width: 100%;
  }
`;

const PreviewContainer = styled.div`
  width: 50%;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  border: 2px solid ${COLORS.darkBrown};
  font-family: Arial;
  max-height: 300px;
  overflow: hidden;

  h2 {
    font-size: 18px;
  }

  p,
  li {
    font-size: 11px;
  }

  @media only screen and (max-width: ${TRIGGERS.mobileBreakpoint}) {
    width: 100%;
  }
`;

const Demo = styled.div`
  display: flex;

  @media only screen and (max-width: ${TRIGGERS.mobileBreakpoint}) {
    display: block;
  }
`;

export default function App() {
  const router = useRouter();
  const [text, setText] = useState(
    `// this is a comment! i’ll use this to describe the keywords (prepended by #) that will make up your resume.\n\n// SECTION HEADER\n// section keyword indicates the start of a new section\n// can be interchanged with other section keywords for different purposes (ex. header and section1/section2 for left/right columns respectively)\n#section Experience\n\n// TITLE\n// the title keyword indicates a new "experience"\n// other keywords under it are optional, and indicate extra information\n#title Job Title\n#subtitle Job Position\n#description Location\n#date Summer 2022\n\n// BODY\n// any "non-keyworded" text written under a certain title is treated as part of the body text of that "experience"\n// start lines with - to form bullet points\nI’m some generic body text.\n- I'm a bullet point!\n- Tell me more about what you did at this job.`
  );
  const { content } = useMemo(() => parseIntoContent(text), [text]);

  return (
    <>
      <Head>
        <title>ezcv — Easy Resume Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.page}>
        <a
          href="https://www.producthunt.com/posts/ezcv?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ezcv"
          target="_blank"
          rel="noreferrer"
          style={styles.embed}
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=359637&theme=light"
            alt="ezcv - Turn&#0032;text&#0032;into&#0032;a&#0032;beautiful&#0032;resume&#0032;in&#0032;seconds&#0046; | Product Hunt"
            dangerouslyAllowSVG
            width={250}
            height={54}
          />
        </a>
        <Header>
          <Body>
            <Image alt="logo" src={logo} width={60} height={60} />
          </Body>
        </Header>
        <Splash>
          <Body>
            <Title>Turn text into a beautiful resume in seconds.</Title>
            <Button
              content={
                <h2 style={styles.flex}>
                  Get Started <MdNavigateNext size={30} />
                </h2>
              }
              onClick={() => router.push('/builder')}
              style={styles.button}
              hoverStyle={styles.hoverButton}
            />
            <h3>No sign-in required!</h3>
          </Body>
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            transition={{ ease: 'easeInOut', duration: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1.2,
              rotate: [-5, -5, -10],
              y: [300, 50],
            }}
          >
            <SplashImage>
              <Image alt="example resume" src={splash} />
            </SplashImage>
          </motion.div>
        </Splash>
        <Marquee gradient={false} style={styles.marquee}>
          <Child>Easy to create.</Child>
          <Child>Easy to edit.</Child>
          <Child>Easy to impress.</Child>
          <Child>Easy to create.</Child>
          <Child>Easy to edit.</Child>
          <Child>Easy to impress.</Child>
        </Marquee>
        <Box style={{ background: COLORS.orange }}>
          <Body>
            <h1>Features</h1>
            <Modules>
              <Module>
                <MdFreeBreakfast style={styles.icon} />
                <h2>Free forever!</h2>
                <p>No ads, no payments.</p>
              </Module>
              <Module>
                <HiCursorClick style={styles.icon} />
                <h2>No sign-in needed</h2>
                <p>Just copy and paste and you&#39;re back!</p>
              </Module>
              <Module>
                <HiLightningBolt style={styles.icon} />
                <h2>Speedrun it</h2>
                <p>
                  Builder lets you add section templates with a click. Creating
                  is as easy as filling those in.
                </p>
              </Module>
              <Module>
                <MdPrint style={styles.icon} />
                <h2>Print/export as PDF</h2>
                <p>
                  Select your destination from the print menu. ATS friendly.
                </p>
              </Module>
              <Module>
                <MdFormatPaint style={styles.icon} />
                <h2>Try out every design</h2>
                <p>
                  Choose your favorite from a curated selection of professional
                  designs.
                </p>
              </Module>
              <Module>
                <BsFillMoonStarsFill style={styles.icon} />
                <h2>Dark mode</h2>
                <p>Make your resume in dark mode 🌚. Why not?</p>
              </Module>
            </Modules>
          </Body>
        </Box>
        <Box style={{ background: COLORS.redOrange }}>
          <Body>
            <h1>How it works</h1>
            <p>
              The text editor allows you to build a fully fledged resume in only
              a few simple keywords.
            </p>
            <Demo>
              <TextContainer>
                <Textbox text={text} setText={setText} readOnly />
              </TextContainer>
              <PreviewContainer>
                <Content content={content} />
              </PreviewContainer>
            </Demo>
          </Body>
        </Box>
        <Box style={{ background: COLORS.darkBrown, color: 'white' }}>
          <Body>
            <h1>It&#39;s resume making, revamped. </h1>
            <p>｡･:*:･ﾟ★,｡･:*:･ﾟ☆</p>
            <p>
              No more agonizingly recreating layouts you&#39;ve seen online, or
              re-typing bullet points for the umpteenth time.
              <br />
              <br />
              All you have to do is create and export your resume once, copy and
              paste the text somewhere safe, and paste it back in whenever you
              want to edit it.
              <br />
              <br />
              It&#39;s as <b>simple as typing</b>! :)
            </p>
          </Body>
        </Box>
        <Box style={{ background: COLORS.purple }}>
          <Body style={styles.flex}>
            <Button
              content={
                <h2 style={styles.flex}>
                  Give it a try! <MdNavigateNext size={30} />
                </h2>
              }
              onClick={() => router.push('/builder')}
              style={styles.button}
              hoverStyle={styles.hoverButton}
            />
          </Body>
        </Box>
      </main>

      <Footer />

      <style jsx global>{`
        body {
          background: ${COLORS.background};
          margin: 0;
          font-family: Mabry;
        }

        a {
          color: ${COLORS.red};
        }

        p {
          font-size: 18px;
        }

        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }

        ::-webkit-scrollbar-track {
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${COLORS.darkBrown};
        }

        ::-webkit-input-placeholder {
          color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
