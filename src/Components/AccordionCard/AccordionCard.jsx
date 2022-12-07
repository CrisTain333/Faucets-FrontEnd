import React, { useState } from 'react';

const AccordionCard = ({qs}) => {
    const {question,answer} = qs
    const [showAns, setShowAns] = useState(false);



    //Accordion toggler

    const accordionToggleMode = () => {
        if (!showAns) setShowAns(true);
        else setShowAns(false);
      };


    return (
        <div className="faqCard" onClick={accordionToggleMode}>
            <div className="questions">
              <h2>{question}</h2>
              {showAns === false ? (
                <span >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
                  </svg>
                </span>



              ) : (
                
                <span >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </span>
               
              )}
            </div>
            {showAns && (
              <div className="answer">
                <p>
                 {answer}
                </p>
              </div>
            )}
          </div>
    );
};

export default AccordionCard;