// 1. GLOBAL VARIABLES
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 420; // 7 minutes
let quizActive = false;
let playerName = "";

// 2. PRELOAD AUDIO (Crucial: This fixes the crash)
const goalSound = new Audio('sounds/goal.mp3');
const whistleSound = new Audio('sounds/whistle.mp3');

// 3. THE MASTER DATA
const quizData = {
    "Arsenal": [
        { q: "Who scored the winning goal in the 2014 FA Cup Final?", options: ["Giroud", "Ramsey", "Cazorla", "Koscielny"], a: "Ramsey" },
        { q: "Which player scored a header to win the 2017 FA Cup Final?", options: ["Ramsey", "Sanchez", "Monreal", "Welbeck"], a: "Ramsey" },
        { q: "Who was Unai Emery’s first permanent signing?", options: ["Leno", "Torreira", "Guendouzi", "Sokratis"], a: "Leno" },
        { q: "Arsenal's European home in the late 90s?", options: ["Highbury", "Wembley", "Stamford Bridge", "White Hart Lane"], a: "Wembley" },
        { q: "Who did Arteta replace as manager in 2019?", options: ["Wenger", "Ljungberg", "Emery", "Gazidis"], a: "Ljungberg" },
        { q: "Record signing before Declan Rice?", options: ["Pepe", "Aubameyang", "Ozil", "Lacazette"], a: "Pepe" },
        { q: "Captain who joined Barcelona in 2022?", options: ["Koscielny", "Aubameyang", "Lacazette", "Xhaka"], a: "Aubameyang" },
        { q: "Current number 7?", options: ["Saka", "Martinelli", "Odegaard", "Trossard"], a: "Saka" },
        { q: "Year Arsenal moved to the Emirates?", options: ["2004", "2005", "2006", "2007"], a: "2006" },
        { q: "First ever goalscorer at the Emirates?", options: ["Henry", "Gilberto Silva", "Van Persie", "Adebayor"], a: "Gilberto Silva" },
        { q: "Who scored a hat-trick vs Chelsea in 2021?", options: ["Nketiah", "Saka", "Smith Rowe", "Martinelli"], a: "Nketiah" },
        { q: "Which keeper won the Golden Glove in 2023/24?", options: ["Raya", "Ramsdale", "Leno", "Cech"], a: "Raya" },
        { q: "Who did Arsenal sign from Real Madrid in 2013?", options: ["Ozil", "Odegaard", "Ceballos", "Reyes"], a: "Ozil" },
        { q: "Arsenal's 'Invincible' manager?", options: ["Arteta", "Emery", "Wenger", "Graham"], a: "Wenger" },
        { q: "Who scored the winner vs Man City in Oct 2023?", options: ["Martinelli", "Rice", "Jesus", "Havertz"], a: "Martinelli" },
        { q: "Which defender joined from Brighton in 2021?", options: ["White", "Gabriel", "Saliba", "Zinchenko"], a: "White" },
        { q: "Arsenal's nickname?", options: ["The Blues", "The Gunners", "The Red Devils", "The Citizens"], a: "The Gunners" },
        { q: "Who wore number 14 after Thierry Henry?", options: ["Walcott", "Aubameyang", "Nketiah", "Bentner"], a: "Walcott" },
        { q: "Current club captain (2026)?", options: ["Odegaard", "Saka", "Rice", "Gabriel"], a: "Odegaard" },
        { q: "Who scored the 2nd goal in the 2015 FA Cup Final?", options: ["Sanchez", "Walcott", "Mertesacker", "Giroud"], a: "Sanchez" }
    ],
    "Real Madrid": [
        { q: "Who scored the bicycle kick in 2018?", options: ["Ronaldo", "Bale", "Benzema", "Isco"], a: "Bale" },
        { q: "Defeated which club in 2014 'La Decima' final?", options: ["Bayern", "Juventus", "Atletico Madrid", "Liverpool"], a: "Atletico Madrid" },
        { q: "Manager of 3 consecutive UCLs (2016-18)?", options: ["Ancelotti", "Zidane", "Benitez", "Lopetegui"], a: "Zidane" },
        { q: "Bellingham's former club?", options: ["Birmingham", "Dortmund", "Bayern", "Man City"], a: "Dortmund" },
        { q: "2022 UCL Final goalscorer?", options: ["Benzema", "Vinicius Jr", "Rodrygo", "Valverde"], a: "Vinicius Jr" },
        { q: "Left in 2023 after 14 years?", options: ["Ronaldo", "Benzema", "Raul", "Higuain"], a: "Benzema" },
        { q: "Current captain (2026)?", options: ["Modric", "Carvajal", "Vazquez", "Alaba"], a: "Modric" },
        { q: "First team to defend the UCL title?", options: ["Real Madrid", "Barca", "Bayern", "AC Milan"], a: "Real Madrid" },
        { q: "Interim stadium 2020-21?", options: ["Bernabeu", "Alfredo Di Stefano", "Metropolitano", "Mestalla"], a: "Alfredo Di Stefano" },
        { q: "92:48 goalscorer in 2014?", options: ["Ronaldo", "Ramos", "Modric", "Bale"], a: "Ramos" },
        { q: "Who did Madrid sign from Monaco in 2022?", options: ["Tchouameni", "Camavinga", "Mbappe", "Mendy"], a: "Tchouameni" },
        { q: "Current number 7?", options: ["Vinicius Jr", "Mbappe", "Hazard", "Ronaldo"], a: "Vinicius Jr" },
        { q: "Goalscorer in 2017 UCL Final vs Juve?", options: ["Ronaldo", "Casemiro", "Asensio", "All of them"], a: "All of them" },
        { q: "Signed from Chelsea in 2019?", options: ["Hazard", "Courtois", "Rudiger", "Kovacic"], a: "Hazard" },
        { q: "Madrid's record goalscorer?", options: ["Benzema", "Raul", "Ronaldo", "Di Stefano"], a: "Ronaldo" },
        { q: "How many UCLs does Madrid have (as of 2025)?", options: ["13", "14", "15", "16"], a: "15" },
        { q: "Manager who won 2024 UCL?", options: ["Ancelotti", "Zidane", "Alonso", "Raul"], a: "Ancelotti" },
        { q: "Club legend who wears number 10?", options: ["Modric", "Bellingham", "Guler", "James"], a: "Modric" },
        { q: "Goalkeeper in 2022 UCL Final?", options: ["Courtois", "Lunin", "Navas", "Kepa"], a: "Courtois" }
    ],
    "Chelsea": [
        { q: "2021 UCL Final goalscorer?", options: ["Mount", "Pulisic", "Havertz", "Werner"], a: "Havertz" },
        { q: "Manager of 2014/15 PL title?", options: ["Mourinho", "Conte", "Ancelotti", "Sarri"], a: "Mourinho" },
        { q: "All-time leading goalscorer?", options: ["Drogba", "Lampard", "Osgood", "Hazard"], a: "Lampard" },
        { q: "Club Hazard joined in 2019?", options: ["PSG", "Real Madrid", "Barcelona", "Man City"], a: "Real Madrid" },
        { q: "2021 UCL winning goalkeeper?", options: ["Kepa", "Cech", "Mendy", "Courtois"], a: "Mendy" },
        { q: "2019 Europa League final opponent?", options: ["Arsenal", "Benfica", "Frankfurt", "Ajax"], a: "Arsenal" },
        { q: "Manager of 2016/17 PL title?", options: ["Mourinho", "Hiddink", "Conte", "Tuchel"], a: "Conte" },
        { q: "Most expensive signing (as of 2025)?", options: ["Lukaku", "Enzo", "Caicedo", "Mudryk"], a: "Caicedo" },
        { q: "Legend who managed in 2019?", options: ["Terry", "Lampard", "Drogba", "Cole"], a: "Lampard" },
        { q: "2022 Club World Cup opponent?", options: ["Flamengo", "Palmeiras", "Santos", "Gremio"], a: "Palmeiras" },
        { q: "Who scored the 2012 UCL winning penalty?", options: ["Lampard", "Drogba", "Cole", "Mata"], a: "Drogba" },
        { q: "Nicknamed 'The Bison'?", options: ["Essien", "Kante", "Makelele", "Mikel"], a: "Essien" },
        { q: "Signed from Leicester in 2016?", options: ["Kante", "Drinkwater", "Chilwell", "Fofana"], a: "Kante" },
        { q: "2021 UCL winning manager?", options: ["Lampard", "Tuchel", "Potter", "Pochettino"], a: "Tuchel" },
        { q: "Which player left for Arsenal in 2023?", options: ["Havertz", "Mount", "Kovacic", "Jorginho"], a: "Havertz" },
        { q: "Current captain (2026)?", options: ["James", "Enzo", "Chilwell", "Colwill"], a: "James" },
        { q: "Stadium name?", options: ["Emirates", "Stamford Bridge", "Anfield", "Old Trafford"], a: "Stamford Bridge" },
        { q: "Who wore number 26 for years?", options: ["Terry", "Cahill", "Colwill", "Desailly"], a: "Terry" },
        { q: "Which keeper refused to be subbed in 2019?", options: ["Kepa", "Cech", "Mendy", "Caballero"], a: "Kepa" },
        { q: "Chelsea's 2021 UCL Semi-Final opponent?", options: ["Real Madrid", "PSG", "Bayern", "Porto"], a: "Real Madrid" }
    ],
    "Manchester United": [
        { q: "Manager replaced by Amorim?", options: ["Rangnick", "Mourinho", "Ten Hag", "Solskjaer"], a: "Ten Hag" },
        { q: "2024 FA Cup Final 1st goalscorer?", options: ["Mainoo", "Garnacho", "Rashford", "Hojlund"], a: "Garnacho" },
        { q: "2017 Europa League final city?", options: ["Stockholm", "Gdansk", "Lyon", "Baku"], a: "Stockholm" },
        { q: "Wore #10 after Rooney?", options: ["Rashford", "Ibrahimovic", "Martial", "Mata"], a: "Ibrahimovic" },
        { q: "Opponent for Rashford's PL debut?", options: ["Man City", "Liverpool", "Arsenal", "Chelsea"], a: "Arsenal" },
        { q: "World-record fee defender in 2019?", options: ["Varane", "Maguire", "Martinez", "Shaw"], a: "Maguire" },
        { q: "Signed from Sporting in 2020?", options: ["Nani", "Ronaldo", "Fernandes", "Dalot"], a: "Fernandes" },
        { q: "Scorpion kick goal vs Sunderland?", options: ["Pogba", "Mkhitaryan", "Ibrahimovic", "Lingard"], a: "Mkhitaryan" },
        { q: "Won 2 trophies before leaving in 2024?", options: ["Mourinho", "Van Gaal", "Ten Hag", "Solskjaer"], a: "Ten Hag" },
        { q: "2016 FA Cup winning goal?", options: ["Lingard", "Rooney", "Mata", "Martial"], a: "Lingard" },
        { q: "Nicknamed 'The Baby-Faced Assassin'?", options: ["Solskjaer", "Rooney", "Scholes", "Giggs"], a: "Solskjaer" },
        { q: "Manchester United stadium?", options: ["Old Trafford", "Etihad", "Elland Road", "Anfield"], a: "Old Trafford" },
        { q: "Who scored 4 goals vs RB Leipzig in 2020?", options: ["Rashford", "Martial", "Cavani", "Greenwood"], a: "Rashford" },
        { q: "Who wore #7 before Cristiano's return?", options: ["Cavani", "James", "Sancho", "Di Maria"], a: "Cavani" },
        { q: "United's most successful manager?", options: ["Busby", "Ferguson", "Mourinho", "Ten Hag"], a: "Ferguson" },
        { q: "Where did Ronaldo go after leaving in 2022?", options: ["Al Nassr", "Real Madrid", "Sporting", "Juve"], a: "Al Nassr" },
        { q: "2024 FA Cup Final 2nd goalscorer?", options: ["Mainoo", "Garnacho", "Rashford", "Hojlund"], a: "Mainoo" },
        { q: "Current captain (2026)?", options: ["Fernandes", "Maguire", "Rashford", "Mainoo"], a: "Fernandes" },
        { q: "Nicknamed 'The Butcher'?", options: ["Martinez", "Varane", "Maguire", "Stamford"], a: "Martinez" },
        { q: "Who wore number 18 before Bruno?", options: ["Scholes", "Young", "Casemiro", "Klose"], a: "Young" }
    ],
    "Manchester City": [
        { q: "Points reached in 2017/18?", options: ["95", "98", "100", "102"], a: "100" },
        { q: "2023 UCL Final goalscorer?", options: ["Haaland", "De Bruyne", "Rodri", "Gundogan"], a: "Rodri" },
        { q: "Club De Bruyne joined from?", options: ["Chelsea", "Wolfsburg", "Bremen", "Genk"], a: "Wolfsburg" },
        { q: "Consecutive PL titles 2021-2024?", options: ["2", "3", "4", "5"], a: "4" },
        { q: "Manager before Pep?", options: ["Mancini", "Pellegrini", "Hughes", "Eriksson"], a: "Pellegrini" },
        { q: "Most goals in a single PL season?", options: ["Aguero", "Haaland", "Sterling", "Tevez"], a: "Haaland" },
        { q: "Goal-line clearance vs Liverpool 2019?", options: ["Walker", "Stones", "Ederson", "Kompany"], a: "Stones" },
        { q: "93:20 goalscorer?", options: ["Dzeko", "Balotelli", "Aguero", "Silva"], a: "Aguero" },
        { q: "PFA Young Player 2021 & 2022?", options: ["Palmer", "Foden", "Lewis", "Sancho"], a: "Foden" },
        { q: "2019 FA Cup Final opponent (6-0)?", options: ["Watford", "Stoke", "Wigan", "Chelsea"], a: "Watford" },
        { q: "Signed from Aston Villa for 100m?", options: ["Grealish", "Rodri", "Phillips", "Walker"], a: "Grealish" },
        { q: "Nicknamed 'The Octopus'?", options: ["Fernandinho", "Rodri", "Fernando", "Ederson"], a: "Fernando" },
        { q: "City's current keeper?", options: ["Ederson", "Ortega", "Hart", "Bravo"], a: "Ederson" },
        { q: "Club legend with #21?", options: ["Silva", "Foden", "Rodri", "Gundogan"], a: "Silva" },
        { q: "Where did Gundogan go in 2023?", options: ["Barcelona", "Madrid", "Bayern", "Dortmund"], a: "Barcelona" },
        { q: "Stadium name?", options: ["Etihad", "Maine Road", "Old Trafford", "Wembley"], a: "Etihad" },
        { q: "Most expensive defender signed by Pep?", options: ["Gvardiol", "Dias", "Stones", "Walker"], a: "Gvardiol" },
        { q: "Who scored the winner in 2021 UCL Semi vs PSG?", options: ["Mahrez", "Foden", "De Bruyne", "Bernardo"], a: "Mahrez" },
        { q: "Current captain (2026)?", options: ["Walker", "De Bruyne", "Rodri", "Dias"], a: "Walker" },
        { q: "Goalscorer in 1-0 win vs Arsenal (2023)?", options: ["Ake", "Haaland", "Rodri", "Foden"], a: "Ake" }
    ],
    "Liverpool": [
        { q: "Manager of 2020 PL title?", options: ["Rodgers", "Klopp", "Benitez", "Dalglish"], a: "Klopp" },
        { q: "4-0 UCL comeback opponent?", options: ["PSG", "Real Madrid", "Barcelona", "Bayern"], a: "Barcelona" },
        { q: "Dutch manager took over in 2024?", options: ["Ten Hag", "Slot", "Koeman", "Van Gaal"], a: "Slot" },
        { q: "2019 UCL Final 1st goal?", options: ["Origi", "Salah", "Mane", "Firmino"], a: "Salah" },
        { q: "Header vs West Brom in 2021?", options: ["Mignolet", "Karius", "Alisson", "Adrian"], a: "Alisson" },
        { q: "Club Virgil joined from?", options: ["Celtic", "Southampton", "Ajax", "Groningen"], a: "Southampton" },
        { q: "2024 Carabao Cup final winner?", options: ["Elliott", "Van Dijk", "Konate", "Diaz"], a: "Van Dijk" },
        { q: "Years wait for 19th title?", options: ["20", "25", "30", "35"], a: "30" },
        { q: "Left for Bayern in 2022?", options: ["Salah", "Firmino", "Mane", "Wijnaldum"], a: "Mane" },
        { q: "Other 2019 UCL Final scorer?", options: ["Salah", "Mane", "Firmino", "Origi"], a: "Origi" },
        { q: "Nicknamed 'The Egyptian King'?", options: ["Salah", "Elneny", "Mido", "Zidan"], a: "Salah" },
        { q: "Liverpool stadium?", options: ["Anfield", "Goodison", "Old Trafford", "Etihad"], a: "Anfield" },
        { q: "Signed from RB Leipzig in 2023?", options: ["Szoboszlai", "Mac Allister", "Gravenberch", "Endo"], a: "Szoboszlai" },
        { q: "Left back known for assists?", options: ["Robertson", "Tsimikas", "Moreno", "Enrique"], a: "Robertson" },
        { q: "2019 UCL Semi hero vs Barca?", options: ["Origi", "Wijnaldum", "Both", "Mane"], a: "Both" },
        { q: "Current captain (2026)?", options: ["Van Dijk", "Salah", "Trent", "Alisson"], a: "Van Dijk" },
        { q: "Trent Alexander-Arnold's number?", options: ["66", "2", "7", "10"], a: "66" },
        { q: "Where did Firmino go in 2023?", options: ["Al Ahli", "Al Nassr", "Madrid", "Bayern"], a: "Al Ahli" },
        { q: "Nicknamed 'The Greek Scouser'?", options: ["Tsimikas", "Kyrgiakos", "Samaras", "Mitroglou"], a: "Tsimikas" },
        { q: "Liverpool's 2005 UCL Final city?", options: ["Istanbul", "Athens", "Paris", "Rome"], a: "Istanbul" }
    ],
    "Barcelona": [
        { q: "Manager of 'MSN' Treble?", options: ["Guardiola", "Vilanova", "Luis Enrique", "Valverde"], a: "Luis Enrique" },
        { q: "Year Messi left?", options: ["2020", "2021", "2022", "2023"], a: "2021" },
        { q: "6-1 'La Remontada' opponent?", options: ["Chelsea", "PSG", "Man City", "Juve"], a: "PSG" },
        { q: "Youngest goalscorer & Euro star?", options: ["Gavi", "Pedri", "Yamal", "Fati"], a: "Yamal" },
        { q: "2015 UCL final captain?", options: ["Messi", "Puyol", "Xavi", "Iniesta"], a: "Xavi" },
        { q: "German manager took over in 2024?", options: ["Klopp", "Nagelsmann", "Flick", "Tuchel"], a: "Flick" },
        { q: "Record fee signing in 2018?", options: ["Suarez", "Mascherano", "Coutinho", "Torres"], a: "Coutinho" },
        { q: "Manager 2021-2024?", options: ["Koeman", "Xavi", "Setien", "Valverde"], a: "Xavi" },
        { q: "2015 UCL Final 3rd goal?", options: ["Rakitic", "Suarez", "Neymar", "Messi"], a: "Neymar" },
        { q: "Temporary stadium?", options: ["Camp Nou", "Montjuïc", "Girona", "Espanyol"], a: "Montjuïc" },
        { q: "Barca's legendary stadium?", options: ["Camp Nou", "Bernabeu", "Anfield", "Wembley"], a: "Camp Nou" },
        { q: "Signed from Bayern in 2022?", options: ["Lewandowski", "Muller", "Sane", "Kimmich"], a: "Lewandowski" },
        { q: "Midfield legend with #8?", options: ["Iniesta", "Xavi", "Busquets", "Pedri"], a: "Iniesta" },
        { q: "Where did Neymar go in 2017?", options: ["PSG", "Madrid", "Al Hilal", "Santos"], a: "PSG" },
        { q: "Current captain (2026)?", options: ["De Jong", "Ter Stegen", "Araujo", "Pedri"], a: "Ter Stegen" },
        { q: "Nicknamed 'The Spider'?", options: ["Julian Alvarez", "Araujo", "Gavi", "Yamal"], a: "Julian Alvarez" },
        { q: "La Masia graduate wearing #6?", options: ["Gavi", "Pedri", "Busquets", "Xavi"], a: "Gavi" },
        { q: "Where did Suarez go in 2020?", options: ["Atletico", "Juventus", "Liverpool", "Ajax"], a: "Atletico" },
        { q: "Youngest ever Barca debutant?", options: ["Yamal", "Fati", "Messi", "Bojan"], a: "Yamal" },
        { q: "Won the Treble in 2009?", options: ["Guardiola", "Xavi", "Both", "Neither"], a: "Both" }
    ],
    "General": [
        { q: "2015/16 PL winners?", options: ["Chelsea", "Leicester City", "Man City", "Spurs"], a: "Leicester City" },
        { q: "2022 World Cup Golden Boot?", options: ["Messi", "Mbappe", "Giroud", "Neymar"], a: "Mbappe" },
        { q: "Which team won 9 consecutive Italian titles?", options: ["Inter", "AC Milan", "Juventus", "Napoli"], a: "Juventus" },
        { q: "2014 World Cup Final winner?", options: ["Klose", "Muller", "Gotze", "Ozil"], a: "Gotze" },
        { q: "Most UCL titles (coach)?", options: ["Ferguson", "Guardiola", "Ancelotti", "Zidane"], a: "Ancelotti" },
        { q: "2023 UCL Final city?", options: ["Paris", "Istanbul", "London", "Lisbon"], a: "Istanbul" },
        { q: "First Conference League winner?", options: ["Feyenoord", "West Ham", "AS Roma", "Fiorentina"], a: "AS Roma" },
        { q: "UCL all-time top scorer?", options: ["Messi", "Ronaldo", "Lewandowski", "Benzema"], a: "Ronaldo" },
        { q: "Won 3 consecutive UEL (2014-16)?", options: ["Villarreal", "Sevilla", "Benfica", "Valencia"], a: "Sevilla" },
        { q: "Euro 2024 winners?", options: ["England", "France", "Spain", "Germany"], a: "Spain" },
        { q: "2021 Ballon d'Or winner?", options: ["Lewandowski", "Messi", "Jorginho", "Benzema"], a: "Messi" },
        { q: "Unbeaten in Bundesliga 2024?", options: ["Bayern", "Dortmund", "Leipzig", "Bayer Leverkusen"], a: "Bayer Leverkusen" },
        { q: "Which stadium is called Home of Football?", options: ["Camp Nou", "Old Trafford", "Wembley", "Maracanã"], a: "Wembley" },
        { q: "2017 World Record transfer?", options: ["Mbappe", "Neymar", "Coutinho", "Dembele"], a: "Neymar" },
        { q: "Won 7 French titles in a row?", options: ["PSG", "Marseille", "Lyon", "Monaco"], a: "Lyon" },
        { q: "Fastest PL hat-trick?", options: ["Fowler", "Mane", "Aguero", "Son"], a: "Mane" },
        { q: "2018 World Cup host?", options: ["Brazil", "Russia", "Qatar", "South Africa"], a: "Russia" },
        { q: "2019 UCL Final loser?", options: ["Ajax", "Barca", "Spurs", "Man City"], a: "Spurs" },
        { q: "Ended Juve's title streak in 2021?", options: ["Napoli", "AC Milan", "Inter Milan", "Roma"], a: "Inter Milan" },
        { q: "Egyptian King?", options: ["Elneny", "Salah", "Mido", "Mostafa"], a: "Salah" },
        { q: "Plays at San Siro (shared)?", options: ["Lazio/Roma", "Inter/Milan", "Genoa/Sampdoria", "Juve/Torino"], a: "Inter/Milan" },
        { q: "2022/23 treble winners?", options: ["Real Madrid", "Man City", "Bayern", "Liverpool"], a: "Man City" },
        { q: "Euro 2024 Player of Tournament?", options: ["Yamal", "Rodri", "Bellingham", "Olmo"], a: "Rodri" },
        { q: "The Yellow Submarine?", options: ["Dortmund", "Villarreal", "Cadiz", "Watford"], a: "Villarreal" },
        { q: "Defeated in 2018 UEL final?", options: ["Marseille", "Arsenal", "Lyon", "Salzburg"], a: "Marseille" },
        { q: "The Special One?", options: ["Klopp", "Mourinho", "Pep", "Conte"], a: "Mourinho" },
        { q: "2014 World Cup Golden Ball?", options: ["James", "Messi", "Muller", "Neuer"], a: "Messi" },
        { q: "Haaland club before City?", options: ["Molde", "Salzburg", "Dortmund", "Leipzig"], a: "Dortmund" },
        { q: "Barca UCL titles total?", options: ["3", "4", "5", "6"], a: "5" },
        { q: "Who scored 2010 World Cup winning goal?", options: ["Villa", "Torres", "Iniesta", "Xavi"], a: "Iniesta" },
        { q: "The Old Lady?", options: ["Lazio", "Juventus", "Porto", "Milan"], a: "Juventus" },
        { q: "2023 Women's WC winners?", options: ["England", "USA", "Spain", "Australia"], a: "Spain" },
        { q: "English player to Madrid 2023?", options: ["Kane", "Rice", "Bellingham", "Saka"], a: "Bellingham" },
        { q: "Which academy produced Ronaldo?", options: ["Porto", "Benfica", "Sporting CP", "Braga"], a: "Sporting CP" },
        { q: "2024 Ballon d'Or winner?", options: ["Vinicius Jr", "Rodri", "Bellingham", "Haaland"], a: "Rodri" },
        { q: "La Liga country?", options: ["Italy", "France", "Spain", "Portugal"], a: "Spain" },
        { q: "El Pistolero?", options: ["Aguero", "Suarez", "Cavani", "Forlan"], a: "Suarez" },
        { q: "2021/22 UEL winners?", options: ["Frankfurt", "Rangers", "West Ham", "Leipzig"], a: "Frankfurt" },
        { q: "Managed Madrid to 2024 UCL?", options: ["Zidane", "Ancelotti", "Raul", "Alonso"], a: "Ancelotti" },
        { q: "PSG is in which city?", options: ["Marseille", "Lyon", "Paris", "Nice"], a: "Paris" },
        { q: "2019 Copa America winners?", options: ["Argentina", "Brazil", "Chile", "Peru"], a: "Brazil" },
        { q: "Largest stadium in Europe?", options: ["Wembley", "Camp Nou", "Bernabeu", "Signal Iduna"], a: "Camp Nou" },
        { q: "Germany manager (2026)?", options: ["Klopp", "Nagelsmann", "Flick", "Tuchel"], a: "Nagelsmann" },
        { q: "Kane joined in 2023?", options: ["Man City", "Real Madrid", "Bayern Munich", "PSG"], a: "Bayern Munich" },
        { q: "2016 Euro winners?", options: ["France", "Portugal", "Germany", "Wales"], a: "Portugal" },
        { q: "Most PL assists ever?", options: ["Fabregas", "Rooney", "Giggs", "De Bruyne"], a: "Giggs" },
        { q: "2023/24 FA Cup winners?", options: ["Man City", "Man United", "Liverpool", "Chelsea"], a: "Man United" },
        { q: "France captain (2026)?", options: ["Griezmann", "Mbappe", "Saliba", "Maignan"], a: "Mbappe" },
        { q: "Zlatan's retirement club?", options: ["PSG", "Man Utd", "AC Milan", "LA Galaxy"], a: "AC Milan" },
        { q: "Yellow Wall stadium?", options: ["Bayern", "Dortmund", "Villarreal", "Arsenal"], a: "Dortmund" }
    ]
};

