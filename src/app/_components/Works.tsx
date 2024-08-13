"use client";
import React from "react";
import Image from "next/image";
import { TileBackground, Tile, TileContent, TileWrapper } from "./Tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./Work";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://github.com/ChristianTertius">
                  Pink Panda
                </WorkLink>
                &apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/hp.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Rent a riff"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                University of binus&apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/hp.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="haven"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://github.com/ChristianTertius">
                  Eben Haezar
                </WorkLink>
                &apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/student.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="student"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
