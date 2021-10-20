import React from "react";

const RoversStory = (props) => {
  if (props.rover === "Curiosity") {
    return (
      <>
        <h2>Surveying Gale Crater</h2>
        <p>
          Curiosity explores Gale Crater and acquires rock, soil, and air
          samples for onboard analysis. The car-size rover is about as tall as a
          basketball player and uses a 7 foot-long arm to place tools close to
          rocks selected for study. Curiosity's large size allows it to carry an
          advanced kit of 10 science instruments. It has tools including 17
          cameras, a laser to vaporize and study small pinpoint spots of rocks
          at a distance, and a drill to collect powdered rock samples. It hunts
          for special rocks that formed in water and/or have signs of organics.
        </p>
        <h2>Strong, Smart and Curious</h2>
        <p>
          Curiosity carries the biggest, most advanced instruments for
          scientific studies ever sent to the Martian surface. The history of
          Martian climate and geology is written in the chemistry and structure
          of the rocks and soil. Curiosity reads this record by analyzing
          powdered samples drilled from rocks. It also measures the chemical
          fingerprints present in different rocks and soils to determine their
          composition and history, especially their past interactions with
          water.
        </p>
        <h2>Coming in for a Landing</h2>
        <p>
          Mars Science Laboratory arrived at Mars through technological
          innovations that tested a completely new landing method. The
          spacecraft descended on a parachute, then during the final seconds
          before landing, the landing system fired rockets to allow it to hover
          while a tether lowered Curiosity to the surface. The rover landed on
          its wheels, the tether was cut, and the landing system flew off to
          crash-land a safe distance away.
        </p>
        <h4>
          <a href="https://mars.nasa.gov/msl/mission/overview/">
            Source: mars.nasa.gov
          </a>
        </h4>
      </>
    );
  } else if (props.rover === "Opportunity") {
    return (
      <>
        <h2>What was Opportunity?</h2>
        <p>
          NASA's Opportunity rover was one of the most successful and enduring
          interplanetary missions. Opportunity landed on Mars in early 2004 soon
          after its twin rover Spirit. Opportunity operated almost 15 years,
          setting several records and making a number of key discoveries.
          Opportunity and its twin Spirit were tasked with studying sites on
          Mars where conditions may once have been favorable for life.
          Opportunity found evidence that Mars may once have been able to
          sustain microbial life. Opportunity exceeded its life expectancy by 60
          times and had traveled more than 28 miles (45 kilometers) by the time
          it reached its appropriate final resting spot on Mars – Perseverance
          Valley. Opportunity stopped communicating with Earth after a severe
          Mars-wide dust storm blanketed its location in June 2018.
        </p>
        <h4>
          <a href="https://solarsystem.nasa.gov/missions/opportunity/in-depth/">
            Source: solarsystem.nasa.gov
          </a>
        </h4>
      </>
    );
  } else if (props.rover === "Spirit") {
    return (
      <>
        <h2>What was Spirit?</h2>
        <p>
          NASA's Spirit rover—and it's twin Opportunity—studied the history of
          climate and water at sites on Mars where conditions may once have been
          favorable to life. Spirit uncovered strong evidence that Mars was once
          much wetter than it is now. Described as a "wonderful
          workhorse"—Spirit operated for 6 years, 2 months, and 19 days, more
          than 25 times its original intended lifetime. The rover traveled 4.8
          miles (7.73 kilometers) across the Martian plains. On May 25, 2011,
          NASA ended efforts to contact the marooned rover and declared its
          mission complete. The rover had been silent since March 2010.
        </p>
        <h4>
          <a href="https://solarsystem.nasa.gov/missions/spirit/in-depth/">
            Source: solarsystem.nasa.gov
          </a>
        </h4>
      </>
    );
  } else {
    return null;
  }
};

export default RoversStory;
