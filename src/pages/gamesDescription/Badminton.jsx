import React from "react";

const Badminton = () => {
  return (
    <div className="main-container">
      <div className="games-section">
        <div className="sports-heading">
          <h1>Badminton</h1>
        </div>
        <div className="sports-item-heading">
          <h2>Team Formation Rules:</h2>
        </div>
        <ul className="guidlines">
          <li>
            Pool players: Anil Kataria, gaurav rawat, ksheer agrawal, varad
            sardeshpande, praanshu sharan, Prudhvi sunil, surbhi khewle, siddhi
            surawar, hrishitha sivakumar, siddharth shah, vedangraj vala and
            coaches (Rony damor and nitin makwana).
          </li>
          <li>There will be 4 players in each team.</li>
          <li>
            If there’s a non-pool girl in the team they would get an additional
            advantage of 4 points (i.e the game would start from 4-0) and if
            there are two or more girls in the team, the team would receive an
            advantage of 7 points (ie, the game would start from 7-0).
          </li>
          <li>
            Two or more pool players can not be in a team. A male pool player
            must include at least 1 non-pool girl. If a male pool player is
            present in the team then the team will not get any advantage of the
            girl player/players.
          </li>
          <li>
            A girl pool player does not need to include a non-pool girl player.
            Also, a girl pool player will not get any advantage because of
            herself. However, if she includes a non-pool player girl/girls then
            her team will get advantage due to girl player/players.
          </li>
          <li>
            There will be no substitutes available, and all 4 need to play at
            all times.
          </li>
          <li>
            {" "}
            Team should comprise of players from a minimum of 2 different
            batches. (eg: BTech ‘20, MTech ‘21, PhD ‘20)
          </li>
          <li>Faculty and Staff will be considered a different batch.</li>
          <li> Teams can consist of both male and female players.</li>
        </ul>
        <div className="sports-item-heading">
          <h2>Game Rules:</h2>
        </div>
        <ul className="guidlines">
          <li>
            While the game is on, only one player from both teams can be inside
            the court.
          </li>
          <li>
            The player serving needs to hit 1 more shot after the serve. For
            other cases a player needs to hit a shot and leave the court, the
            next player then enters the court from the backside and hits the
            next shot. The rally continues till one of the players misses the
            shot.
          </li>
          <li>
            If a player enters the court from any other side, at most 2 warnings
            will be given to the team, and thereafter for every fault, the
            opponent will get the point and the rally will stop.
          </li>
          <li>
            The player that wins a rally due to the opponent's error remains on
            the court for the start of the next point. For every other case, the
            next teammate comes in to serve.
          </li>
          <li>
            The order of the players entering the court will be fixed before
            starting a set and cannot be changed until the end of that set. You
            can change the order and discuss strategy before the start of each
            set.
          </li>
          <li>
            If the racquet clashes 2 points are deducted from that team but the
            rally will continue even after the racquet clash.
          </li>
          <li>
            The game will be of 1 set with 25 points till the round of 16.
          </li>
          <li>
            The game will be a best of 3 sets with 21 points each from the round
            of 16. Team which wins 2 sets first will win the match.
          </li>
          <li>BWF rules of singles will be followed.</li>
        </ul>
      </div>
    </div>
  );
};

export default Badminton;