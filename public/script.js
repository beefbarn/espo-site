

document.addEventListener('DOMContentLoaded', () => {
    VANTA.DOTS({
        el: "#eyecandy-div",  // Select the element where Vanta effect will be applied
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x723743,
        color2: 0xb14949,
        backgroundColor: 0x0,
        spacing: 40.00
    });

    VANTA.GLOBE({
      el: "#projects-div",
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x891f3b,
      color2: 0x0,
      backgroundColor: 0x292929
    })

    const elements = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
      root: null, // Use the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is in view, add the 'visible' class
          entry.target.classList.add('visible');
        } else {
          // Element is out of view, remove the 'visible' class
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
  
    elements.forEach(element => {
      observer.observe(element);
    });
});

const aboutMe = document.getElementById('about-me-button');
aboutMe.addEventListener('click', () => document.getElementById('static-div').scrollIntoView({ behavior: 'smooth' }));
// The followings block of code makes the particle text
//************************************************/

//************************************************/

// // Takes the game name and tagline (entered on website by user) and starts to gather info.
// async function getSummonerData(gameName, tagLine) {
//     try {
//         // First, fetch the data from the name and tagline provided:
//         const response = await fetch(`/summoner/${gameName}/${tagLine}`);
//         const data = await response.json();
//         // Then, get more navigation info from puuid that was returned:
//         const newInfoOut = await puuidFunction(data.puuid);
//         // Then, get ranked stats to display on website:
//         const rankedStatsOut = await statsFunction(newInfoOut.id);

//         // Now, it is time to display the info:
//         const rankDisplay = document.getElementById("rank-display");
//         if (rankedStatsOut.length > 0) {
//             rankDisplay.textContent = `Hello ${gameName}, You Are Currently Ranked: ${rankedStatsOut[0].tier} ${rankedStatsOut[0].rank}`;
//         } else {
//             rankDisplay.textContent = `Hello ${gameName}, You Are Currently Unranked`;
//         }

//     } catch (error) {
//         console.error('Error fetching summoner data:', error);
//     }

// }

// // This HELPER function takes a puuid in and outputs new info, including account id and id. Useful for future navigation
// async function puuidFunction(puuidNum) {
//     try {
//         // Gets more info, now using the puuid to lookup the account
//         const puuidResponse = await fetch(`/puuid/${puuidNum}`);
//         const newInfo = await puuidResponse.json();
//         console.log("New Info: ", newInfo);
//         return newInfo;
//     } catch (error) {
//         console.error('Error Fetching PUUID Request:', error);
//     }
// }

// // This HELPER function takes an id and looks up ranked stats on a player
// async function statsFunction(idNum) {
//     try {
//         // Gets more info, now using the id to lookup the player stats
//         const idResponse = await fetch(`/stats/${idNum}`);
//         const rankedStats = await idResponse.json();
//         console.log("Ranked Stats: ", rankedStats);
//         return rankedStats
//     } catch (error) {
//         console.error('Error Fetching Stats Request:', error);
//     }
// }

