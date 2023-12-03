
import * as R from 'ramda';

const getMax = games => {
    const getMaxByColor = color => {
        return Math.max(...games[1].map(g => g[color]))
    }

    const colors = ['red', 'green', 'blue'];
    const result =  colors.map(color => getMaxByColor(color)).reduce((acc, cur)=> {
        const x = acc * cur;
        return x;
    }, 1)
    return result;
}

export const parseGame = (game) => {
    return game.split(';').map(round => {
        return round.trim().split(', ').reduce((acc, cur) => {
            const [n, name] = cur.split(' ');
            return acc;
        }, { red: 0, green: 0, blue: 0})
    })
};

export const parseInput = input => {
    return input.split('\n').map(row => {
      const [name, game] = row.split(':');
      const gameNumber = name.replace(/\D/g,'');
      const parsedGame = parseGame(game);
      return [gameNumber, parsedGame];
    })
}

const main = async (input) => {
    const pred = R.where({
        red: n => n <= 12,
        green: n => n <= 13,
        blue: n => n <= 14,
      });
    const parsed = parseInput(input);
    const filteredGames = parsed.filter(row => {
        return row[1].every(shape => {
            return pred(shape);
        });
    })
    return R.sum(filteredGames.map(arr => arr[0]));
};

export const main2 = async (input) => {
    const parsed = parseInput(input);
    const maxCubes = parsed.map(row => {
        return getMax(row)
    })
    return R.sum(maxCubes);
}


export default main;