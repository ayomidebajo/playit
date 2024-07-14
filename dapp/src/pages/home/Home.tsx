import { Wallet } from "features/wallet";
import { ReactComponent as SVG } from 'assets/images/party-games-but-make-the-svg-color-green-and-white.svg';
import clsx from 'clsx';
import { buttonStyles } from '@gear-js/ui';
import { Link } from "react-router-dom";


function Home() {
    const className = clsx(buttonStyles.button, buttonStyles.primary, buttonStyles.medium);
    
  return (
    <div>
      <div className="flex justify-content-between gap">
        <div className="text align-self-center">
          <h1>Let's play a game together</h1>
          <p>
            Get rid of boring party games and let's play the old school games we used to play back when we were young. Let's play it.
          </p>
          <div className="mt-2 flex gap">
            <button type="button" className={className}>
              <Link to="/singleplayer">
                <span>Single Player</span>
              </Link>
            </button>
            <button type="button" className={className}>
              <Link to="/">
                <span>Multi-Player</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="logo-games">
          <SVG />
        </div>
      </div>
    </div>
  );
}

export { Home };
