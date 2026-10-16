/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  type ElementType,
  type Ref,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  ref?: Ref<HTMLElement>;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ref: forwardedRef,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  // CHARCOUNT IS HOW MANY CHARACTERS OF THE CURRENT SENTENCE ARE SHOWING RIGHT NOW
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  // REFS HOLD THINGS THAT SHOULD NOT TRIGGER A RE-RENDER WHEN THEY CHANGE
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  // LETS BOTH THIS COMPONENT AND THE PARENT HOLD A REF TO THE SAME ELEMENT
  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current =
          node;
      }
    },
    [forwardedRef],
  );

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  // THE SENTENCE BEING TYPED, REVERSED IF REVERSEMODE IS ON
  const rawSentence = textArray[textIndex] ?? "";
  const sentence = reverseMode
    ? rawSentence.split("").reverse().join("")
    : rawSentence;

  // WHAT THE USER SEES: THE SENTENCE CUT OFF AT CHARCOUNT CHARACTERS
  const displayedText = sentence.slice(0, charCount);

  // START TYPING ONLY ONCE THE ELEMENT SCROLLS INTO VIEW (IF STARTONVISIBLE IS ON)
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // CURSOR BLINK: GSAP FADES OPACITY 1 TO 0 AND BACK FOREVER
  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    gsap.set(cursorRef.current, { opacity: 1 });
    const tween = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // KILL THE TWEEN WHEN THE COMPONENT UNMOUNTS SO IT DOES NOT KEEP RUNNING
    return () => {
      tween.kill();
    };
  }, [showCursor, cursorBlinkDuration]);

  // THE TYPING LOOP: EACH RUN SCHEDULES EXACTLY ONE NEXT STEP, THEN CLEANS UP
  useEffect(() => {
    if (!isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;
    const isLastSentence = textIndex === textArray.length - 1;

    if (!isDeleting) {
      if (charCount < sentence.length) {
        // STILL TYPING: ADD ONE CHARACTER AFTER A SHORT DELAY
        const delay =
          charCount === 0
            ? initialDelay
            : variableSpeed
              ? Math.random() * (variableSpeed.max - variableSpeed.min) +
                variableSpeed.min
              : typingSpeed;

        timeout = setTimeout(() => setCharCount((c) => c + 1), delay);
      } else {
        // SENTENCE FINISHED: STOP HERE IF NOT LOOPING, OTHERWISE WAIT THEN START DELETING
        if (!loop && isLastSentence) return;
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (charCount > 0) {
        // STILL DELETING: REMOVE ONE CHARACTER AFTER A SHORT DELAY
        timeout = setTimeout(() => setCharCount((c) => c - 1), deletingSpeed);
      } else {
        // FULLY DELETED: TELL THE PARENT, THEN MOVE ON TO THE NEXT SENTENCE
        onSentenceComplete?.(rawSentence, textIndex);
        setIsDeleting(false);
        setTextIndex((i) => (i + 1) % textArray.length);
      }
    }

    // CLEARING THE TIMER HERE IS WHAT STOPS TWO TIMERS RUNNING AT ONCE
    return () => clearTimeout(timeout);
  }, [
    charCount,
    isDeleting,
    textIndex,
    isVisible,
    sentence,
    rawSentence,
    textArray,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
    variableSpeed,
    onSentenceComplete,
  ]);

  // OPTIONAL: PICK A COLOUR PER SENTENCE FROM THE TEXTCOLORS ARRAY
  const currentColor =
    textColors.length > 0
      ? textColors[textIndex % textColors.length]
      : "inherit";

  // OPTIONAL: HIDE THE CURSOR WHILE CHARACTERS ARE BEING TYPED OR DELETED
  const shouldHideCursor =
    hideCursorWhileTyping && (charCount < sentence.length || isDeleting);

  return (
    <Component
      ref={setRefs}
      className={`inline-block whitespace-pre-wrap tracking-tight ${className}`}
      {...props}
    >
      <span className="inline" style={{ color: currentColor }}>
        {displayedText}
      </span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`ml-1 inline-block opacity-100 ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`}
        >
          {cursorCharacter}
        </span>
      )}
    </Component>
  );
};

export default TextType;
