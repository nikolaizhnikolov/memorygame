import ag from './ag.jpeg';
import lmnt from './lmnt.jpeg';
import sleep from './8sleep.jpeg';

const image = (src, key) => {
    const i = Object.create(null);
    i.src = src;
    i.key = key;
    return i;
}

const storage = [
    image(ag, 1),
    image(lmnt, 2),
    image(sleep, 3),
    // image(, 4),
    // image(, 5),
    // image(, 6),
    // image(, 7),
    // image(, 8),
    // image(, 9),
    // image(, 10),
    // image(, 11),
    // image(, 12)
]

export default storage;