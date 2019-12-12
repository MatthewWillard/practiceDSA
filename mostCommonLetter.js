function mostCommon(s) {
    if (s.length === 0) {
        return null;
    }

    s = s.toLowerCase();

    const characters = {};
    for (let i = 0; i < s.length; i++) {
        var character = s.charAt(i);
        const characterCode = s.charCodeAt(i);
        if (characterCode < 97 || characterCode > 122) {
        // Filter non a-z characters
            continue;
        }

        if (!(character in characters)) {
            characters[character] = 1;
        }
        else {
            characters[character]++;
        }
    }

    let mostCommonCharacter = null;
    let maxOccurrences = 0;
    for (let character in characters) {
        const count = characters[character];

        if (count > maxOccurrences) {
            mostCommonCharacter = character;
            maxOccurrences = count;
        }
    }
    return mostCommonCharacter;
};

//This is still O(n), but you only need to loop through the string 1 time and the hash map 1 time;