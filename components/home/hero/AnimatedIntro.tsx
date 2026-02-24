import Typewriter from "typewriter-effect";

function AnimatedIntro() {
  return (
    <div className="text-lg sm:text-xl h-30 px-8 text-center font-medium text-surface">
      I am a
      <span className="font-bold text-2xl">
        <Typewriter
          options={{
            strings: [
              "Computer Science Student",
              "FullStack Developer",
              "DevOps Learner",
              "Tech Enthusiast",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            wrapperClassName: "inline-block py-4"
          }}
        />
      </span>
    </div>
  );
}

export default AnimatedIntro;
