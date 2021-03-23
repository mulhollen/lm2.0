import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import ContactLinks from './ContactLinks';

const Content = () => {
  return (
    <>
      <div className="myspace__contact mb-4 mx-3 desktop-only">
        <h3 className="mb-0 pt-1 text-light">Contacting Lindsay</h3>   
        <ContactLinks />   
      </div>
      <div className="myspace__contact mb-4 mx-3 mobile-only">
        <Accordion atomic={true}>
          <AccordionItem title="Contacting Lindsay">
            <ContactLinks />
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Content;


