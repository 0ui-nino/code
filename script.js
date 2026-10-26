const icode = document.getElementById('icode')
const bok = document.getElementById('bok')
const txt = document.getElementById('txt')
const image=document.getElementById('image')
let admin = 0
let timers = []
bok.addEventListener("click", enter)

function reset() {
    document.body.style.backgroundColor = "darkslategrey"
    txt.textContent = ""
    txt.style.color = "black"
    for (const timer of timers) {clearTimeout(timer)}
    timers = []
    image.src = ""
}

function enter(event) {
    event.preventDefault()
    const code = icode.value
    icode.value = ""

    if (code.trim() === "") {return}

    reset()

    if (admin === 1) {if (code === "IMTHEADMIN"){
        txt.textContent = "entrez le second code administrateur"
        admin = 2
        return
    }
    else {admin = 0 ; txt.textContent = "code incorrect" ; return}    
    }

    else if (admin === 2 ) {if ( code === "42") {
        txt.textContent = "droit d'administrateur accordé !"
        admin = true
        return
    }
    else {admin = 0 ; txt.textContent = "code incorrect" ; return}
    }


    if (code === "bonjour") {
        txt.textContent = "bien le bonjour à toi aussi"
    }
    else if (code === "UwU") {
        document.body.style.backgroundColor = "pink"
        txt.textContent = "~UwU~"
        txt.style.color = "darkorchid"
    }
    else if (code === "pi") {
        txt.textContent = Math.PI+"..."
    }
    else if (code === "doom") {
        txt.textContent = "chargement..."
        timers.push(setTimeout(function() {
            txt.textContent = "chargement"
        }, 1000))
        timers.push(setTimeout(function() {
            txt.textContent = "chargement."
        }, 2000))
        timers.push(setTimeout(function() {
            txt.textContent = "chargement.."
        }, 3000))
        timers.push(setTimeout(function() {
            txt.textContent = "chargement..."
        }, 4000))
        timers.push(setTimeout(function() {
            txt.textContent = "Doom n'a pas chargé en raison de l'erreur suivante :\nC'était un troll, je n'ai pas le niveau pour mettre doom ici..."
        }, 5000))
    }
    else if (code === "admin") {
        if (admin === true) {txt.textContent = "vous êtes bien connecté en tant qu'administrateur"}
        else {
            txt.textContent = "entrez votre code administrateur"
            admin = 1
        }
    }
    else if (code === "/give @s minecraft:netherite_ingot") {
        txt.textContent = "vous êtes un tricheur\nvous êtes un tricheur\nvous êtes un tricheur\nvous êtes un tricheur\n..."
        image.src = "images/netherite_ingot.png"
    }
    else if (code === "Troie"){
        txt.textContent = "Les grecs ont vaincus les troyens !!"
        image.src = "images/casque.png"
    }
    else if (code === "bismillah c'est les ténèbres") {
        txt.textContent = "Vous avez bien été identifié comme un membre des forces de l'ordre"
        image.src = "images/EmblèmeCRS.svg.png"
    }
    else {
        txt.textContent = "ce code n'existe pas"
        txt.style.color = "red"
    }
}
