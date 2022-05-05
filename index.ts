
const COLOR_PREFIX = '\x1B['
const COLOR_SUFIX = 'm'
const RESET_COLOR_SYMBOL = `${COLOR_PREFIX}0${COLOR_SUFIX}`

enum COLORS { black= '30', red= '31', green= '32', yellow= '33', blue= '34', magenta= '35', cyan='36', white= '37' }
enum BG { black= '40', red= '41', green= '42', yellow= '43', blue= '44', magenta= '45', cyan= '46', white= '47'}

type Color = keyof typeof COLORS
type Backgroud = keyof typeof BG


function getColor(color: string) {
    return  `${COLOR_PREFIX}${color}${COLOR_SUFIX}`
}

function colorfulLog(message: string, color: Color, background?: Backgroud ) {
    const textColor = getColor(COLORS[color]);
    const backgroudColor = background ? getColor(BG[background]) : ''
    console.log(`${textColor}${backgroudColor}${message}${RESET_COLOR_SYMBOL}`);
}

function logGloryToUkraine() {    
    colorfulLog("  SLAVA  ", "yellow", "cyan")
    colorfulLog(" UKRAINI ", "cyan", "yellow")
}

function initialFunction(message: string) {
    console.log('initialFunction: ', message);
}

const userInput = process.argv[2]

if(userInput){    
    initialFunction(userInput)
    colorfulLog(userInput, "yellow")
}

logGloryToUkraine()
