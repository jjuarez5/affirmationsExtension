const headerElement = document.getElementById('affirmHeader') as HTMLElement | null;
const affirmations: string[] = [
    "I've got this! I can totally handle whatever comes my way.",
    "My out-of-the-box thinking always sets me apart at work.",
    "Work hard, play hard – I've got the balance down.",
    "Every day, I'm leveling up in my career game.",
    "I bring mad fresh ideas to every project, yo.",
    "Chill vibes only – my laid-back attitude keeps the office cool.",
    "I know my stuff and I'm always ready to hustle.",
    "Change is just another chance to level up, you feel me?",
    "I keep it real and earn respect from everyone, no cap.",
    "Grateful for the hustle – I'm all about seizing those opportunities.",
    "My chill vibe fosters major teamwork in the office.",
    "I trust the journey – every grind counts, fam.",
    "When challenges pop up, I stay zen and find solutions like it's NBD.",
    "My generation's perspective is game-changing in the corporate world.",
    "Spreading good vibes and motivation like it's my job.",
    "Big or small wins, I'm flexing and celebrating every victory.",
    "Being real builds solid connections with clients and coworkers.",
    "I'm steering my career path like a boss – all about that success and fulfillment.",
    "My laid-back style? It's part of what makes me professional.",
    "My youth is my power – bringing that energy and freshness to the grind."
];

console.log('This is the header element => ', headerElement)


function getRandomValueFromArray(arr: string[]): string | undefined {
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

if (headerElement) {
    headerElement.innerText = getRandomValueFromArray(affirmations) ?? 'Hang in there';
}
