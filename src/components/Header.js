import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { RiArticleLine, RiLightbulbLine } from "react-icons/ri";
// import { TbSwitchHorizontal } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
// import { Markdown } from "markdown-to-jsx";

const Header = () => {
  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    if (darkMode) {
      document.body.style.background = "#fff";
    } else {
      document.body.style.backgroundColor = "white";
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <>
      <div className="sticky">
        <Link to="/" style={{ transition: "all 0.8s" }}>
          <div className="me-icon">
            {" "}
            <svg
              width="100"
              height="100"
              viewBox="0 0 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M412 806.6C407.2 806.6 401.867 804.733 396 801C390.667 797.8 388 794.333 388 790.6L388.8 737.8C388.8 709.533 386.133 681.533 380.8 653.8C375.467 626.067 365.867 598.867 352 572.2C349.333 565.8 345.6 559.4 340.8 553C317.867 559.933 293.6 565.533 268 569.8L244 576.2C209.867 624.2 174.933 670.867 139.2 716.2L135.2 717.8C129.867 717.8 126.133 715.4 124 710.6L218.4 582.6C192.8 587.4 168.533 591.133 145.6 593.8C130.667 593.8 116.8 590.067 104 582.6C91.7333 574.6 83.2 563.133 78.4 548.2C76.8 541.267 76 534.6 76 528.2C76 509.533 81.8667 493.267 93.6 479.4C105.867 465.533 121.067 454.867 139.2 447.4C157.333 439.4 175.2 435.4 192.8 435.4L208 437C238.933 441.267 266.667 453.267 291.2 473L306.4 449.8C364.533 360.733 418.933 269.8 469.6 177C471.733 174.333 474.4 173 477.6 173C482.933 173 488.533 175.133 494.4 179.4C500.8 183.667 504 188.2 504 193V193.8C484.8 296.733 467.733 400.733 452.8 505.8C466.667 502.067 480.267 500.2 493.6 500.2C504.267 500.2 514.133 502.067 523.2 505.8C531.2 508.467 535.2 511.4 535.2 514.6L531.2 516.2H519.2C499.467 516.2 479.467 519.133 459.2 525C456.533 526.6 452.8 527.4 448 527.4C436.8 612.733 428.267 698.6 422.4 785C422.4 788.733 421.867 793.8 420.8 800.2C420.8 805 417.867 807.133 412 806.6ZM348.8 528.2L414.4 513C425.067 434.067 437.867 355.4 452.8 277C412.267 338.333 370.667 399.133 328 459.4L309.6 486.6C324 498.867 337.067 512.733 348.8 528.2ZM132.8 573.8C141.867 573.8 151.2 572.467 160.8 569.8L237.6 554.6C252.533 530.6 268.267 507.933 284.8 486.6C259.2 465.267 232 454.6 203.2 454.6L184 456.2C152 463.667 128.267 480.733 112.8 507.4C107.467 519.133 104.8 530.6 104.8 541.8L106.4 554.6C108.533 562.067 112 567.133 116.8 569.8C121.6 572.467 126.933 573.8 132.8 573.8ZM265.6 548.2L328 533C320 520.733 310.667 509.533 300 499.4L265.6 548.2ZM400 627.4C403.2 597 406.933 566.6 411.2 536.2L362.4 547.4C378.4 572.467 390.933 599.133 400 627.4ZM540.519 802.6C514.919 802.6 490.652 795.4 467.719 781C453.852 770.867 443.719 759.133 437.319 745.8C430.919 733 427.719 719.667 427.719 705.8C427.719 680.733 436.519 657 454.119 634.6C493.585 589.8 540.252 556.2 594.119 533.8L602.919 501C627.985 421.533 654.385 342.867 682.119 265L686.119 262.6L697.319 260.2C701.585 260.2 705.052 261.8 707.719 265C710.385 268.2 712.519 270.867 714.119 273C715.719 274.6 716.519 277 716.519 280.2C716.519 283.933 714.919 289 711.719 295.4C709.052 301.267 707.185 306.067 706.119 309.8L684.519 372.2L638.919 512.2C651.719 507.4 665.319 502.867 679.719 498.6C694.119 494.333 707.985 492.2 721.319 492.2C738.385 492.2 753.319 497.267 766.119 507.4L767.719 509.8H763.719C755.185 503.4 745.585 500.2 734.919 500.2C721.585 500.2 707.985 503.133 694.119 509C680.785 514.333 669.052 519.667 658.919 525C649.319 528.733 639.985 533.8 630.919 540.2C606.385 605.267 590.652 671.667 583.719 739.4V744.2C582.119 748.467 578.919 750.6 574.119 750.6C568.785 750.6 563.185 748.733 557.319 745C551.985 741.267 549.319 737.267 549.319 733C553.052 677 564.519 622.067 583.719 568.2C559.719 583.133 535.719 601.267 511.719 622.6C488.252 643.933 472.785 667.933 465.319 694.6C462.652 702.6 461.319 711.133 461.319 720.2C461.319 728.733 462.919 737.267 466.119 745.8C469.852 754.333 475.185 761.533 482.119 767.4C494.385 776.467 507.985 781 522.919 781C534.119 781 545.052 779.4 555.719 776.2C579.185 769.267 601.852 758.067 623.719 742.6C645.585 727.133 665.852 711.133 684.519 694.6C758.119 626.867 810.385 545.267 841.319 449.8C846.119 432.733 850.119 415.133 853.319 397C857.052 378.867 858.919 360.733 858.919 342.6C858.919 321.8 855.985 301.533 850.119 281.8C829.852 226.867 791.719 194.6 735.719 185H720.519C675.719 185 633.585 200.2 594.119 230.6C580.252 241.8 567.985 255.667 557.319 272.2C547.185 288.2 542.119 305 542.119 322.6C542.119 335.4 545.852 348.467 553.319 361.8C553.319 363.4 553.052 363.933 552.519 363.4L542.919 359.4C532.785 345.533 527.719 331.133 527.719 316.2C527.719 294.867 534.919 274.6 549.319 255.4C564.252 236.2 580.519 220.733 598.119 209C634.919 183.4 674.385 170.6 716.519 170.6C737.319 170.6 757.319 174.067 776.519 181C830.385 203.4 865.585 242.067 882.119 297C887.985 318.333 890.919 339.933 890.919 361.8C890.919 384.733 888.252 407.667 882.919 430.6C877.585 453.533 870.919 475.667 862.919 497C841.052 554.6 809.585 608.2 768.519 657.8C727.985 707.933 680.519 748.2 626.119 778.6C597.852 794.6 569.319 802.6 540.519 802.6Z" />
            </svg>{" "}
          </div>
        </Link>
      </div>
      <div className="header" id="header">
        <div className="other">
          <Link
            to="/blogs"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            <a className="icon-hide-mb">Blog</a>
          </Link>
          <Link
            to="/projects"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            {" "}
            <a className="icon-hide-mb">Projects</a>
          </Link>
          <Link
            to="/hobby/reading"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            {" "}
            <a className="icon-hide-mb">Hobby</a>
          </Link>
          <Link
            to="/blogs"
            style={{ textDecoration: "none", transition: "all 0.8s" }}
          >
            <a className="icon-hide-pc">
              <RiArticleLine
                style={{
                  height: "19.19px",
                  width: "19.19px",
                  marginTop: "5px",
                }}
              />
            </a>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <a className="icon-hide-pc">
              <RiLightbulbLine
                style={{
                  height: "19.19px",
                  width: "19.19px",
                  marginTop: "5px",
                }}
              />
            </a>
          </Link>
          <a
            className="icon-hide-mb"
            target="blank"
            href="https://drive.google.com/file/d/1BeizlYMYY7KofDT1PYa3th0DVA3vn155/view?usp=share_link"
            download
          >
            <HiOutlineDocumentText
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
                color: "#555555;",
              }}
            />
          </a>

          <a href="https://github.com/heyanik" target="blank">
            <FiGithub
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
                color: "#555555;",
              }}
            />
          </a>
          <a
            className="icon-hide-mb"
            href="https://twitter.com/hianikdaspartha"
            target="blank"
          >
            <FiTwitter
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/anikdaspartha/" target="blank">
            <FiLinkedin
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
              }}
            />
          </a>
          {/* <TbSwitchHorizontal
            style={{
              height: "19.19px",
              width: "19.19px",
            }}
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
