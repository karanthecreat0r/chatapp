import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Button as MuiButton } from "@mui/material";
import { Button as BsButton } from "react-bootstrap";
import styles from "./YourDesign.module.css";

const YourDesign = () => {
  const onGroupLinkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleIFrame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGroupLink1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleIFrame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactLinkClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pexelsCanvaStudio31532011Image']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSeemlessLinkClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='directMessagingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPriceLinkClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleIFrame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onChatappTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <section className={styles.yourDesignSection}>
      <div
        className={styles.rectangleDiv}
        data-scroll-to="rectangleRectangle"
      />
      <iframe
        className={styles.rectangleIframe}
        data-scroll-to="rectangleIFrame"
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <img className={styles.groupIcon} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon1} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon2} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon3} alt="" src="../group-1.svg" />
      <img className={styles.groupIcon4} alt="" src="../group-1.svg" />
      <h1 className={styles.haveYourBestCall}>
        <p className={styles.haveYourBest}>{`Have your best `}</p>
        <p className={styles.callP}>call</p>
      </h1>
      <h3 className={styles.instantConferenceCalls}>
        Instant Conference calls
      </h3>
      <h1 className={styles.perfectSollutionForSmallBu}>
        Perfect sollution for small bussiness
      </h1>
      <h1 className={styles.loremIpsumDolorSitAmetCo}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </h1>
      <h3 className={styles.loremIpsumDolorSitAme}>
        Lorem ipsum dolor sit ame
      </h3>
      <h3 className={styles.loremIpsumDolorSitAmeLoolo}>
        Lorem ipsum dolor sit ameLoolor sit ame
      </h3>
      <h4 className={styles.supportH4}>Support</h4>
      <h4 className={styles.knowlwdgeH4}>Knowlwdge</h4>
      <h4 className={styles.copyrightWithKaranSparrowI}>
        <span className={styles.copyrightWithKaranSparrow}>
          <span className={styles.span}>©</span>
          <span> Copyright with Karan sparrow Inc.</span>
        </span>
      </h4>
      <h5 className={styles.allRightsReceived}>All Rights received</h5>
      <h4 className={styles.screenShareingH4}>Screen shareing</h4>
      <h4 className={styles.aboutUsH4}>About us</h4>
      <h4 className={styles.infochatappcomH4}>info@chatapp.com</h4>
      <h4 className={styles.iosAndroidApps}>{`ios & android apps`}</h4>
      <h4 className={styles.carrersH4}>Carrers</h4>
      <h4 className={styles.h4}>1-2000-3300</h4>
      <h4 className={styles.fileSharingH4}>File Sharing</h4>
      <h4 className={styles.contactUsH4}>Contact Us</h4>
      <h4 className={styles.deerParkPaloAltoCA}>3500 Deer park palo Alto,CA</h4>
      <h4 className={styles.userManagementH4}>User Management</h4>
      <h4 className={styles.helpH4}>Help</h4>
      <h4 className={styles.featuresH4}>Features</h4>
      <h4 className={styles.compenyH4}>Compeny</h4>
      <h4 className={styles.contactUsH41}>Contact us</h4>
      <div className={styles.businessChatAppAndRateItA}>
        <b>6,1222 business</b>
        <span>{` ChatApp and rate it as `}</span>
        <b>5-stars</b>
      </div>
      <div
        className={styles.fastEasyUnlimitedConfere}
      >{`Fast, easy & unlimited conference call service`}</div>
      <a className={styles.groupA} onClick={onGroupLinkClick}>
        <button className={styles.rectangleButton} autoFocus />
        <h3 className={styles.tryFreeH3}>Try free</h3>
      </a>
      <h2 className={styles.tryFreeH2}>Try free</h2>
      <a className={styles.groupA1} onClick={onGroupLink1Click}>
        <div className={styles.rectangleDiv4} />
        <h2 className={styles.getDemoH2}>Get Demo</h2>
      </a>
      <h2 className={styles.getDemoH21}>Get Demo</h2>
      <img
        className={styles.pexelsAndreaPiacquadio77490Icon}
        alt=""
        src="../pexelsandreapiacquadio774909-1@2x.png"
      />
      <img
        className={styles.pexelsRodolfoQuirs2219118Icon}
        alt=""
        src="../pexelsrodolfoquirs2219118-1@2x.png"
      />
      <Button
        className={styles.item4Button}
        sx={{ width: 292 }}
        variant="outlined"
      >
        I remember everything mate. See you later 🤘
      </Button>
      <img className={styles.item3Icon} alt="" src="../item-3.svg" />
      <div className={styles.chatDiv}>
        <div className={styles.messagesDiv}>
          <BsButton className={styles.item2BsButton} variant="primary">
            Oh, hello! All perfectly. I work, study and know this wonderful
            world!
          </BsButton>
          <MuiButton
            className={styles.item1MuiButton}
            sx={{ width: 167.4221649169922 }}
            variant="outlined"
          >
            Hi Alex! What’s Up?
          </MuiButton>
        </div>
      </div>
      <a className={styles.chatapp}>
        <b>Chat</b>
        <span>app</span>
      </a>
      <h5 className={styles.productH5}>Product</h5>
      <a className={styles.contact} onClick={onContactLinkClick}>
        Contact
      </a>
      <a className={styles.seemlessA} onClick={onSeemlessLinkClick}>
        seemless
      </a>
      <a className={styles.priceA} onClick={onPriceLinkClick}>
        Price
      </a>
      <button
        className={styles.rectangleButton1}
        onClick={onRectangleButton1Click}
        data-animate-on-scroll
      />
      <h5 className={styles.tryItFree}>Try it Free</h5>
      <div className={styles.groupDiv}>
        <div
          className={styles.directMessagingDiv}
          data-scroll-to="directMessagingContainer"
        >
          <div className={styles.backgroundCardDiv} />
          <div className={styles.chatDiv1}>
            <div className={styles.sendMessageDiv}>
              <div className={styles.placeholderDiv}>
                <div className={styles.placeholderDiv1} />
              </div>
              <div className={styles.inputDiv}>
                <div className={styles.baseDiv} />
                <div className={styles.typeAMessageHere}>
                  Type a message here…
                </div>
              </div>
              <img
                className={styles.attachFileIcon}
                alt=""
                src="../attach-file.svg"
              />
              <img
                className={styles.microphoneIcon}
                alt=""
                src="../microphone.svg"
              />
              <img
                className={styles.addEmojiIcon}
                alt=""
                src="../add-emoji.svg"
              />
              <div className={styles.emojiListDiv}>
                <img
                  className={styles.combinedShapeIcon}
                  alt=""
                  src="../combined-shape.svg"
                />
                <img
                  className={styles.optionsIcon}
                  alt=""
                  src="../options.svg"
                />
                <div className={styles.emojiDiv}>
                  <div className={styles.div}>💪</div>
                  <div className={styles.div1}>😎</div>
                  <div className={styles.div2}>🙏</div>
                  <div className={styles.div3}>👌</div>
                  <div className={styles.div4}>☝</div>
                  <div className={styles.div5}>👍</div>
                  <div className={styles.div6}>😆</div>
                  <div className={styles.div7}>😊</div>
                </div>
              </div>
              <img
                className={styles.sendButtonIcon}
                alt=""
                src="../send-button.svg"
              />
            </div>
            <div className={styles.messagesDiv1}>
              <div className={styles.item4Div}>
                <div className={styles.messageDiv}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="../placeholder.svg"
                  />
                  <div className={styles.valueDiv}>
                    <b>{`I remember everything mate. See you later `}</b>
                    <span className={styles.span1}>🤘</span>
                  </div>
                </div>
                <div className={styles.dateDiv}>
                  <div className={styles.today0618AM}>Today 06:18 AM</div>
                </div>
              </div>
              <div className={styles.item3Div}>
                <div className={styles.messageDiv1}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="../placeholder1.svg"
                  />
                  <b className={styles.valueB}>01:24</b>
                  <div className={styles.timelineDiv}>
                    <div className={styles.timelineDiv1}>
                      <div className={styles.rectangle187Copy3} />
                      <div className={styles.rectangle187Copy4} />
                      <div className={styles.rectangle187Copy2} />
                      <div className={styles.rectangleDiv5} />
                      <div className={styles.rectangleDiv6} />
                      <div className={styles.rectangleDiv7} />
                      <div className={styles.rectangleDiv8} />
                      <div className={styles.rectangleDiv9} />
                      <div className={styles.rectangle187Copy} />
                      <div className={styles.rectangleDiv10} />
                      <div className={styles.rectangleDiv11} />
                      <div className={styles.rectangleDiv12} />
                      <div className={styles.rectangleDiv13} />
                      <div className={styles.rectangleDiv14} />
                      <div className={styles.rectangleDiv15} />
                      <div className={styles.rectangleDiv16} />
                      <div className={styles.rectangleDiv17} />
                      <div className={styles.rectangleDiv18} />
                      <div className={styles.rectangleDiv19} />
                      <div className={styles.rectangleDiv20} />
                      <div className={styles.rectangleDiv21} />
                      <div className={styles.rectangleDiv22} />
                      <div className={styles.rectangleDiv23} />
                      <div className={styles.rectangleDiv24} />
                      <div className={styles.rectangleDiv25} />
                      <div className={styles.rectangleDiv26} />
                      <div className={styles.rectangleDiv27} />
                      <div className={styles.rectangleDiv28} />
                      <div className={styles.rectangleDiv29} />
                      <div className={styles.rectangleDiv30} />
                      <div className={styles.rectangleDiv31} />
                      <div className={styles.rectangleDiv32} />
                      <div className={styles.rectangleDiv33} />
                      <div className={styles.rectangleDiv34} />
                      <div className={styles.rectangleDiv35} />
                      <div className={styles.rectangleDiv36} />
                      <div className={styles.rectangleDiv37} />
                      <div className={styles.rectangleDiv38} />
                      <div className={styles.rectangleDiv39} />
                      <div className={styles.rectangleDiv40} />
                      <div className={styles.rectangleDiv41} />
                      <div className={styles.rectangleDiv42} />
                      <div className={styles.rectangleDiv43} />
                      <div className={styles.rectangleDiv44} />
                      <div className={styles.rectangleDiv45} />
                      <div className={styles.rectangleDiv46} />
                      <div className={styles.rectangleDiv47} />
                      <div className={styles.rectangleDiv48} />
                      <div className={styles.rectangleDiv49} />
                      <div className={styles.rectangleDiv50} />
                      <div className={styles.rectangleDiv51} />
                      <div className={styles.rectangleDiv52} />
                      <div className={styles.rectangle187Copy31} />
                      <div className={styles.rectangle187Copy41} />
                      <div className={styles.rectangle187Copy6} />
                      <div className={styles.rectangle187Copy7} />
                      <div className={styles.rectangle187Copy21} />
                      <div className={styles.rectangleDiv53} />
                      <div className={styles.rectangle187Copy1} />
                    </div>
                  </div>
                  <img className={styles.playIcon} alt="" src="../play.svg" />
                </div>
                <div className={styles.dateDiv1}>
                  <div className={styles.yesterday1926PM}>
                    Yesterday 19:26 PM
                  </div>
                </div>
              </div>
              <div className={styles.item2Div}>
                <div className={styles.messageDiv2}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="../placeholder2.svg"
                  />
                  <b className={styles.valueB1}>
                    <p className={styles.haveYourBest}>
                      Oh, hello! All perfectly.
                    </p>
                    <p className={styles.callP}>
                      I work, study and know this wonderful world!
                    </p>
                  </b>
                </div>
                <div className={styles.dateDiv2}>
                  <div className={styles.yesterday1926PM}>
                    Yesterday 14:38 PM
                  </div>
                </div>
              </div>
              <div className={styles.item1Div}>
                <div className={styles.messageDiv3}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="../placeholder3.svg"
                  />
                  <b className={styles.valueB2}>Hi Alex! What’s Up?</b>
                </div>
                <div className={styles.dateDiv3}>
                  <div className={styles.yesterday1926PM}>
                    Yesterday 14:26 PM
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerDiv}>
              <div className={styles.lineDiv} />
              <img
                className={styles.optionsIcon1}
                alt=""
                src="../options1.svg"
              />
              <img
                className={styles.videoCallIcon}
                alt=""
                src="../video-call.svg"
              />
              <img className={styles.callIcon} alt="" src="../call.svg" />
              <div className={styles.userInformationDiv}>
                <div className={styles.lastSeenDiv}>
                  <div className={styles.lastSeen3HoursAg}>
                    Last seen 3 hours ago
                  </div>
                  <img
                    className={styles.oval2Icon}
                    alt=""
                    src="../oval-2.svg"
                  />
                </div>
                <div className={styles.onlineDiv}>
                  <div className={styles.offlineDiv}>Offline</div>
                </div>
                <div className={styles.nameDiv}>
                  <div className={styles.tobiasWilliamsDiv}>
                    Tobias Williams
                  </div>
                </div>
                <img className={styles.avatarIcon} alt="" src="../avatar.svg" />
              </div>
            </div>
          </div>
          <div className={styles.aboutUserDiv}>
            <div className={styles.backgroundDiv}>
              <div className={styles.placeholderDiv2} />
              <div className={styles.lineDiv1} />
            </div>
            <div className={styles.mediaFilesDiv}>
              <div className={styles.imagesDiv}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="../image@2x.png"
                />
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="../image@2x.png"
                />
                <img
                  className={styles.imageIcon2}
                  alt=""
                  src="../image2@2x.png"
                />
              </div>
              <div className={styles.titleDiv}>
                <div className={styles.linkAllDiv}>
                  <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
                  <div className={styles.seeAllDiv}>See all</div>
                </div>
                <b className={styles.media31B}>Media (31)</b>
              </div>
            </div>
            <div className={styles.contactsDiv}>
              <div className={styles.lineDiv2} />
              <div className={styles.dOBDiv}>
                <div className={styles.div8}>14.05.1992</div>
                <b className={styles.dOB}>DOB:</b>
              </div>
              <div className={styles.eMailDiv}>
                <div className={styles.infouxdesignerimDiv}>
                  info@uxdesigner.im
                </div>
                <b className={styles.eMailB}>E-mail:</b>
              </div>
              <div className={styles.phoneDiv}>
                <div className={styles.div9}>+(33 1) 45 55 01 10</div>
                <b className={styles.phoneB}>Phone:</b>
              </div>
              <div className={styles.lineDiv3} />
            </div>
            <img className={styles.socialIcon} alt="" src="../social.svg" />
            <div className={styles.activityDiv}>
              <div className={styles.helpPeopleToBuild}>
                <span>{`Help people to build websites and apps + grow awareness in social media `}</span>
                <span className={styles.span1}>🔥</span>
              </div>
            </div>
            <div className={styles.placeDiv}>
              <div className={styles.parisFranceDiv}>Paris, France</div>
            </div>
            <div className={styles.nameDiv1}>
              <div className={styles.tobiasWilliamsDiv1}>Tobias Williams</div>
            </div>
            <img className={styles.avatarIcon1} alt="" src="../avatar1.svg" />
            <img className={styles.crossIcon} alt="" src="../cross.svg" />
          </div>
          <div className={styles.dialoguesDiv}>
            <div className={styles.backgroundDiv1}>
              <div className={styles.placeholderDiv3} />
              <div className={styles.lineDiv4} />
            </div>
            <div className={styles.dialogueItemsDiv}>
              <div className={styles.item5Div}>
                <div className={styles.placeholderDiv4} />
                <div className={styles.messageDiv4}>
                  <div className={styles.welcomeToTheCommu}>
                    <span>{`Welcome to the community mate! `}</span>
                    <span className={styles.span1}>👍</span>
                  </div>
                  <div className={styles.countDiv}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="../dot.svg"
                    />
                    <div className={styles.div10}>1</div>
                  </div>
                </div>
                <div className={styles.timeDiv}>
                  <div className={styles.sep2018Div}>15 Sep 2018</div>
                </div>
                <div className={styles.onlineDiv1}>
                  <div className={styles.onlineDiv2}>Online</div>
                </div>
                <div className={styles.nameDiv2}>
                  <div className={styles.stevenNortonDiv}>Steven Norton</div>
                </div>
                <img
                  className={styles.avatarIcon2}
                  alt=""
                  src="../avatar2.svg"
                />
              </div>
              <div className={styles.item4Div1}>
                <div className={styles.placeholderDiv5} />
                <div className={styles.messageDiv5}>
                  <div className={styles.iWillMissYouToo}>
                    I will miss you, too, my dear!
                  </div>
                  <img className={styles.replyIcon} alt="" src="../reply.svg" />
                  <div className={styles.countDiv1}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="../dot1.svg"
                    />
                    <div className={styles.div10}>2</div>
                  </div>
                </div>
                <div className={styles.timeDiv}>
                  <div className={styles.sep2018Div}>15 Sep 2018</div>
                </div>
                <div className={styles.onlineDiv1}>
                  <div className={styles.onlineDiv2}>Online</div>
                </div>
                <div className={styles.nameDiv3}>
                  <div className={styles.jenniferWatkinsDiv}>
                    Jennifer Watkins
                  </div>
                </div>
                <img
                  className={styles.avatarIcon2}
                  alt=""
                  src="../avatar3.svg"
                />
              </div>
              <div className={styles.item3Div1}>
                <div className={styles.placeholderDiv6} />
                <div className={styles.lineDiv5}>
                  <div className={styles.shadowDiv} />
                  <div className={styles.baseDiv1} />
                </div>
                <div className={styles.messageDiv6}>
                  <div className={styles.iWillMissYouToo}>
                    <span>{`I remember everything mate. See you later `}</span>
                    <span className={styles.span1}>🤘</span>
                  </div>
                  <img
                    className={styles.replyIcon1}
                    alt=""
                    src="../reply1.svg"
                  />
                  <div className={styles.countDiv2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="../dot2.svg"
                    />
                    <div className={styles.div10}>2</div>
                  </div>
                </div>
                <div className={styles.timeDiv2}>
                  <div className={styles.amDiv}>06:18 am</div>
                </div>
                <div className={styles.onlineDiv5}>
                  <div className={styles.offlineDiv}>Offline</div>
                </div>
                <div className={styles.nameDiv4}>
                  <div className={styles.tobiasWilliamsDiv}>
                    Tobias Williams
                  </div>
                </div>
                <img
                  className={styles.avatarIcon2}
                  alt=""
                  src="../avatar4.svg"
                />
              </div>
              <div className={styles.item2Div1}>
                <div className={styles.placeholderDiv5} />
                <div className={styles.messageDiv5}>
                  <div className={styles.itSeemsLogicalTha}>
                    It seems logical that the strategy of providing!
                  </div>
                  <div className={styles.countDiv3}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="../dot3.svg"
                    />
                    <div className={styles.div10}>2</div>
                  </div>
                </div>
                <div className={styles.timeDiv3}>
                  <div className={styles.pmDiv}>14:45 pm</div>
                </div>
                <div className={styles.onlineDiv5}>
                  <div className={styles.offlineDiv2}>Offline</div>
                </div>
                <div className={styles.nameDiv5}>
                  <div className={styles.annaDormunDiv}>Anna Dormun</div>
                </div>
                <img
                  className={styles.avatarIcon2}
                  alt=""
                  src="../avatar5.svg"
                />
              </div>
              <div className={styles.item1Div1}>
                <div className={styles.placeholderDiv8} />
                <div className={styles.messageDiv4}>
                  <div className={styles.analysisOfForeign}>
                    Analysis of foreign experience, as it is commo…
                  </div>
                  <div className={styles.countDiv}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="../dot4.svg"
                    />
                    <div className={styles.div10}>2</div>
                  </div>
                </div>
                <div className={styles.timeDiv4}>
                  <div className={styles.hAgoDiv}>3h ago</div>
                </div>
                <div className={styles.onlineDiv1}>
                  <div className={styles.onlineDiv2}>Online</div>
                </div>
                <div className={styles.nameDiv6}>
                  <div className={styles.donaldJohnsonDiv}>Donald Johnson</div>
                </div>
                <img
                  className={styles.avatarIcon2}
                  alt=""
                  src="../avatar6.svg"
                />
              </div>
            </div>
            <div className={styles.actionsDiv}>
              <div className={styles.addNewDiv}>
                <img className={styles.dotIcon5} alt="" src="../dot5.svg" />
                <img className={styles.crossIcon1} alt="" src="../cross1.svg" />
                <b className={styles.addNewB}>Add New</b>
              </div>
              <div className={styles.drowdownSortBy}>
                <img
                  className={styles.arrowDownIcon}
                  alt=""
                  src="../arrow-down.svg"
                />
                <b className={styles.sortBy}>Sort By:</b>
                <div className={styles.latestFirstDiv}>Latest First</div>
              </div>
            </div>
            <div className={styles.headerDiv1}>
              <div className={styles.bookmarksDiv}>
                <img className={styles.shapeIcon} alt="" src="../shape.svg" />
                <b className={styles.b}>147</b>
              </div>
              <div className={styles.inputSearch}>
                <div className={styles.baseDiv2} />
                <div className={styles.valueDiv1}>Enter for search…</div>
                <img className={styles.searchIcon} alt="" src="../search.svg" />
              </div>
            </div>
          </div>
          <img
            className={styles.leftMenuIcon}
            alt=""
            src="../left-menu@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.icons8Star641}
        alt=""
        src="../icons8star64-1@2x.png"
      />
      <img
        className={styles.icons8Star642}
        alt=""
        src="../icons8star64-1@2x.png"
      />
      <img
        className={styles.icons8Star643}
        alt=""
        src="../icons8star64-1@2x.png"
      />
      <img
        className={styles.icons8Star644}
        alt=""
        src="../icons8star64-1@2x.png"
      />
      <img
        className={styles.icons8Star645}
        alt=""
        src="../icons8star64-1@2x.png"
      />
      <div className={styles.lineDiv6} />
      <img
        className={styles.pexelsCanvaStudio31532011Icon}
        alt=""
        src="../pexelscanvastudio3153201-1@2x.png"
        data-scroll-to="pexelsCanvaStudio31532011Image"
      />
      <a className={styles.chatapp1} onClick={onChatappTextClick}>
        <b>Chat</b>
        <span>app</span>
      </a>
    </section>
  );
};

export default YourDesign;