// 4. THE FUNCTIONS

function setupQuiz(selectedClub) {
    playerName = document.getElementById('username').value.trim();
    
    if (!playerName) {
        alert("Enter a nickname first, bossu!");
        return;
    }

    // Reset State
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 420;

    // Get 20 club questions
    let clubPool = quizData[selectedClub] || [];
    
    // Get 20 random general questions
    let generalPool = [...quizData["General"]];
    let shuffledGeneral = generalPool.sort(() => 0.5 - Math.random());
    let selectedGeneral = shuffledGeneral.slice(0, 20);

    // If "Other" (General Only) picked, need 40 general questions
    if (clubPool.length === 0) {
        selectedGeneral = shuffledGeneral.slice(0, 40);
    }

    // Combine 20 + 20
    currentQuizQuestions = [...clubPool, ...selectedGeneral];

    // Final Shuffle
    currentQuizQuestions.sort(() => 0.5 - Math.random());

    startQuiz();
}

function startQuiz() {
    quizActive = true;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    startTimer();
    showQuestion(); 
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        endQuiz();
        return;
    }

    let question = currentQuizQuestions[currentQuestionIndex];
    
    document.getElementById('progress').innerText = `Question ${currentQuestionIndex + 1}/40`;
    document.getElementById('question-text').innerText = question.q;
    
    const btnGrid = document.getElementById('answer-buttons');
    btnGrid.innerHTML = ''; 

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
        score += 2.5; 
        goalSound.currentTime = 0;
        goalSound.play();
        triggerOverlay('goal-overlay');
    } else {
        whistleSound.currentTime = 0;
        whistleSound.play();
        triggerOverlay('redcard-overlay');
    }

    currentQuestionIndex++;

    // Small delay before moving to next question so animation can play
    setTimeout(() => {
        if (currentQuestionIndex < currentQuizQuestions.length) { 
            showQuestion(); 
        } else {
            endQuiz();
        }
    }, 1000);
}

