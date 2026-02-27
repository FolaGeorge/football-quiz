const quizData = {
    "Arsenal": [
        { q: "Who scored the winning goal in the 2014 FA Cup Final vs Hull City?", options: ["Giroud", "Ramsey", "Cazorla", "Koscielny"], a: "Ramsey" },
        { q: "Who scored the winning header in the 2017 FA Cup Final vs Chelsea?", options: ["Ramsey", "Sanchez", "Monreal", "Welbeck"], a: "Ramsey" },
        { q: "Who was Unai Emery’s first permanent signing as Arsenal manager?", options: ["Leno", "Torreira", "Guendouzi", "Sokratis"], a: "Leno" },
        { q: "Which stadium did Arsenal play home European matches at in the late 90s?", options: ["Highbury", "Wembley", "Stamford Bridge", "White Hart Lane"], a: "Wembley" },
        { q: "Who did Mikel Arteta replace as Arsenal manager in 2019?", options: ["Wenger", "Ljungberg", "Emery", "Gazidis"], a: "Ljungberg" },
        { q: "Who was the club's record signing before Declan Rice?", options: ["Pepe", "Aubameyang", "Ozil", "Lacazette"], a: "Pepe" },
        { q: "Which captain left the club in 2022 to join Barcelona on a free?", options: ["Koscielny", "Aubameyang", "Lacazette", "Xhaka"], a: "Aubameyang" },
        { q: "Who wears the number 7 shirt currently?", options: ["Saka", "Martinelli", "Odegaard", "Trossard"], a: "Saka" },
        { q: "In which year did Arsenal move from Highbury to the Emirates?", options: ["2004", "2005", "2006", "2007"], a: "2006" },
        { q: "Who scored the first ever goal at the Emirates Stadium?", options: ["Henry", "Gilberto Silva", "Van Persie", "Adebayor"], a: "Gilberto Silva" }
    ],
    "Real Madrid": [
        { q: "Who scored the 'bicycle kick' in the 2018 UCL Final?", options: ["Ronaldo", "Bale", "Benzema", "Isco"], a: "Bale" },
        { q: "Against which team did Real win 'La Décima' in 2014?", options: ["Bayern", "Juventus", "Atletico Madrid", "Liverpool"], a: "Atletico Madrid" },
        { q: "Who coached Real Madrid to three consecutive UCL titles (2016-18)?", options: ["Ancelotti", "Zidane", "Benitez", "Lopetegui"], a: "Zinedine Zidane" },
        { q: "Which club did Real Madrid sign Jude Bellingham from?", options: ["Birmingham", "Dortmund", "Bayern", "Man City"], a: "Dortmund" },
        { q: "Who scored the winner in the 2022 UCL Final vs Liverpool?", options: ["Benzema", "Vinícius Jr", "Rodrygo", "Valverde"], a: "Vinícius Jr" },
        { q: "Which legendary striker left in 2023 after 14 years?", options: ["Ronaldo", "Benzema", "Raul", "Higuain"], a: "Karim Benzema" },
        { q: "Who is the current captain of Real Madrid?", options: ["Modrić", "Carvajal", "Vazquez", "Alaba"], a: "Luka Modrić" },
        { q: "In 2017, Real Madrid became the first team to do what in the UCL era?", options: ["Win 100 games", "Defend the title", "Score 500 goals", "Win without conceding"], a: "Defend the title" },
        { q: "Which stadium was used during the 2020-21 renovations?", options: ["Bernabeu", "Alfredo Di Stéfano", "Metropolitano", "Mestalla"], a: "Alfredo Di Stéfano" },
        { q: "Who scored the 92:48 equalizer in the 2014 UCL Final?", options: ["Ronaldo", "Ramos", "Modric", "Bale"], a: "Sergio Ramos" }
    ],
    "Chelsea": [
        { q: "Who scored the only goal in the 2021 UCL Final?", options: ["Mount", "Pulisic", "Havertz", "Werner"], a: "Kai Havertz" },
        { q: "Which manager led Chelsea to the 2014/15 PL title?", options: ["Mourinho", "Conte", "Ancelotti", "Sarri"], a: "José Mourinho" },
        { q: "Who is Chelsea's all-time leading goalscorer?", options: ["Drogba", "Lampard", "Osgood", "Hazard"], a: "Frank Lampard" },
        { q: "Which club did Eden Hazard join in 2019?", options: ["PSG", "Real Madrid", "Barcelona", "Man City"], a: "Real Madrid" },
        { q: "Who was the goalkeeper during the 2021 UCL win?", options: ["Kepa", "Cech", "Mendy", "Courtois"], a: "Edouard Mendy" },
        { q: "Who did Chelsea beat in the 2019 Europa League final?", options: ["Arsenal", "Benfica", "Frankfurt", "Ajax"], a: "Arsenal" },
        { q: "Under which manager did Chelsea win the 2016/17 PL title?", options: ["Mourinho", "Hiddink", "Conte", "Tuchel"], a: "Antonio Conte" },
        { q: "Who is the most expensive Chelsea signing ever?", options: ["Lukaku", "Enzo Fernández", "Caicedo", "Mudryk"], a: "Moises Caicedo" },
        { q: "Which Chelsea legend returned as manager in 2019?", options: ["Terry", "Lampard", "Drogba", "Cole"], a: "Frank Lampard" },
        { q: "Chelsea defeated which Brazilian club for the 2022 Club World Cup?", options: ["Flamengo", "Palmeiras", "Santos", "Gremio"], a: "Palmeiras" }
    ],
    "Manchester United": [
        { q: "Who was the manager replaced by Ruben Amorim in 2024?", options: ["Rangnick", "Mourinho", "Ten Hag", "Solskjaer"], a: "Ten Hag" },
        { q: "Who scored the first goal in the 2024 FA Cup Final vs Man City?", options: ["Mainoo", "Garnacho", "Rashford", "Hojlund"], a: "Garnacho" },
        { q: "In which city did United win the 2017 Europa League final?", options: ["Stockholm", "Gdansk", "Lyon", "Baku"], a: "Stockholm" },
        { q: "Who wore the #10 shirt immediately after Wayne Rooney?", options: ["Rashford", "Ibrahimović", "Martial", "Mata"], a: "Ibrahimović" },
        { q: "Against which club did Marcus Rashford make his PL debut?", options: ["Man City", "Liverpool", "Arsenal", "Chelsea"], a: "Arsenal" },
        { q: "Which defender was signed for a world-record fee in 2019?", options: ["Varane", "Maguire", "Martinez", "Shaw"], a: "Maguire" },
        { q: "Who did United sign from Sporting CP in 2020?", options: ["Nani", "Ronaldo", "Fernandes", "Dalot"], a: "Bruno Fernandes" },
        { q: "Who scored a 'scorpion kick' against Sunderland in 2016?", options: ["Pogba", "Mkhitaryan", "Ibrahimovic", "Lingard"], a: "Henrikh Mkhitaryan" },
        { q: "Which manager won the League Cup & FA Cup before leaving in 2024?", options: ["Mourinho", "Van Gaal", "Ten Hag", "Solskjaer"], a: "Ten Hag" },
        { q: "Who scored the winning goal in the 2016 FA Cup Final?", options: ["Lingard", "Rooney", "Mata", "Martial"], a: "Jesse Lingard" }
    ],
    "Manchester City": [
        { q: "How many points did City reach in the 2017/18 season?", options: ["95", "98", "100", "102"], a: "100" },
        { q: "Who scored the winning goal in the 2023 UCL Final?", options: ["Haaland", "De Bruyne", "Rodri", "Gundogan"], a: "Rodri" },
        { q: "Which club did Kevin De Bruyne join City from?", options: ["Chelsea", "Wolfsburg", "Bremen", "Genk"], a: "Wolfsburg" },
        { q: "How many consecutive PL titles did City win (2021-2024)?", options: ["2", "3", "4", "5"], a: "4" },
        { q: "Who was the City manager directly before Pep Guardiola?", options: ["Mancini", "Pellegrini", "Hughes", "Eriksson"], a: "Manuel Pellegrini" },
        { q: "Who holds the record for most goals in a single PL season for City?", options: ["Aguero", "Haaland", "Sterling", "Tevez"], a: "Erling Haaland" },
        { q: "Which player made a goal-line clearance vs Liverpool in 2019?", options: ["Walker", "Stones", "Ederson", "Kompany"], a: "John Stones" },
        { q: "Who scored the winning goal in the 2012 '93:20' moment?", options: ["Dzeko", "Balotelli", "Aguero", "Silva"], a: "Sergio Aguero" },
        { q: "Which academy graduate won PFA Young Player in 2021 & 2022?", options: ["Palmer", "Foden", "Lewis", "Sancho"], a: "Phil Foden" },
        { q: "Against which team did City win 6-0 in the 2019 FA Cup Final?", options: ["Watford", "Stoke", "Wigan", "Chelsea"], a: "Watford" }
    ],
    "Liverpool": [
        { q: "Who was the manager when Liverpool won the PL in 2020?", options: ["Rodgers", "Klopp", "Benitez", "Dalglish"], a: "Jürgen Klopp" },
        { q: "Who did Liverpool beat 4-0 in a 2019 UCL comeback?", options: ["PSG", "Real Madrid", "Barcelona", "Bayern"], a: "Barcelona" },
        { q: "Which Dutch manager took over in 2024?", options: ["Ten Hag", "Slot", "Koeman", "Van Gaal"], a: "Arne Slot" },
        { q: "Who scored the opening goal in the 2019 UCL Final?", options: ["Origi", "Salah", "Mane", "Firmino"], a: "Mohamed Salah" },
        { q: "Which goalkeeper scored a header against West Brom in 2021?", options: ["Mignolet", "Karius", "Alisson", "Adrian"], a: "Alisson Becker" },
        { q: "Which club did Liverpool sign Virgil van Dijk from?", options: ["Celtic", "Southampton", "Ajax", "Groningen"], a: "Southampton" },
        { q: "Who scored the winner in the 2024 Carabao Cup final?", options: ["Elliott", "Van Dijk", "Konate", "Diaz"], a: "Virgil van Dijk" },
        { q: "How many years did Liverpool wait for their 19th league title?", options: ["20", "25", "30", "35"], a: "30 years" },
        { q: "Which player left for Bayern Munich in 2022?", options: ["Salah", "Firmino", "Mane", "Wijnaldum"], a: "Sadio Mané" },
        { q: "Who scored twice in the 2019 UCL Final (Origi and who)?", options: ["Salah", "Mane", "Firmino", "Milner"], a: "Salah" }
    ],
    "Barcelona": [
        { q: "Who was the manager for the 'MSN' Treble in 2015?", options: ["Guardiola", "Vilanova", "Luis Enrique", "Valverde"], a: "Luis Enrique" },
        { q: "In what year did Lionel Messi leave Barcelona?", options: ["2020", "2021", "2022", "2023"], a: "2021" },
        { q: "Which club did Barca beat 6-1 in 'La Remontada'?", options: ["Chelsea", "PSG", "Man City", "Juve"], a: "PSG" },
        { q: "Who is the current youngest goalscorer and star of Euro 2024?", options: ["Gavi", "Pedri", "Yamal", "Fati"], a: "Lamine Yamal" },
        { q: "Who was the captain during the 2015 UCL final win?", options: ["Messi", "Puyol", "Xavi", "Iniesta"], a: "Xavi Hernández" },
        { q: "Which German manager took over in 2024?", options: ["Klopp", "Nagelsmann", "Flick", "Tuchel"], a: "Hansi Flick" },
        { q: "Who did Barca sign from Liverpool for a record fee in 2018?", options: ["Suarez", "Mascherano", "Coutinho", "Torres"], a: "Philippe Coutinho" },
        { q: "Who managed the club between 2021 and 2024?", options: ["Koeman", "Xavi", "Setien", "Valverde"], a: "Xavi" },
        { q: "Who scored the 3rd goal in the 2015 UCL Final vs Juve?", options: ["Rakitic", "Suarez", "Neymar", "Messi"], a: "Neymar Jr" },
        { q: "Where is Barca's temporary home during renovations?", options: ["Camp Nou", "Montjuïc", "Girona", "Espanyol"], a: "Montjuïc" }
    ],
    "General": [
        { q: "Which team won the 2015/16 Premier League?", options: ["Chelsea", "Leicester City", "Man City", "Spurs"], a: "Leicester City" },
        { q: "Who won the Golden Boot in the 2022 World Cup?", options: ["Messi", "Mbappé", "Giroud", "Neymar"], a: "Mbappé" },
        { q: "Which Italian team won 9 consecutive titles (2012-2020)?", options: ["Inter", "AC Milan", "Juventus", "Napoli"], a: "Juventus" },
        { q: "Who scored the winning goal for Germany in the 2014 World Cup Final?", options: ["Klose", "Müller", "Götze", "Özil"], a: "Götze" },
        { q: "Which coach has won the most Champions League titles?", options: ["Ferguson", "Guardiola", "Ancelotti", "Zidane"], a: "Ancelotti" },
        { q: "Which city hosted the 2023 UCL Final?", options: ["Paris", "Istanbul", "London", "Lisbon"], a: "Istanbul" },
        { q: "Who won the first-ever UEFA Conference League in 2022?", options: ["Feyenoord", "West Ham", "AS Roma", "Fiorentina"], a: "AS Roma" },
        { q: "Who is the all-time top scorer in Champions League history?", options: ["Messi", "Ronaldo", "Lewandowski", "Benzema"], a: "Ronaldo" },
        { q: "Which team won 3 consecutive Europa Leagues (2014-2016)?", options: ["Villarreal", "Sevilla", "Benfica", "Valencia"], a: "Sevilla" },
        { q: "Which nation won Euro 2024?", options: ["England", "France", "Spain", "Germany"], a: "Spain" },
        { q: "Who won the 2021 Ballon d'Or?", options: ["Lewandowski", "Messi", "Jorginho", "Benzema"], a: "Messi" },
        { q: "Which club did Xabi Alonso lead to an unbeaten Bundesliga in 2024?", options: ["Bayern", "Dortmund", "Leipzig", "Bayer Leverkusen"], a: "Bayer Leverkusen" },
        { q: "Which stadium is known as the 'Home of Football'?", options: ["Camp Nou", "Old Trafford", "Wembley", "Maracanã"], a: "Wembley" },
        { q: "Who was the most expensive player in 2017 (World Record)?", options: ["Mbappé", "Neymar", "Coutinho", "Dembele"], a: "Neymar" },
        { q: "Which French team won 7 titles in a row in the 2000s?", options: ["PSG", "Marseille", "Lyon", "Monaco"], a: "Lyon" },
        { q: "Who scored the fastest Premier League hat-trick?", options: ["Fowler", "Mané", "Aguero", "Son"], a: "Mané" },
        { q: "Which country hosted the 2018 World Cup?", options: ["Brazil", "Russia", "Qatar", "South Africa"], a: "Russia" },
        { q: "In 2019, which team lost the UCL final to Liverpool?", options: ["Ajax", "Barca", "Spurs", "Man City"], a: "Spurs" },
        { q: "Who won the 2020/21 Serie A, ending Juve's streak?", options: ["Napoli", "AC Milan", "Inter Milan", "Roma"], a: "Inter Milan" },
        { q: "Which player is nicknamed 'The Egyptian King'?", options: ["Elneny", "Salah", "Mido", "Mostafa"], a: "Salah" },
        { q: "Which club plays at the San Siro?", options: ["Lazio/Roma", "Inter/Milan", "Genoa/Sampdoria", "Juve/Torino"], a: "Inter/Milan" },
        { q: "Who won the 2022/23 treble?", options: ["Real Madrid", "Man City", "Bayern", "Liverpool"], a: "Man City" },
        { q: "Which player won the Euro 2024 Player of the Tournament?", options: ["Yamal", "Rodri", "Bellingham", "Olmo"], a: "Rodri" },
        { q: "Which team is nicknamed 'The Yellow Submarine'?", options: ["Dortmund", "Villarreal", "Cadiz", "Watford"], a: "Villarreal" },
        { q: "Who did Atletico Madrid beat in the 2018 Europa League final?", options: ["Marseille", "Arsenal", "Lyon", "Salzburg"], a: "Marseille" },
        { q: "Which manager is 'The Special One'?", options: ["Klopp", "Mourinho", "Pep", "Conte"], a: "Mourinho" },
        { q: "Who won the 2014 Golden Ball?", options: ["James Rodriguez", "Messi", "Müller", "Neuer"], a: "Messi" },
        { q: "Which club did Erling Haaland play for before Man City?", options: ["Molde", "Salzburg", "Dortmund", "Leipzig"], a: "Dortmund" },
        { q: "How many UCL titles does Barcelona have?", options: ["3", "4", "5", "6"], a: "5" },
        { q: "Who won the 2010 World Cup (Legacy)?", options: ["Villa", "Torres", "Iniesta", "Xavi"], a: "Iniesta" },
        { q: "Which club is known as 'The Old Lady'?", options: ["Lazio", "Juventus", "Porto", "Milan"], a: "Juventus" },
        { q: "Who won the 2023 Women's World Cup?", options: ["England", "USA", "Spain", "Australia"], a: "Spain" },
        { q: "Which English player moved to Real Madrid in 2023?", options: ["Kane", "Rice", "Bellingham", "Saka"], a: "Bellingham" },
        { q: "Which Portuguese club academy produced Ronaldo?", options: ["Porto", "Benfica", "Sporting CP", "Braga"], a: "Sporting CP" },
        { q: "Who won the 2024 Ballon d'Or?", options: ["Vinicius Jr", "Rodri", "Bellingham", "Haaland"], a: "Rodri" },
        { q: "Which league is 'La Liga'?", options: ["Italian", "French", "Spanish", "Portuguese"], a: "Spanish" },
        { q: "Who is 'El Pistolero'?", options: ["Aguero", "Suarez", "Cavani", "Forlan"], a: "Suarez" },
        { q: "Which team won the 2021/22 Europa League?", options: ["Frankfurt", "Rangers", "West Ham", "Leipzig"], a: "Frankfurt" },
        { q: "Who managed Real Madrid to the 2024 UCL title?", options: ["Zidane", "Ancelotti", "Raul", "Alonso"], a: "Ancelotti" },
        { q: "Which city is PSG based in?", options: ["Marseille", "Lyon", "Paris", "Nice"], a: "Paris" },
        { q: "Who won the 2019 Copa America?", options: ["Argentina", "Brazil", "Chile", "Peru"], a: "Brazil" },
        { q: "Which stadium is the largest in Europe?", options: ["Wembley", "Camp Nou", "Bernabeu", "Signal Iduna"], a: "Camp Nou" },
        { q: "Who is the manager of Germany (2026)?", options: ["Klopp", "Nagelsmann", "Flick", "Tuchel"], a: "Nagelsmann" },
        { q: "Which club did Harry Kane join in 2023?", options: ["Man City", "Real Madrid", "Bayern Munich", "PSG"], a: "Bayern Munich" },
        { q: "Who won the 2016 Euros?", options: ["France", "Portugal", "Germany", "Wales"], a: "Portugal" },
        { q: "Which player has the most Premier League assists ever?", options: ["Fabregas", "Rooney", "Giggs", "De Bruyne"], a: "Giggs" },
        { q: "Which team won the 2023/24 FA Cup?", options: ["Man City", "Man United", "Liverpool", "Chelsea"], a: "Man United" },
        { q: "Who is the captain of France (2026)?", options: ["Griezmann", "Mbappé", "Saliba", "Maignan"], a: "Mbappé" },
        { q: "Which club did Zlatan Ibrahimovic retire at?", options: ["PSG", "Man Utd", "AC Milan", "LA Galaxy"], a: "AC Milan" },
        { q: "Which team plays at the 'Yellow Wall' stadium?", options: ["Bayern", "Dortmund", "Villarreal", "Arsenal"], a: "Dortmund" }
    ]
};
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 420; // 7 minutes in seconds
let quizActive = false;
let playerName = "";

