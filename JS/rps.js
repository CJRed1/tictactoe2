let user1 = window.prompt('User 1, tell me your name.')
let user2 = window.prompt('Now User 2, tell me your name.')

let options1 = window.prompt(user1 + ', choose an option (R|P|S)')
let options2 = window.prompt(user2 + ', choose an option (R|P|S)')

// let options1
// while(true) {
//     options1 = window.prompt(user1 + ', choose a VALID option (R|P|S)')
//     if (options1 == 'R' || options1 == 'P' || options1 == 'S') {
//        break
//     }
// }

// let options2
// while(true) {
//     options2 = window.prompt(user2 + ', choose a VALID option (R|P|S)')
//     if (options2 == 'R' || options2 == 'P' || options2 == 'S') {
//        break
//     }
// }

switch (typeof(options1) == 'string' && typeof(options2) == 'string') {
    // Player 2 wins //
    case options1 == 'R' && options2 == 'P':
        window.alert(user2 + ' is the winner with ' + options2 + ' as the chosen option.')
        break

    case options1 == 'P' && options2 == 'S':
        window.alert(user2 + ' is the winner with ' + options2 + ' as the chosen option.')
        break

    case options1 == 'S' && options2 == 'R':
        window.alert(user2 + ' is the winner with ' + options2 + ' as the chosen option.')
        break

    // Player 1 wins //
    case options1 == 'P' && options2 == 'R':
        window.alert(user1 + ' is the winner with ' + options1 + ' as the chosen option.')
        break

    case options1 == 'S' && options2 == 'P':
        window.alert(user1 + ' is the winner with ' + options1 + ' as the chosen option.')
        break

    case options1 == 'R' && options2 == 'S':
        window.alert(user1 + ' is the winner with ' + options1 + ' as the chosen option.')
        break

    // Draws //
    case options1 == 'R' && options2 == 'R':
        window.alert("It's a draw.")
        break

    case options1 == 'P' && options2 == 'P':
        window.alert("It's a draw.")
        break

    case options1 == 'S' && options2 == 'S':
        window.alert("It's a draw.")
        break
}

if (typeof(options1) == 'string' && typeof(options2) == 'string') {
    if (options1 == 'R' && options2 == 'P') {
        window.alert(user2 + ' is the winner with ' + options2 + ' as the chosen option.')
    }
    else if (options1 == 'P' && options2 == 'S') {
        window.alert(user2 + ' is the winner with ' + options2 + ' as the chosen option.')
    }
} else {
    window.alert('Kill yourself you fucking donkey')
    
    options1 = window.prompt(user1 + ', choose a VALID option (R|P|S)')
    options2 = window.prompt(user2 + ', choose a VALID option (R|P|S)')
}