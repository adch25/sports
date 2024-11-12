import React from "react";

const GullyCricket = () => {
  return (
    <div className="main-container">
      <div className="games-section">
        <div className="sports-heading">
          <h1>Gully-Cricket</h1>
        </div>

        <div className="sports-item-heading">
          <h2>Game Rules:</h2>
        </div>
        <ul className="guidlines">
          <li>Each inning would be 6 overs.</li>
          <li>
            Maximum 2 players can bowl 2 overs each. A girl must bowl at least 1
            over.
          </li>
          <li>
            In the girl’s over, the bowling team can dismiss the batsman by
            catching the ball on one bounce and in one hand.
          </li>
          <li>
            The total number of runs scored by a girl will be doubled. Also,
            when a girl is batting, and the ball touches the bat, provided that
            it is a dot ball, then one run will be added to the total. All other
            rules regarding runs will be announced before the match.
          </li>
          <li>
            The batting team is allowed to take a "Hallabol Over", in which runs
            scored by the batting team will be doubled. At the same time, in
            this over, the bowling team can dismiss the batsman by catching the
            ball on one bounce and in one hand. The decision to take the
            "Hallabol Over" should be made before the start of the over. It’s
            compulsory for every team to take “Hallabol Over.” The batting team
            has to announce the Hallabol Over first, and then the bowling may
            choose which bowler will bowl that particular over.
          </li>
          <li>All the usual international rules like wide, no balls are ON.</li>
          <li>
            A player can be declared ‘retired hurt’ only after completing an
            over. However, retired players can bat again only after every
            remaining player gets out.
          </li>
          <li>
            Only throw bowling (with at max one-step run-up) will be allowed
            with speed restriction, which will be looked after by the Umpire
            only.
          </li>
          <li>
            All the other rules will be announced to both teams before the match
            starts.
          </li>
          <li>
            The umpire's decision would be considered final in case of any
            discrepancy.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GullyCricket;
