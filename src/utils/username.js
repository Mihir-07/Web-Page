 const ADJECTIVES = [
    'vulgar',
    'flimsy',
    'stiff',
    'uncovered',
    'wet',
    'nutritious',
    'loutish',
    'aspiring',
    'hypnotic',
   'optimal',
    'colorful',
    'pleasant',
    'mature',
    'itchy',
    'fallacious',
    'smart',
    'hideous',
    'obnoxious',
    'rightful',
    'automatic',
 ]

 const OBJECTS = [
    'okapi',
    'lynx',
    'donkey',
    'thorny',
    'hippopotamus',
    'badger',
    'cheetah',
    'elephant',
    'gazelle',
    'ermine',
    'mountain',
    'pony',
    'camel',
    'salamander',
    'ape',
    'fish',
    'addax',
    'capybara',
    'basilisk',
    'duckbill',
 ]

 function getrandomuser() {
     const adj = ADJECTIVES[Math.floor(Math.random() * 20)]
        const obj = OBJECTS[Math.floor(Math.random() * 20)]
        return `${adj}-${obj}`

 }

 module.exports = {
     getrandomuser
 }