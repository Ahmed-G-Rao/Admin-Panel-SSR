import React, { useState, useEffect } from 'react';
// import './ShowAllprivacy.css';
import './ShowAllprivacy.css';
const config = require("../../helpers/config.json");

const ShowAllprivacy = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    fetch(`${config['baseUrl']}/GetFAQs`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(res => {
        if (res.data && res.data.length > 0) {
          setFaqs(res.data);
        }
        setLoading(false);
      });
  }, []);

  const AddFAQ = async ()=>{
    console.log(newQuestion,newAnswer);
    // return;
    fetch(`${config['baseUrl']}/AddFAQs`,{
        method: 'POST',
        headers : {'content-type':'application/json'},
        body: JSON.stringify({
            "question": newQuestion,
            "answer": newAnswer
        })
    }).then(res=> res.json())
        .then(res=>{
            if(res.status==200){
                setNewQuestion('');
                setNewAnswer('');
            }
        })
        window.location.reload(true);
  }

  const DeleteFAQ = async (index) => {
   await fetch(`${config['baseUrl']}/DeleteFAQs`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        "id": index
      })
    })
    .then(res => res.json())
    .then(res => {
      if (res.data && res.data.length > 0) {
        setFaqs(res.data);
      }
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
    });
    window.location.reload(true);
  }
  
  return (
    <>
      <div className="container-fluid bg-white ">
        <div className="col-md-12 justify-content-center aera bg-white mt-4 pb-5 sticky">
          <div className="row">
            <div className="col-md-12 mt-4">
              <h1>FAQs</h1>
            </div>
          </div>
          {loading ? (
            <div>Loading FAQs...</div>
          ) : (
            <>
              {/* {faqs.map((faq, index) => ( */}
              {
  faqs && faqs.length > 0 ? (
    faqs.map((faq) => (
      <div key={faq.id} className="faq-item">
        <div className="question">{faq.question}</div>
        <div className="answer">{faq.answer}</div>
        <button onClick={() => DeleteFAQ(faq.id)} className="edit-button">
          Delete
        </button>
      </div>
    ))
  ) : (
    ""
  )
}
             
        
              <div className="faq-inputs">
                <input
                  type="text"
                  placeholder="Enter question"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter answer"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                />
                <button onClick={()=>AddFAQ()} className="btn-c">
                    ADD FAQ
                 
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowAllprivacy;