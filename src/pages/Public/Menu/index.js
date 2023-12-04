import React from 'react'
import { Badge, Button, Card, Col, Container, Navbar, NavbarToggler, Row } from 'reactstrap'
import  { useState } from 'react';
import AnNavbar from './AnNavbar';
import { date } from 'yup';
import DiscountCard from './DiscountCard';
import Corusel from './Corusel';
import Connected from './Connected';
import EcoomerceCard from './EcoomerceCard';
import {card, card1, cardGym, fwGames, getConnect, job, pTags, sportsKutumb, vote} from './dat';
import GamesCard from './GamesCard';
import Slidewithcontrol from './slidewithcontrol';
import GetCard from './GetCard';
import ManageGym from './ManageGym';
import CalenderCard from './CalenderCard';
import About from './About';
import RandomPost from './RandomPost';
import HotCategories from './HotCategories';
import SupportSystem from './SupportSystem';

function index(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggl = () => setIsOpen(!isOpen);
 const iconList =[
  {icon : ' s'},
  {icon : <><i className="bx bx-cog bx-spin"></i></>},
  {icon : <><i className="dripicons-view-thumb"></i></>},
  {icon : <><i className="dripicons-user"></i></>},
  {icon : <><i className="dripicons-search"></i></>},
  // {icon : <><i className="bx bx-cog bx-spin"></i></>},
  

  ]
  const menuList = [
    {title :'menu1'    },
    {title :'menu2'    },
    {title :'menu3'    },
    {title :'menu4'    },
    {title :'menu5'    },
    // {title :'menu6'    },
    {title :'menu n'    }
  ]
  return (
    <>
    <React.Fragment>
    
    <Container fluid>
      <Row style={{}} className='d-*-flex flex-*-row bg-primary mx-5 '>
        <div className=' d-flex justify-content-center wrap'>
       {menuList.map((i)=><Button className='' style={{width:'9vw', fontSize:'1.5vw', flexGrow:1, flexBasis:500}} key={i.title}>{i.title}</Button>)}
        </div>
        
        
      <div>
      {/* <Navbar 
      {...args}
      >
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar> */}
    </div>
      </Row>
      <Row className='mx-5'>
        <div className=' d-flex justify-content-evenly'>
           <span><h1>Fittest Worrier</h1></span>
           <span><h1>Fittest Worrier Advertisment content</h1></span>
        </div>
        </Row>
      <Row className=' d-flex bg-black mx-5' >
        <div className=' d-flex justify-content-center '>
      <span>

        <Navbar>
        <NavbarToggler style={{width:'5vw'}} onClick={toggle} />
        
       
        </Navbar>
       </span>
         {menuList.map((i)=><Button className='' style={{width:'10vw', fontSize:'1.5vw', flexGrow: 1}} key={i.title}>{i.title}</Button>)}

         <span className='d-flex  px-2 justify-between bg-white'>
         {iconList.map((i)=><Card key={i.title} style={{borderRadius:'10px'}} className='mx-1 my-auto text-center' ><button type="button" style={{borderRadius:'10px',fontSize:'15px'}} className="p-2 boder  ">{i.icon}</button></Card>)}
         </span>
        </div>
        </Row>
        <AnNavbar isOpen={isOpen}/>
        <Row className='m-auto mx-5 border-danger my-3  '>
       <div className='border border-dark mt-1'>
        <Button color='danger mx-2 my-1'>Breking News</Button>
        <Badge className='mx-1'>New</Badge>
        <span>{date}</span>
       </div>
        </Row >
        <Row  className='mx-5 my-2' style={{height:'fit'}}>
           <Col xl='3' style={{height:'',display:'grid',placeItems:'center'}} className=' text-center '>
           <DiscountCard  className=''></DiscountCard>
           <DiscountCard className=''></DiscountCard>
           </Col>
           <Col xl='6' className=' m-3' style={{}}>
         <Corusel />
           </Col>
           <Col className='d-grid'>
           <Connected/>
           </Col>
        </Row>
        <Row className='d-flex mt-2'>
      {/* <EcoomerceCard card={card} className='d-flex'/> */}
      {/* <EcoomerceCard card={card1} className='d-flex'/> */}
         
        </Row>
        <Row className='mx-2'>
           {/* <div className='d-flex ' style={{height:'20px', width:'20px'}}> */}

          {/* <Slidewithcontrol/> */}
          {/* </div>  */}
          <Col xl={9}><GamesCard/></Col>
          <Col xl={3}>
            <GetCard index={getConnect}/>
          </Col>
        </Row>
        <Row className='mt-2 mx-5 d-flex'>
         <ManageGym index={cardGym}/>
        
        </Row>
        <Row className='d-flex'>
          <Col xl={6}>
          <ManageGym index={sportsKutumb}/>
          </Col>
          <Col xl='6' className='' style={{}}>
            <Card>
              
            </Card>
           </Col>
        </Row>
        <Row>
        <Col xl={9}><GamesCard/></Col>
        <Col xl={3}><GetCard index={job}/></Col>
        </Row>
        <Row style={{height:'20vh', width:'100vw', backgroundColor:'blue'}}>

        </Row>
        <Row className='mt-4'>
         <Col xl={3}>
          <CalenderCard/>
         </Col>
         <Col xl={6}>
         </Col>
         <Col xl={3}>
          <GetCard  index={vote} icon='mdi-dots-horizontal' />
          <GetCard  index={pTags} />
         </Col>
        </Row>
        <Row xl={12} className='d-flex  justify-betweem m-2 text-center'  >
          <Col >
          <About></About>
          </Col>

          <Col className='m-1'>
           <RandomPost></RandomPost>
          </Col>

          <Col className='m-1'>
          <HotCategories></HotCategories>
          </Col>
          
          <Col>
          <SupportSystem></SupportSystem>
          </Col>

        </Row>
    </Container>
    
    </React.Fragment>
    </>
  )
}

export default index