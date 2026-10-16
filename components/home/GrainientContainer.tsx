import React from "react";
import Grainient from "../ui/Grainient";
import Containers from "../global/Containers";
import TextType from "../ui/TextType";
import Image from "next/image";
import HomeSearchComponent from "./DeliveryAddressInput";

function GrainientContainer() {
  return (
    <>
      <div className="relative min-h-dvh w-full">
        <div style={{ position: "absolute", inset: 0 }}>
          <Grainient
            color1="#ffffff"
            color2="#99c2ff"
            color3="#ffffff"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>
        <div
          // style={{ paddingTop: "7rem" }}
          className="pt-0"
        >
          <Containers className="relative z-10 py-25 px-2 flex flex-col sm:justify-between justify-center items-center">
            <div className="flex flex-col w-full items-center justify-center gap-2">
              <TextType
                text={[
                  "Ready for something?",
                  "Pick, tap, relax.",
                  "Hungry? We've got you.",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="●"
                deletingSpeed={50}
                className="font-extrabold text-blue-700 text-center mb-0"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 800 }}
                cursorBlinkDuration={0.5}
              />
              <HomeSearchComponent />
            </div>
            <Image
              src="/images/HomeHero.png"
              alt="Foodlio"
              width={400}
              height={400}
              className="hidden sm:inline-block"
            />
            <Image
              src="/images/HomeHero.png"
              alt="Foodlio"
              width={300}
              height={300}
              className="sm:hidden mt-3"
            />
          </Containers>
        </div>
      </div>
    </>
  );
}

export default GrainientContainer;
