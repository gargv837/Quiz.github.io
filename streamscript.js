let scoreAptitude=localStorage.getItem("scoreQuiz");
let quizDBlength=localStorage.getItem("quizLength");
console.log(scoreAptitude);
const streamSelector = [
    {
        heading: "Stream Selector",
        question : "Do you like to participate in community services and/or volunteering?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "humanities",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Are you a good listener and can make friends with different kinds of people?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "humanities",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you find it difficult to deal with a huge set of numbers and data?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "humanities,PCM",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you feel confident in handling other people's money?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "commerce",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you enjoy reading technical materials and solving technical problems?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "PCB,PCM",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you enjoy working in a laboratory and experimenting? ",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "PCB,PCM",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you find it’s exciting to learn how things grow and stay alive?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "humanities",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you think working in a hospital or other medical facilities is a bad idea?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "PCB",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Can you analyze financial information and interpret it to others?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "commerce",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you find new technologies exciting and do you think they are fun?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "PCB,PCM",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you like to spend time in the library collecting information about world history, evolution etc? ",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "humanities",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you find it boring to learn chemical formulas and physics theory?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "PCB,PCM",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you like to read business newspapers?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "commerce",
        ans : "ans1"
    },    {
        heading: "Stream Selector",
        question : "Do you show strong interest in how laws and regulations are designed and passed?",
        a: "Yes",
        b: "No",
        c: "Not Sure",
        id : "humanities",
        ans : "ans1"
    },    
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "a) Discussing better-governing methods",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },    
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "a) Discussing better-governing methods",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },  
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "b) Giving students advice about their education",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "humanities",
        ans : "ans1"
    },    
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "c) Writing plays for a small theater or giving dance lessons",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "humanities",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "d) Typing business letters",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "e) Deciding on investments in share markets",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "f) To work on computers and write programs and logical codes",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCM",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "g) Designing telephone equipment",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCM",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "h) Provide care and medical help to patients and animals",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCB",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "i) Protecting wildlife from illegal huntinga) Discussing better-governing methods",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "humanities",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "j) Giving medicine with a needle and cleaning a patient's teeth",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCB",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "k) Taking care of the newborn in the intensive care unit",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCB",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "l) Analysis of business model to start a business",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "m) Culture a tissue in a laboratory and write a research report on it",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCB",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "n) Management of cash in the bank account",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "o) Financial Advisor for an organization",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "p) Taking survey to improve sanitation in an area",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "humanities",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "q) Talking to an individual who is depressed",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "humanities",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "r) Formulate a mathematical model or other methods of analysis to design a device",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCM",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "s) Conduct laboratory experiments to prove a theorem or theory",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCM",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "t) Read dials and meters to determine amperage, voltage, electrical output, and input",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCM",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "u) Meeting with executives, clients, and representatives",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "v) Taking decisions related to tax and money",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "commerce",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "w) Analyze crop yield produced from different soil and fertilizers",
        a: "Yes, Will love to",
        b: "Maybe",
        c: "Never",
        id : "PCB",
        ans : "ans1"
    },
    {
        heading: "Work Situation: If ever given an option would you choose given work to make a living-",
        question : "x) Giving polio medicine to patients in government camps",
        a: "Never",
        b: "Maybe",
        c: "Yes, Will love to",
        id : "PCB",
        ans : "ans1"
    }
];

const headingStream = document.querySelector('.headingStream');
const questionStream = document.querySelector('.questionStream');
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');

const submit = document.querySelector('#submit');

const streamAnswers = document.querySelectorAll('.streamAnswer');

const showScore = document.querySelector('#showScore');

let streamCount = 0;
let humanities = 0;
let PCM = 0;
let commerce = 0;
let PCB = 0;
let stream="";

const loadQuestionStreamSelector = () => {
    const questionListStream = streamSelector[streamCount];
    headingStream.innerText = questionListStream.heading;
    questionStream.innerText = questionListStream.question;
    choice1.innerText = questionListStream.a;
    choice2.innerText = questionListStream.b;
    choice3.innerText = questionListStream.c;
}

const getCheckAnswerStream = () => {
    let streamAnswer;
    streamAnswers.forEach( (curAnsElem) => {
        if(curAnsElem.checked){
            streamAnswer = curAnsElem.id;
        }
    });
    return streamAnswer; 
};

const deselectAllStream = () => {
    streamAnswers.forEach((curAnsElem) => curAnsElem.checked = false);
};

const checkStream = () => {
    let max=Math.max(humanities,PCB,PCM,commerce);
    if(max==humanities) stream+="Humanities ";

    if(max==PCM) stream+="PCM ";

    if(max==PCB) stream+="PCB ";

    if(max==commerce) stream+="Commerce ";
}

submit.addEventListener('click', () => {
    const checkedAnswerStream = getCheckAnswerStream();
    console.log(checkedAnswerStream);
    console.log(streamCount);
    if(checkedAnswerStream == "ans1"){
        if(streamSelector[streamCount].id=="humanities"){
          humanities++;
          streamCount++;
        }
        else if(streamSelector[streamCount].id=="commerce"){
            commerce++;
            streamCount++;
        }
        else if(streamSelector[streamCount].id=="humanities,PCB"){
            humanities++;
            streamCount++;
            PCB++;
        }
        else if(streamSelector[streamCount].id=="humanities,PCM"){
           humanities++;
           streamCount++;
           PCM++;
        }
        else if(streamSelector[streamCount].id=="PCB,PCM"){
           PCM++;
           PCB++;
           streamCount++;
        }
    }
    else{
        streamCount++;
    };
    console.log(humanities,PCB,PCM,commerce);
    deselectAllStream();

    if(streamCount<streamSelector.length){
        loadQuestionStreamSelector();
    }
    else{
        checkStream();
        showScore.innerHTML = `
        <h3> Marks Scored : ${scoreAptitude}/${quizDBlength} </h3>
        <h3> Recommended stream :  ${stream} </h3>
        <button class="btn" onClick = "window.location.href='index.html';">Start Again</button>
        `;
        showScore.classList.remove('scoreArea')
        localStorage.clear();
    }
});