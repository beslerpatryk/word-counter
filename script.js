// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types

const textArea = document.getElementById("txtid")
const wordCount = document.getElementById("count")
const charCount = document.getElementById("ch-count")
const sentCount = document.getElementById("sent-count")

const autoCorrect = document.getElementById("autocorrect-btn")
const clearBtn = document.getElementById("clear-btn")
const demoTextBtn = document.getElementById('demo-text-btn')

demoTextBtn.addEventListener('click', () => {
    textArea.value = demoText
})


clearBtn.addEventListener('click', () => {
    textArea.value = ""
})


autoCorrect.addEventListener('click', () => {

    if(textArea.spellcheck){
        textArea.spellcheck = false
    }else {
        textArea.spellcheck = true
    }
console.log(textArea.spellcheck)

})

autoCorrect.checked = true
console.log(textArea.spellcheck)


function updateCount(){
    let words = 0;
    let chars = 0;
    let sentences = 0;
    if(textArea.value === ""){
        words = 0
        chars = 0
        sentences = 0;

        wordCount.innerText = words      
        charCount.innerHTML = chars          
        sentCount.innerHTML = sentences
    }else {
        chars = textArea.value.length
        charCount.innerHTML = chars
        words = countWords()
        wordCount.innerText = words
        sentences = countSentences();
        sentCount.innerText = sentences
    }
}

function countSentences() {
    let text = textArea.value + " ";
    text = text.replaceAll("!", ".")

    const sentences = text.split(". ");
    return sentences.length - 1
}

function countWords(){
    let text = textArea.value
    text = text.replaceAll(",", " ")
    text = text.replaceAll(";", " ")
    text = text.replaceAll(":", " ")
    text = text.replaceAll("'", " ")
    text = text.replaceAll(">", " ")
    text = text.replaceAll("<", " ")
    text = text.replaceAll(".", " ")
    text = text.replaceAll("!", " ")
    text = text.replaceAll("/", " ")
    text = text.replaceAll("\\", " ")
    text = text.replaceAll("'", " ")
    text = text.replaceAll(")", " ")
    text = text.replaceAll("(", " ")

    text = text.replace(/\s+/g, " ");
    text.trim()

    let words = text.split(" ")
    
        for(let [idx, word] of words.entries()){
        if(word==""){
            words.splice(idx, 1)
        }
    }
    return words.length
}

// setTimeout(updateCount, 3000)
setInterval(updateCount, 100)



const demoText = 

`The JEDI removes his cloak and jumps down behind the GENERAL.

OBI-WAN: Hello, there!

GENERAL GRIEVOUS: General Kenobi, you are a bold one. I find your behavior bewildering . . . Surely you realize you're doomed, (to droids) Kill him!

About a HUNDRED BATTLE DROIDS surround OBI-WAN, GENERAL GRIEVOUS, and his BODYGUARDS. OBI-WAN looks around, then walks right up to GENERAL GRIEVOUS.
They stare at each other for a moment.

GENERAL GRIEVOUS: Enough of this.

The BODYGUARDS raise their power staffs to knock OBI-WAN away, but OBI-WAN ducks as the deadly staffs whistle over his head. The Jedi's lightsaber ignites, and OBI-WAN deftly cuts one BODYGUARD in two. His staff flies into the air and is caught by GENERAL GRIEVOUS. The other THREE BODYGUARDS attack OBI-WAN with an intense fury.
OBI-WAN uses the Force to release apiece of equipment from the ceiling. It drops on the BODYGUARDS, smashing them. OBI-WAN walks toward GRIEVOUS, slashing the last BODYGUARD to pieces. BATTLE DROIDS move toward OBI-WAN.

GENERAL GRIEVOUS: Back away. I will deal with this Jedi slime myself.

OBI-WAN: Your move.

GENERAL GRIEVOUS: You fool. I have been trained in your Jedi arts by Count Dooku himself. Attack, Kenobi.

His arms separate and grab all four lightsabers on his belt. His four arms create a flashing display of swordsmanship.

OBI-WAN: You forget I trained the Jedi that defeated Count Dooku!

OBI-WAN is hard-pressed to defend himself against the deadly onslaught. They fight across the control room as the BATTLE DROID SHARPSHOOTERS try to pick off the Jedi. OBI-WAN mounts a ferocious counterattack and cuts off one of GRIEVOUS's hands. A loud EXPLOSION is heard echoing throughout the sinkhole. GENERAL GRIEVOUS and OBI-WAN glance to the entrance of the control center and see CLONE TROOPS in the distance, attacking DROIDS in the sinkhole. On the far wall of the sinkhole, CLONES can be seen rappelling onto balconies.

OBI-WAN: I may not defeat your droids, but my troops certainly will.

GENERAL GRIEVOUS: Army or not, you must realize you are doomed.

OBI-WAN: I don't think so.`