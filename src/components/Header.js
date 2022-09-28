import React from "react";
import "./HeaderStyle.css";
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { RiArticleLine, RiLightbulbLine } from "react-icons/ri";
import { TbSwitchHorizontal } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";

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
      document.body.style.background = "#537F6B";
    } else {
      document.body.style.background = "white";
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
            <svg width="100" height="100" viewBox="0 0 1000 1000" fill="none">
              <path d="M355 692C352 692 348.667 690.833 345 688.5C341.667 686.5 340 684.333 340 682L340.5 649C340.5 631.333 338.833 613.833 335.5 596.5C332.167 579.167 326.167 562.167 317.5 545.5C315.833 541.5 313.5 537.5 310.5 533.5C296.167 537.833 281 541.333 265 544L250 548C228.667 578 206.833 607.167 184.5 635.5L182 636.5C178.667 636.5 176.333 635 175 632L234 552C218 555 202.833 557.333 188.5 559C179.167 559 170.5 556.667 162.5 552C154.833 547 149.5 539.833 146.5 530.5C145.5 526.167 145 522 145 518C145 506.333 148.667 496.167 156 487.5C163.667 478.833 173.167 472.167 184.5 467.5C195.833 462.5 207 460 218 460L227.5 461C246.833 463.667 264.167 471.167 279.5 483.5L289 469C325.333 413.333 359.333 356.5 391 298.5C392.333 296.833 394 296 396 296C399.333 296 402.833 297.333 406.5 300C410.5 302.667 412.5 305.5 412.5 308.5V309C400.5 373.333 389.833 438.333 380.5 504C389.167 501.667 397.667 500.5 406 500.5C412.667 500.5 418.833 501.667 424.5 504C429.5 505.667 432 507.5 432 509.5L429.5 510.5H422C409.667 510.5 397.167 512.333 384.5 516C382.833 517 380.5 517.5 377.5 517.5C370.5 570.833 365.167 624.5 361.5 678.5C361.5 680.833 361.167 684 360.5 688C360.5 691 358.667 692.333 355 692ZM315.5 518L356.5 508.5C363.167 459.167 371.167 410 380.5 361C355.167 399.333 329.167 437.333 302.5 475L291 492C300 499.667 308.167 508.333 315.5 518ZM180.5 546.5C186.167 546.5 192 545.667 198 544L246 534.5C255.333 519.5 265.167 505.333 275.5 492C259.5 478.667 242.5 472 224.5 472L212.5 473C192.5 477.667 177.667 488.333 168 505C164.667 512.333 163 519.5 163 526.5L164 534.5C165.333 539.167 167.5 542.333 170.5 544C173.5 545.667 176.833 546.5 180.5 546.5ZM263.5 530.5L302.5 521C297.5 513.333 291.667 506.333 285 500L263.5 530.5ZM347.5 580C349.5 561 351.833 542 354.5 523L324 530C334 545.667 341.833 562.333 347.5 580ZM467.324 588C462.991 588 460.158 587.667 458.824 587C457.158 586.333 454.991 585 452.324 583C449.658 580 448.324 577.333 448.324 575C453.991 544.667 461.991 515.5 472.324 487.5C473.658 485.833 475.324 485 477.324 485L483.324 486L489.824 489C493.824 491 495.824 493.5 495.824 496.5L484.824 536C491.491 524.333 498.991 514 507.324 505C510.991 499.667 515.658 494.333 521.324 489C527.324 483.333 533.658 480.5 540.324 480.5C543.991 480.5 547.824 482 551.824 485C557.491 490.333 560.324 497.333 560.324 506C560.324 514.333 558.991 523 556.324 532C553.658 540.667 551.658 548.167 550.324 554.5V558.5C550.324 560.833 552.158 562.167 555.824 562.5L559.824 564C562.491 564 564.658 562.667 566.324 560L582.824 545C593.824 532.333 603.991 519.833 613.324 507.5L615.324 507C617.991 507 620.158 508.333 621.824 511C614.491 523.667 604.991 534.667 593.324 544C589.324 549 584.658 554.667 579.324 561C574.324 567 569.158 571.167 563.824 573.5L556.824 575C550.158 575 544.658 571.667 540.324 565C536.324 558 534.324 551.333 534.324 545C534.324 537 535.158 529.333 536.824 522C538.824 514.333 540.158 506.333 540.824 498L542.324 490L539.824 489C537.824 489 535.658 490 533.324 492C531.324 493.667 529.824 494.833 528.824 495.5L512.824 513C504.824 524 497.158 535.667 489.824 548L475.324 573.5L472.324 585.5C472.324 586.833 471.658 587.667 470.324 588C468.991 588 467.991 588 467.324 588ZM641.738 583H639.738C627.405 582 618.905 578 614.238 571C609.238 564 606.738 555.667 606.738 546C606.738 535.667 608.572 525.167 612.238 514.5C615.572 503.833 619.238 494.833 623.238 487.5C624.905 485.5 626.905 484.5 629.238 484.5C632.905 484.5 636.738 485.833 640.738 488.5C644.738 490.833 646.738 493.5 646.738 496.5L646.238 498C638.238 514.333 632.905 531.833 630.238 550.5L628.238 563.5C628.238 565.833 628.572 568.167 629.238 570.5C630.238 572.5 631.905 574 634.238 575L638.238 576C641.905 576 646.072 574.667 650.738 572C655.405 569.333 659.238 567.167 662.238 565.5C676.905 557.833 689.905 548.5 701.238 537.5C712.905 526.5 724.072 514.833 734.738 502.5L736.238 501.5C738.238 501.5 740.238 503.167 742.238 506.5L741.738 507.5C727.072 524.833 710.405 541 691.738 556C685.072 562 677.238 568 668.238 574C659.572 580 650.738 583 641.738 583ZM650.238 467C647.238 467 644.072 466.167 640.738 464.5C636.405 462.833 633.238 459.833 631.238 455.5C631.238 452.5 632.238 450.167 634.238 448.5C634.238 446.833 634.572 445.5 635.238 444.5C635.238 442.833 636.738 442 639.738 442L642.238 441.5L650.238 443C653.572 444.667 656.238 447 658.238 450L659.238 453.5L658.238 456.5L656.738 459.5C656.738 461.833 655.905 464 654.238 466L650.238 467ZM737.332 596.5C733.999 596.5 729.999 595.167 725.332 592.5C720.332 589.833 717.832 587.167 717.832 584.5L718.332 583C727.332 541 737.665 499.333 749.332 458L769.332 396C774.665 375.333 782.332 355.167 792.332 335.5C793.665 333.833 795.332 333 797.332 333C800.999 333 804.665 334.333 808.332 337C811.999 339.333 813.832 342 813.832 345V346.5C808.165 366.5 801.332 386.667 793.332 407L773.332 468.5L759.832 522.5C765.499 518.833 770.832 514.333 775.832 509C782.499 503.333 787.499 497 790.832 490C793.832 484.667 797.332 479.833 801.332 475.5L803.832 475C806.499 475 809.999 476 814.332 478C818.665 480 820.832 482.167 820.832 484.5L820.332 486C813.999 499.333 805.499 511.5 794.832 522.5C787.832 529.167 780.165 534.5 771.832 538.5C777.832 544.5 784.165 549.833 790.832 554.5C794.499 556.5 797.999 557.5 801.332 557.5C811.332 557.5 820.832 553 829.832 544C834.499 539.333 838.499 533.833 841.832 527.5C845.499 520.833 850.165 514 855.832 507H856.832C858.832 507 860.832 508.333 862.832 511C850.832 537 833.999 554.667 812.332 564L802.332 565.5C796.332 565.5 790.665 564.167 785.332 561.5C780.999 559.167 776.332 555.833 771.332 551.5C766.332 547.167 761.499 545 756.832 545H753.332L742.332 593.5C742.332 595.5 740.665 596.5 737.332 596.5Z" />
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
            href="./assets/resume-of-anik.pdf"
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

          <a
            className="icon-hide-mb"
            href="https://github.com/heyanik"
            target="blank"
          >
            <FiGithub
              style={{
                height: "19.19px",
                width: "19.19px",
                marginTop: "5px",
                color: "#555555;",
              }}
            />
          </a>
          <a href="https://twitter.com/hianikdaspartha" target="blank">
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
          <TbSwitchHorizontal
            style={{
              height: "19.19px",
              width: "19.19px",
            }}
            className="dark-btn"
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
