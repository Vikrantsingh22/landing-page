// import React from "react";
// import "./Scroll.css";
// import { Helmet } from "react-helmet";
// function Scroll1() {
//   return (
//     <div>
//       <div id="main">
//         <div className="text">
//           <div
//             className="text-img"
//             style={{
//               backgroundImage: `url(Blue\Modern\G\Letter\Technology\Logo\Design\\(4\).png)`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           ></div>
//           <h1>
//             Create new feature at <br />
//             Gravity Coding
//           </h1>
//           <p>
//             Subscribe our channel for latest features of awwwards website. Check
//             out other videos <br />
//             for learning web development with great UI design and animation
//             based.
//           </p>
//         </div>
//         <div className="cards" id="card-one"></div>
//         <div className="cards" id="card-two"></div>
//         <div className="cards" id="card-three"></div>
//       </div>
//       <Helmet>
//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"
//           integrity="sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw=="
//           crossorigin="anonymous"
//           referrerpolicy="no-referrer"
//         ></script>
//       </Helmet>
//       <Helmet>
//         <script
//           src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"
//           integrity="sha512-tHvUcUQYi35zApvAa5TNR3fNhBQkVtkmWKfacnpxmix4/VTGz1lGjIVyLMp7gLgAvg+aKJjnVKokXJNS5GZ+/g=="
//           crossorigin="anonymous"
//           referrerpolicy="no-referrer"
//         ></script>
//       </Helmet>
//       <Helmet>
//         <script src="script.js"></script>
//       </Helmet>
//     </div>
//   );
// }

// export default Scroll1;

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Scroll.css";
const Scroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(
      ".text",
      {
        top: "-7%",
      },
      "a"
    )
      .to(
        "#card-one",
        {
          top: "35%",
        },
        "a"
      )
      .to(
        "#card-two",
        {
          top: "130%",
        },
        "a"
      )
      .to(
        "#card-two",
        {
          top: "42%",
        },
        "b"
      )
      .to(
        "#card-one",
        {
          width: "65%",
          height: "65vh",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "130%",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "50%",
        },
        "c"
      )
      .to(
        "#card-two",
        {
          width: "70%",
          height: "70vh",
        },
        "c"
      );
  }, []);

  return (
    <div id="main">
      <div class="text">
        <div className="text-img"></div>
        <h1>
          Create new feature at <br />
          Gravity Coding
        </h1>
        <p>
          Subscribe our channel for latest features of awwwards website. Check
          out other videos <br />
          for learning web development with great UI design and animation based.
        </p>
      </div>
      <div className="cards" id="card-one"></div>
      <div className="cards" id="card-two"></div>
      <div className="cards" id="card-three"></div>
    </div>
  );
};

export default Scroll;