// 1. THE MIXER FUNCTION
function setupQuiz(selectedClub) {
    playerName = document.getElementById('username').value.trim();
    
    if (!playerName) {
        alert("Enter a nickname first, boss!");
        return;
    }

    // Get the 10 club-specific questions
    // If club not found (or "Other" picked), start with an empty array
    let clubPool = quizData[selectedClub] || [];
    
    // Get the General pool
    let generalPool = [...quizData["General"]];

    // Shuffle the General pool and pick 15
    let shuffledGeneral = generalPool.sort(() => 0.5 - Math.random());
    let selectedGeneral = shuffledGeneral.slice(0, 15);

    // If "Other" was picked, they need 25 general questions total
    if (clubPool.length === 0) {
        selectedGeneral = shuffledGeneral.slice(0, 25);
    }

    // Combine them (10 Club + 15 General = 25 total)
    currentQuizQuestions = [...clubPool, ...selectedGeneral];

    // Final shuffle so the club questions aren't all at the start
    currentQuizQuestions.sort(() => 0.5 - Math.random());

    startQuiz();
}

// 2. THE START LOGIC
function startQuiz() {
    quizActive = true;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    startTimer();
    showQuestion();
}

// 3. THE TIMER LOGIC
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById('timer-display').innerText = 
            `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// 4. THE TAB-SWITCH PENALTY (ANTI-CHEAT)
document.addEventListener("visibilitychange", () => {
    if (document.hidden && quizActive) {
        score -= 4; // Penalty of one full question
        alert("🚨 RED CARD! Tab switching detected. -4 points penalty.");
        // Optional: play the whistle sound here too
        new Audio('whistle.mp3').play();
    }
});
function showQuestion() {
    let question = currentQuizQuestions[currentQuestionIndex];
    document.getElementById('progress').innerText = `Question ${currentQuestionIndex + 1}/25`;
    document.getElementById('question-text').innerText = question.q;
    
    const btnGrid = document.getElementById('answer-buttons');
    btnGrid.innerHTML = ''; // Clear old buttons

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('ans-btn');
        button.onclick = () => checkAnswer(option, question.a);
        btnGrid.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score += 4;
        triggerOverlay('goal-overlay');
        // Optional: play goal sound here
    } else {
        triggerOverlay('redcard-overlay');
        // Optional: play whistle sound here
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < 25) {
        setTimeout(showQuestion, 1000); // Wait 1 second before next question
    } else {
        setTimeout(endQuiz, 1000);
    }
}

function triggerOverlay(id) {
    const el = document.getElementById(id);
    el.classList.remove('hidden');
    el.classList.add('show');
    setTimeout(() => {
        el.classList.remove('show');
        el.classList.add('hidden');
    }, 800);
}

function endQuiz() {
    quizActive = false;
    clearInterval(timer);
    alert(`Quiz Over, ${playerName}! Your score: ${score}/100`);
    // Later we will add the Leaderboard submission here
}