function startTimer() {
    if (timer) clearInterval(timer);
    
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

document.addEventListener("visibilitychange", () => {
    if (document.hidden && quizActive) {
        score -= 1.5; 
        whistleSound.play();
        alert("🚨 YELLOW CARD! Tab switching detected. -1.5 points penalty.");
    }
});

function triggerOverlay(id) {
    const el = document.getElementById(id);
    el.classList.remove('hidden', 'show'); // Reset
    void el.offsetWidth; // Trigger reflow to restart animation
    el.classList.add('show');
    
    setTimeout(() => {
        el.classList.add('hidden');
        el.classList.remove('show');
    }, 800);
}

const LEADERBOARD_URL = "https://script.google.com/macros/s/AKfycbwFtnqudAHebzN-T-JaP_2Hd92jefbZOH1Cb4yHk2avLYya4mo3EKWHFHnI2dHlxq0l/exec"; 

async function endQuiz() {
    quizActive = false;
    clearInterval(timer);

    // 1. Send Score to Google Sheets
    try {
        await fetch(LEADERBOARD_URL, {
            method: 'POST',
            mode: 'no-cors', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: playerName, score: score })
        });
    } catch (err) {
        console.error("Leaderboard save failed", err);
    }

    // 2. Display Final Screen
    let message = `I just scored ${score}/100 on the Banter FC Common Entrance! ⚽ Can you beat me?`;
    let whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

    const quizScreen = document.getElementById('quiz-screen');
    quizScreen.innerHTML = `
        <div class="container">
            <h1>FT: Quiz Over!</h1>
            <p style="font-size: 2.5rem; color: #58a6ff;">${score}/100</p>
            <p>${score >= 80 ? "Certified Ball Knower ✅" : "Otu Oshi!! 🤡"}</p>
            
            <div id="leaderboard-display" style="margin: 20px 0; text-align: left; background: #0d1117; padding: 15px; border-radius: 8px;">
                <h3 style="text-align: center; border-bottom: 1px solid #333;">Live Leaderboard</h3>
                <p style="text-align: center; font-size: 0.8rem;">(Check the WhatsApp group for the full table!)</p>
            </div>

            <a href="${whatsappURL}" target="_blank" class="ans-btn" style="text-decoration: none; background: #25D366; display: block; margin-bottom: 10px;">
                Share to WhatsApp 📱
            </a>
            <button onclick="location.reload()" class="ans-btn" style="width: 100%;">Rematch?</button>
        </div>
    `;
}
