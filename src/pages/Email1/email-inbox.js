import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import {
  Button,
  Card,
  Col,
  Container,
  Input,
  Label,
  Row,
  Nav,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavItem,
  NavLink,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import classnames from "classnames";

// import { map } from "lodash";

// Import Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import {
  getMailsLists as onGetMailsLists,
  getSelectedMails as onGetSelectedMails,
  updateMail as onUpdateMail
} from "store/mails/actions";

//Import Email Topbar
import EmailToolbar from "./email-toolbar";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { allmail, labelsData, mailChatData } from "common/data";
import { handleSearchData } from "components/Common/searchFile";
import Spinners from "components/Common/Spinner";
import { keyBy } from "lodash";

const EmailInbox = props => {

  //meta title
  document.title = "Inbox | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const selectMailsState = (state) => state.mails;
  const EmailProperties = createSelector(
    selectMailsState,
    (Mails) => ({
      mailslists: Mails.mailslists,
      selectedmails: Mails.selectedmails,
      loading: Mails.loading,
    }
    )
    
  );

  const {
    allmail,
    selectedmails,
    loading
  } = useSelector(EmailProperties);
  const [isLoading, setLoading] = useState(loading)

  const [mailsList, setMailsList] = useState();
  const [activeTab, setactiveTab] = useState(1);
  const [modal, setmodal] = useState(false);

  // useEffect(() => {
  //   dispatch(onGetMailsLists(0));
  // }, [dispatch]);

  useEffect(() => {
    console.log('mail')
    setMailsList(allmail)
    console.log('mail1')
    console.log(allmail)
  }, [allmail])
  
  const handleSelect = (selectedItems) => {
    // console.log('mail2')
    dispatch(onGetSelectedMails(selectedItems));
  };

  const hasStarred = (mail) => {
    const updateTodo = {
      id: mail.id,
      starred: !mail.starred
    };
    console.log(mail)
    console.log('mail3')
    dispatch(onUpdateMail(updateTodo));
  };

  // search 
  const [search, setSearch] = useState('');
  // useEffect(() => {
  //   handleSearchData({ setState: setMailsList, data: allmail, item: search })
  // }, [search])
  const allmail1 =
   [
    {
      id: 1,
      name: "Peter, me (3)",
      description: "<a class='subject' href='#'>Hello – <span class='teaser'>Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)</span></a>",
      read: true,
      fav: true,
      date: 'Mar 6',
      folder: 0,
      onclick : console.log('1')
    },
    {
      id: 2,
      name: "me, Susanna (7)",
      description: "<a href='#' class='subject'> <span class='bg-warning badge me-2'> Freelance </span> Since you asked... and i'm inconceivably bored at the train station – <span class='teaser'> Alright thanks. I'll have to re-book that somehow, i'll get back to you. </span></a>",
      read: true,
      fav: false,
      date: 'Mar 6',
      folder: 0
    },
    {
      id: 3,
      name: "Web Support Dennis",
      description: "<a href='#' class='subject'> Re: New mail settings – <span class='teaser'> Will you answer him asap? </span></a>",
      read: true,
      fav: false,
      date: 'Mar 7',
      folder: 1
    },
    {
      id: 4,
      name: "me, Peter (2)",
      description: "<a href='#' class='subject'> <span class='bg-info badge me-2'> Support </span> Off on Thursday - <span class='teaser'> Eff that place, you might as well stay here with us instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm </span></a>",
      read: true,
      fav: false,
      date: 'Mar 4',
      folder: 0
    },
    {
      id: 5,
      name: "Medium",
      description: "<a href='#' class='subject'> <span class='bg-primary badge me-2'> Social </span> This Week's Top Stories – <span class='teaser'> Our top pick for you on Medium this week The Man Who Destroyed America’s Ego </span></a>",
      read: true,
      fav: false,
      date: 'Feb 28',
      folder: 1
    },
    {
      id: 6,
      name: "Death to Stock",
      description: "<a href='#' class='subject'> Montly High-Res Photos – <span class='teaser'> To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio. </span></a>",
      read: true,
      fav: false,
      date: 'Feb 28',
      folder: 2
    },
    {
      id: 7,
      name: "Randy, me (5)",
      description: "<a href='#' class='subject'> <span class='bg-success badge me-2'> Family </span> Last pic over my village – <span class='teaser'> Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again! </span></a>",
      read: false,
      fav: false,
      date: '5:01 am',
      folder: 3
    },
    {
      id: 8,
      name: "Andrew Zimmer",
      description: "<a href='#' class='subject'> Mochila Beta: Subscription Confirmed – <span class='teaser'> You've been confirmed! Welcome to the ruling className of the inbox. For your records, here is a copy of the information you submitted to us... </span></a>",
      read: true,
      fav: false,
      date: 'Mar 8',
      folder: 0
    },
    {
      id: 9,
      name: "Infinity HR",
      description: "<a href='#' class='subject'> Sveriges Hetaste sommarjobb – <span class='teaser'> Hej Nicklas Sandell! Vi vill bjuda in dig till 'First tour 2014', ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige. </span></a>",
      read: true,
      fav: false,
      date: 'Mar 8',
      folder: 2
    },
    {
      id: 10,
      name: "Revibe",
      description: "<a href='#' class='subject'> <span class='bg-danger badge me-2'> Friends </span> Weekend on Revibe – <span class='teaser'> Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen! </span></a>",
      read: true,
      fav: false,
      date: 'Feb 27',
      folder: 3
    },
    {
      id: 11,
      name: "Erik, me (5)",
      description: "<a href='#' class='subject'> Regarding our meeting – <span class='teaser'> That's great, see you on Thursday! </span></a>",
      read: true,
      fav: false,
      date: 'Feb 24',
      folder: 5
    },
    {
      id: 12,
      name: "KanbanFlow",
      description: "<a href='#' class='subject'> <span class='bg-primary badge me-2'> Social </span> Task assigned: Clone ARP's website – <span class='teaser'> You have been assigned a task by Alex@Work on the board Web. </span></a>",
      read: true,
      fav: false,
      date: 'Feb 24',
      folder: 1
    },
    {
      id: 13,
      name: "Tobias Berggren",
      description: "<a href='#' class='subject'> Let's go fishing! – <span class='teaser'> Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome. </span></a>",
      read: true,
      fav: false,
      date: 'Feb 23',
      folder: 3
    },
    {
      id: 14,
      name: "Charukaw, me (7)",
      description: "<a href='#' class='subject'> Hey man – <span class='teaser'> Nah man sorry i don't. Should i get it? </span></a>",
      read: true,
      fav: false,
      date: 'Feb 23',
      folder: 4
    },
    {
      id: 15,
      name: "me, Peter (5)",
      description: "<a href='#' class='subject'> <span class='bg-info badge me-2'> Support </span> Home again! – <span class='teaser'> That's just perfect! See you tomorrow. </span></a>",
      read: false,
      fav: false,
      date: 'Feb 21',
      folder: 5
    },
    {
      id: 16,
      name: "Stack Exchange",
      description: "<a href='#' class='subject'> 1 new items in your Stackexchange inbox – <span class='teaser'> The following items were added to your Stack Exchange global inbox since you last checked it. </span></a>",
      read: true,
      fav: false,
      date: 'Feb 21',
      folder: 1
    },
    {
      id: 17,
      name: "Google Drive Team",
      description: "<a href='#' class='subject'> You can now use your storage in Google Drive – <span class='teaser'> Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive. </span></a>",
      read: true,
      fav: false,
      date: 'Feb 20',
      folder: 2
    },
    {
      id: 18,
      name: "me, Susanna (11)",
      description: "<a href='#' class='subject'> Train/Bus – <span class='teaser'> Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress. </span></a>",
      read: true,
      fav: false,
      date: 'Feb 19',
      folder: 3
    },
  ];
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Email" breadcrumbItem="Inbox" />

          <Row>
            <Col xs="12">
              {/* Render Email SideBar */}
              <Card className="email-leftbar">
                <Button
                  type="button"
                  color="danger"
                  onClick={() => {
                    setmodal(!modal);
                  }}
                  block
                >
                  Compose
                </Button>
                <div className="mail-list mt-4">
                  <Nav tabs className="nav-tabs-custom" vertical role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 0,
                        })}
                        onClick={() => {
                          setactiveTab(0);
                          dispatch(onGetMailsLists(0));
                        }}
                      >
                        <i className="mdi mdi-email-outline me-2"></i> Inbox{" "}
                        <span className="ml-1 float-end">(18)</span>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 6,
                        })}
                        onClick={() => {
                          setactiveTab(6);
                          dispatch(onGetMailsLists(6));
                        }}
                      >
                        <i className="mdi mdi-star-outline me-2"></i>Starred
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 1,
                        })}
                        onClick={() => {
                          setactiveTab(1);
                          dispatch(onGetMailsLists(1));
                        }}
                      >
                        <i className="mdi mdi-diamond-stone me-2"></i>Important
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 2,
                        })}
                        onClick={() => {
                          setactiveTab(2);
                          dispatch(onGetMailsLists(2));
                        }}
                      >
                        <i className="mdi mdi-file-outline me-2"></i>Draft
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 3,
                        })}
                        onClick={() => {
                          setactiveTab(3);
                          dispatch(onGetMailsLists(3));
                        }}
                      >
                        <i className="mdi mdi-email-check-outline me-2"></i>Sent
                        Mail
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 4,
                        })}
                        onClick={() => {
                          setactiveTab(4);
                          dispatch(onGetMailsLists(4));
                        }}
                      >
                        <i className="mdi mdi-trash-can-outline me-2"></i>Trash
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>

                <h6 className="mt-4">Labels</h6>

                <div className="mail-list mt-1">
                  {
                    (labelsData || []).map((item, index) => (
                      <Link to="#" key={index}><span className={item.icon}></span>{item.text}</Link>
                    ))
                  }
                </div>

                <h6 className="mt-4">Chat</h6>

                <div className="mt-2">
                  {
                    (mailChatData || []).map((item, index) => (
                      <Link to="#" className="d-flex" key={index}>
                        <div className="flex-shrink-0">
                          <img
                            className="d-flex me-3 rounded-circle"
                            src={item.imageSrc}
                            alt="skote"
                            height="36"
                          />
                        </div>
                        <div className="flex-grow-1 chat-user-box">
                          <p className="user-title m-0">{item.userTitle}</p>
                          <p className="text-muted">{item.textMessage}</p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </Card>

              <Modal
                isOpen={modal}
                autoFocus={true}
                centered={true}
                toggle={() => {
                  setmodal(!modal);
                }}
              >
                <div className="modal-content">
                  <ModalHeader
                    toggle={() => {
                      setmodal(!modal);
                    }}
                  >
                    New Message
                  </ModalHeader>
                  <ModalBody>
                    <form>
                      <div className="mb-3">
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="To"
                        />
                      </div>

                      <div className="mb-3">
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                      <Editor
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                      />
                      <div className="input-group mt-2">
                            <Input type="file" className="form-control" id="inputGroupFile02" />
                            {/* <Label className="input-group-text" htmlFor="inputGroupFile02">Upload</Label> */}
                       </div>
                    </form>
                   
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      type="button"
                      color="secondary"
                      onClick={() => {
                        setmodal(!modal);
                      }}
                    >
                      Close
                    </Button>
                    <Button type="button" color="primary" onClick={() => setmodal(!modal)}>
                      Send <i className="fab fa-telegram-plane ms-1"></i>
                    </Button>
                  </ModalFooter>
                </div>
              </Modal>
              <div className="email-rightbar mb-3">
                {
                  // isLoading ? <Spinners setLoading={setLoading} />
                  //   :
                    <Card>
                      {/* { */}
                      
                      {/* // allmail ? */}
                        <>
                          {/* Render Email Top Tool Bar */}
                          <EmailToolbar selectedmails={selectedmails} activeTab={activeTab} setSearch={setSearch} />
                          <ul className="message-list">
                                    {/* <i className="bx bx-home-circle"></i>
                                    <span>{props.t("Dashboard")}</span> */}
                               
                            {allmail1.map((key) => (
                              <li key={key} className={key.read ? "" : "unread"}>
                                <div className="col-mail col-mail-1">
                                  <div className="checkbox-wrapper-mail">
                                    <Input type="checkbox"
                                     value={key.id} id={key.id}
                                      name="emailcheckbox"
                                      onChange={(e) => e.target.value}
                                      // onClick={(e) => handleSelect(e.target.value)} checked={selectedmails.includes(key.id)} 
                                      />
                                    <Label 
                                    htmlFor={key.id} 
                                    className="toggle" />
                                  </div>
                                
                                  <Link to="/admin/email-read" className="title">
                                    {key.name}
                                  </Link>
                                  {
                                  key.fav ?
                                    <span className="star-toggle fas fa-star text-warning" style={{ cursor: "pointer" }} 
                                    onClick={()=>key.onclick}
                                     />
                                    : <span className="star-toggle far fa-star" 
                                    style={{ cursor: "pointer" }}
                                     onClick={()=>key.onclick}
                                      />
                                      }
                                </div>
                                <div className="col-mail col-mail-2">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: key.description,
                                    }}
                                  ></div>
                                  <div className="date">{key.date}</div>
                                </div>
                              </li>
                            ))}
                             {/* </Link> */}
                          </ul>
                        </>
                        {/* // : <div className="align-items-center text-center p-4"> <i className="mdi mdi-email-outline me-2 display-5"></i> <h4> No Recored Found </h4>
                        // </div>
                        } */}
                    </Card>
                }
                {allmail &&
                  <Row>
                    <Col xs="7">Showing 1 - 20 of 1,524</Col>
                    <Col xs="5">
                      <div className="btn-group float-end">
                        <Button
                          type="button"
                          color="success"
                          size="sm"

                        >
                          <i className="fa fa-chevron-left" />
                        </Button>
                        <Button
                          type="button"
                          color="success"
                          size="sm"

                        >
                          <i className="fa fa-chevron-right" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(EmailInbox);
